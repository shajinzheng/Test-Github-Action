const core = require('@actions/core');
const github = require('@actions/github');

try {
  const productToDeploy = core.getInput('product');
  const fabricToDeploy = core.getInput('fabric')
  const tagToDeploy = core.getInput('tag')
  const betaVersion = core.getInput('betaVersion')
  const baseVersion = core.getInput('baseVersion')
  const rampPercentage = core.getInput('ramp_percentage')

  console.log(`This action should ramp ${productToDeploy} ${rampPercentage} of version ${betaVersion} on fabric ${fabricToDeploy} with tag ${tagToDeploy}. Base version is ${baseVersion}.`);

  core.setOutput("execution_response", 200);

  // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}