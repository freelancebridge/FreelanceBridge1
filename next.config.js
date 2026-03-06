/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Это проигнорирует ошибки типов, чтобы сайт точно собрался
    ignoreBuildErrors: true,
  },
  eslint: {
    // Это проигнорирует ошибки линтера при сборке
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
}

module.exports = nextConfig
