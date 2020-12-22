import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as EncouragingWords from '../lib/encouraging-words-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new EncouragingWords.EncouragingWordsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
