// next.config.js

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  webpack: (config, { isServer }) => {
    delete config.optimization.splitChunks;
    return config;
  },
};

export default nextConfig;
