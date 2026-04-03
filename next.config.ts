import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // BlackMagickOps paths → Digital Sourcery foundation
      {
        source: "/blackmagickops",
        destination: "/foundation",
        permanent: true,
      },
      {
        source: "/blackmagickops/:path*",
        destination: "/foundation",
        permanent: true,
      },
      // Legacy paths
      {
        source: "/services",
        destination: "/intelligence",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
