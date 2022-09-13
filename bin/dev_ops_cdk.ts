#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { DevOpsCdkPipelineStack } from '../lib/dev_ops_cdk_pipeline-stack';

const app = new App();

new DevOpsCdkPipelineStack(app, 'DevOpsCdkPipelineStack', {
    env: { account: 'charlie_apprentice', region: 'eu-west-1' },
});

app.synth();