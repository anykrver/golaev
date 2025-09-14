import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.atherenergy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.atherenergy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'acerelectric.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mgmotor.scene7.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
