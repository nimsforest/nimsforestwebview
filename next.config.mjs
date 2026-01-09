/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Rewrites don't work with static export, but we include them for dev mode
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8090/api/:path*',
      },
    ];
  },
};

export default nextConfig;
