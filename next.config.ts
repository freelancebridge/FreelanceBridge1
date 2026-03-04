/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  // Это отключит генерацию страниц, требующих базу данных, во время сборки
  output: 'standalone'
};

export default nextConfig;
