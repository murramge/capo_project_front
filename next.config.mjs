// next.config.js

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  webpack: (config, { isServer }) => {
    delete config.optimization.splitChunks;
    return config;
  },
  images: {
    // Next.js의 이미지 최적화 비활성화 설정
    disableStaticImages: true,
    domains: ["storage.googleapis.com"],
    unoptimized: true,
  },
};

export default nextConfig;
