/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Это заставит Vercel пропустить ошибки TypeScript
    ignoreBuildErrors: true,
  },
  eslint: {
    // Это пропустит проверки правил написания кода
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
