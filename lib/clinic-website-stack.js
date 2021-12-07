const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');
const iam = require('@aws-cdk/aws-iam');
const cloudfront = require('@aws-cdk/aws-cloudfront');
const s3deploy = require('@aws-cdk/aws-s3-deployment');
const acm = require('@aws-cdk/aws-certificatemanager');
const route53 = require('@aws-cdk/aws-route53');
const targets = require('@aws-cdk/aws-route53-targets');
const cloudwatch = require('@aws-cdk/aws-cloudwatch');

class ClinicWebsiteStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const zone = route53.HostedZone.fromLookup(this, 'Zone', { domainName: props.domainName });
    const siteDomain = props.domainName;
    new cdk.CfnOutput(this, 'Site', { value: 'https://' + siteDomain });

    const bucket = new s3.Bucket(this, 'clinicjs.org', {
      accessControl: s3.BucketAccessControl.PUBLIC_READ,
      bucketName: 'prod.clinicjs.org',
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      versioned: true,
    });

    const cloudfrontOAI = new cloudfront.OriginAccessIdentity(this, 'cloudfront-OAI', {
      comment: `OAI for ${id}`
    });

    // Grant access to cloudfront
    bucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [bucket.arnForObjects('*')],
      principals: [new iam.CanonicalUserPrincipal(cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId)]
    }));
    new cdk.CfnOutput(this, 'Bucket', { value: bucket.bucketName });

    // TLS certificate
    const certificateArn = new acm.DnsValidatedCertificate(this, 'SiteCertificate', {
      domainName: siteDomain,
      subjectAlternativeNames: ['www.' + siteDomain],
      hostedZone: zone,
      region: 'us-east-1', // Cloudfront only checks this region for certificates.
    }).certificateArn;
    new cdk.CfnOutput(this, 'Certificate', { value: certificateArn });

    // Specifies you want viewers to use HTTPS & TLS v1.1 to request your objects
    const viewerCertificate = cloudfront.ViewerCertificate.fromAcmCertificate({
      certificateArn: certificateArn,
      env: {
        region: cdk.Aws.REGION,
        account: cdk.Aws.ACCOUNT_ID
      },
      node: this.node,
      stack: scope,
      metricDaysToExpiry: () =>
        new cloudwatch.Metric({
          namespace: "TLS Viewer Certificate Validity",
          metricName: "TLS Viewer Certificate Expired",
        }),
      },
      {
        sslMethod: cloudfront.SSLMethod.SNI,
        securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        aliases: [siteDomain, 'www.' + siteDomain]
      }
    )
    // CloudFront distribution
    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'SiteDistribution', {
      viewerCertificate,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
      originConfigs: [
        {
          customOriginSource: {
            domainName: bucket.bucketWebsiteDomainName,
          },
          behaviors: [{
            isDefaultBehavior: true,
            compress: true,
            allowedMethods: cloudfront.CloudFrontAllowedMethods.ALL,
          }],
        }
      ]
    });

    new cdk.CfnOutput(this, 'DistributionId', { value: distribution.distributionId });
    // Route53 alias record for the CloudFront distribution
    new route53.ARecord(this, 'SiteAliasRecord', {
      recordName: siteDomain,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      zone
    });
    new route53.CnameRecord(this, 'SiteAliasRecordWWWCname', {
      recordName: 'www.' + siteDomain,
      domainName: siteDomain,
      zone
    });

    new s3deploy.BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [s3deploy.Source.asset('./public')],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ['/*'],
    });
  }
}

module.exports = { ClinicWebsiteStack }
