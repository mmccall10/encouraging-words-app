import * as cdk from '@aws-cdk/core';
import { Topic } from '@aws-cdk/aws-sns';
import { Function, Code, Runtime } from '@aws-cdk/aws-lambda';

import { Rule, Schedule } from '@aws-cdk/aws-events';
import { LambdaFunction } from '@aws-cdk/aws-events-targets';
export class EncouragingWordsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // topic to publish our message to
    const topic = new Topic(this, 'Topic')

    const fn = new Function(this, 'Function', {
      runtime: Runtime.NODEJS_12_X,
      code: Code.fromAsset('lambda'),
      handler: 'encouragingWords.handler',
      environment: {
        SNS_TOPIC_ARN: topic.topicArn,
        REGION: 'us-west-2',
      }
    })

    topic.grantPublish(fn)

    const rule = new Rule(this, 'Cron', {
      schedule: Schedule.cron({ minute: '0', hour: '16' })
    })

    rule.addTarget(new LambdaFunction(fn))

    new cdk.CfnOutput(this, 'TopicArn', {
      value: topic.topicArn
    })

    new cdk.CfnOutput(this, 'FunctionArn', {
      value: fn.functionArn
    })

  }
}
