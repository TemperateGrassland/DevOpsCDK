#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { DevOpsCdkPipelineStack } from '../lib/dev_ops_cdk_pipeline-stack';

const app = new App();

new DevOpsCdkPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
    env: { account: 'ApprenticeAcc', region: 'eu-west-2' },
});

app.synth();