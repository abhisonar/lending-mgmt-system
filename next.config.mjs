/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/listing',
        permanent: false,
      },
      {
        source: '/listing',
        destination: '/listing/owner',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
