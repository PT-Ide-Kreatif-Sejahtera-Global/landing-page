/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
      },
      trailingSlash: true,
    images: { unoptimized: true },
};

export default nextConfig;
