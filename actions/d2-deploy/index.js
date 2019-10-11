const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(`This is the log for any-action`);

  const product = core.getInput('product');
  const fabric = core.getInput('fabric');
  const cluster = core.getInput('cluster');
  const version = core.getInput('version');

  console.log(`This action should deploy D2 configurations for product - ${product}, fabric - ${fabric}, cluster - ${cluster}, version ${version}`);

  core.setOutput("execution_response", 200);

} catch (error) {
  core.setFailed(error.message);
}