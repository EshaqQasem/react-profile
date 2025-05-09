import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'technovizen.com',
        pathname: '/storage/media/**',
      },
    ],
  },
};

export default nextConfig;
