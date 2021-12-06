#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { ClinicWebsiteStack } = require('../lib/clinic-website-stack');

const app = new cdk.App();
new ClinicWebsiteStack(app, 'ClinicjsWebsite', {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: 'us-east-1'
  },
  domainName: 'clinicjs.org',
  siteSubDomain: 'www'

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
