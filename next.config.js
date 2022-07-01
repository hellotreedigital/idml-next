/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// module.exports = nextConfig
module.exports = {
  nextConfig,
    webpack: (config, { isServer }) => {
      if (isServer) {
        require("./scripts/sitemap-generator");
      }
      return config;
    },
  };