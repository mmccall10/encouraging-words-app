#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EncouragingWordsStack } from '../lib/encouraging-words-stack';

const app = new cdk.App();
new EncouragingWordsStack(app, 'EncouragingWordsStack');
