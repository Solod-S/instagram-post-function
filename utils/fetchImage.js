const { get } = require("request-promise");

/**
 * Download image by URL and return buffer
 */
async function fetchImage(url) {
  const buffer = await get({ url, encoding: null });
  return buffer;
}

module.exports = { fetchImage };
