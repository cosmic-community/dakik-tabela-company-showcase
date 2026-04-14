/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Changed: Use remotePatterns to replace deprecated images.domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com'
      }
    ]
  }
};

module.exports = nextConfig;