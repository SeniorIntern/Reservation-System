/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
});

const nextConfig = withPWA({
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  }
});

module.exports = nextConfig;
