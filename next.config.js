/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/thumb/2/2f/**",
      },
    ],
  },
};

module.exports = nextConfig;
