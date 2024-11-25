import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true, // Optional: shows full URL of fetches
    }
  }

};

export default nextConfig;
