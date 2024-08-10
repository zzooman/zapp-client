// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['zapp-medias.s3.ap-northeast-2.amazonaws.com'],
  },

  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 180,
    },
  },
};

module.exports = nextConfig;
