/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export for production builds
  // In development, this is ignored and API routes work normally
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable SWC and use Babel instead (for platforms without SWC binaries)
  swcMinify: false,
  // Rewrites for proxying to external backend (only in dev mode with NEXT_PUBLIC_API_URL set)
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // If no external API URL is configured, don't add rewrites
    // (use the built-in mock API route instead)
    if (!apiUrl) {
      return [];
    }

    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
