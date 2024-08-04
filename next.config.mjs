/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.UPLOADER_PROTOCOL,
        hostname: process.env.UPLOADER_HOSTNAME,
      },
    ],
  },
};

export default nextConfig;
