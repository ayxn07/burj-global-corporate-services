import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the custom quality values used across the app
    qualities: [60, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
