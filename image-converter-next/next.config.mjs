/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: new URL(process.env.R2_PUBLIC_URL).protocol.replace(':', ''),
        hostname: new URL(process.env.R2_PUBLIC_URL).hostname,
      },
    ],
  },
}

export default nextConfig; 