import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    imageSizes: [32, 48, 64, 96, 128, 215, 384, 512],
    deviceSizes: [320, 380, 440, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      { protocol: "https", hostname: "imgur.com", pathname: "/**" },
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "images.png", pathname: "/**" },
      { protocol: "https", hostname: "placeimg.com", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "laceon.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
