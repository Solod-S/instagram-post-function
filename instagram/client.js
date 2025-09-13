const { IgApiClient } = require("instagram-private-api");

async function createIgClient() {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  if (process.env.IG_PROXY) ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  return ig;
}

module.exports = { createIgClient };
