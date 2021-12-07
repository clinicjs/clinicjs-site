### Clinic.js website Hosting and Deployment

There are two instances of the website. [www.clinicjs.org](https://www.clinicjs.org) and [clinicjs.netlify.app](https://clinicjs.netlify.app/).

#### S3

The `production` version of the website is hosted in [AWS S3](https://console.aws.amazon.com/s3/home?region=us-east-1#) (US East). The buckets are in place:

- `prod.clinicjs.org ` (production)

#### Cloudfront

Additionally, there are [AWS Cloudfront](https://console.aws.amazon.com/cloudfront/home?region=us-east-1) distributions linked up to each bucket.

CloudFront is a Content Delivery Network. It essentially acts as a wrapper around our S3 buckets and provides the following features:

- Caching of the website in around the world for quicker access.
- Support for custom domain names (www.clinicjs.org) with SSL certificates.

#### DNS & SSL Certificates

- We have one clinicjs domains - clinicjs.org - managed in [AWS Route 53](https://console.aws.amazon.com/route53/home?region=us-east-1#).
- We have a wildcard SSL certificate that covers *.clinicjs.org in [AWS ACM](https://console.aws.amazon.com/acm/home?region=us-east-1#)

#### OIDC Credentials

This repository makes use of OpenID Connect to allow Github Actions workflow access AWS resources,
it's a safer approach since it doesn't store AWS Credentials as long-lived Github Secrets.

For a detailed example in how to configure the AWS role, [check this](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) tutorial.
