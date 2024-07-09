// next.config.js

const nextConfig = {
  reactStrictMode: true,

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
  distDir: "out",
};

export default nextConfig;
