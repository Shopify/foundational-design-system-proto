/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    // SUGGESTION: Can we add this API to the yarn workspace and import utils from @polaris/tokens.
    externalDir: true,
  },
};
