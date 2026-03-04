/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  // Добавляем эту строку, чтобы пропустить генерацию страниц с базой данных при сборке
  output: 'standalone',
};

export default nextConfig;
