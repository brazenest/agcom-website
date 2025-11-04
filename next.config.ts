import type { NextConfig } from "next";
import removeImports from 'next-remove-imports';
import path from "path";
// @ts-check

const nextConfigFn = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig: NextConfig = {
    /* config options here */
    env: {
      AWS_ACCESS_KEY_ID: 'AKIATB2JF6TSPJE2HGM5',
      AWS_SECRET_ACCESS_KEY: '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',
      AWS_REGION: 'us-east-2',
      API_HOST: 'stunning-guide-grjrr7659p439wwx-3000.app.github.dev',
      API_PORT: '80',
      API_SCHEME: 'https',
    },
    reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
    async headers() {
      return [
        {
          // matching all API routes
          source: "/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
            { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    },
    async redirects() {
      return [
        {
          source: '/blog',
          destination: '/blog/articles',
          permanent: false,
        },
      ];
    },
    ...removeImports({
      ...defaultConfig
    }),
    experimental: {
      serverActions: {
        // edit: updated to new key. Was previously `allowedForwardedHosts`
        allowedOrigins: [
          'localhost',
          'stunning-guide-grjrr7659p439wwx-3000.app.github.dev',
        ],
      },
    },
  };
  return nextConfig
}

export default nextConfigFn
