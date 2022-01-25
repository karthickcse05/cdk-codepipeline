#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCodepipelineStack } from '../lib/cdk-codepipeline-stack';

const app = new cdk.App();
const myaws = { account: '713792433226', region: 'us-east-1' };
new CdkCodepipelineStack(app, 'CdkCodepipelineStack', {
  env:myaws,
  description:"test stack for cicd",
  stackName:"test-stack-cicd"
});