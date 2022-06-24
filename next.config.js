/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experiments:{
    topLevelAwait: true,
  }
}

module.exports = {
  // target: 'experimental-serverless-trace',
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },
};
