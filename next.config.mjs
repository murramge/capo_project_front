const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    delete config.optimization.splitChunks;
    return config;
  },
  images: {
    // Next.js의 이미지 최적화 비활성화 설정
    disableStaticImages: true,
    domains: ['storage.googleapis.com'],
  },
  
  distDir: 'out',

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // 필요한 경로를 추가로 설정할 수 있습니다.
    }
  },
};

export default nextConfig;