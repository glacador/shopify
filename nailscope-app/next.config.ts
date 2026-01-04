import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/ftd', destination: '/results/ftd', permanent: true },
      { source: '/nps', destination: '/results/nps', permanent: true },
      { source: '/csd', destination: '/results/csd', permanent: true },
      { source: '/agn', destination: '/results/agn', permanent: true },
      { source: '/tnf', destination: '/results/tnf', permanent: true },
      { source: '/bsp', destination: '/results/bsp', permanent: true },
      { source: '/oly', destination: '/results/oly', permanent: true },
      { source: '/prn', destination: '/results/prn', permanent: true },
      { source: '/itn', destination: '/results/itn', permanent: true },
      { source: '/ysn', destination: '/results/ysn', permanent: true },
      { source: '/rdl', destination: '/results/rdl', permanent: true },
      { source: '/prf', destination: '/results/prf', permanent: true },
      { source: '/gns', destination: '/results/gns', permanent: true },
    ]
  },
};

export default nextConfig;
