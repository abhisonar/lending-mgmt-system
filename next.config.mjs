/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/listing',
        destination: '/listing/owner',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
