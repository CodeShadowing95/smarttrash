/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: false
      }
    ]
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

export default nextConfig;
