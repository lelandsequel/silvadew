import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-robots-tag', value: 'index, follow' }
        ]
      }
    ]
  }
};

export default nextConfig;
