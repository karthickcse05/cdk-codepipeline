import { CfnOutput, Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkCodepipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, 'CdkCodepipelineQueue', {
      retentionPeriod: Duration.days(4),
      queueName:"cdk-pipeline-cicd"
    });

    new CfnOutput(this, 'cfnoutput-cdk', {
      value: queue.queueName,
      exportName: 'testing-export-sqs-name',
    });
  }
}
