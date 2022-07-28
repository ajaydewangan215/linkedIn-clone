/** @type {import('next').NextConfig} */
const nextConfig = {
  // darkMode:"class",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['content.linkedin.com', 'picsum.photos', 'static-exp1.licdn.com', 'www.iconsdb.com', 'images.fastcompany.net']
  },
}

module.exports = nextConfig

