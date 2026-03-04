/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  // Это отключит Turbopack и заставит использовать стандартный сборщик (Webpack)
  swcMinify: true,
};

export default nextConfig;
