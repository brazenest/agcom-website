import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    AWS_ACCESS_KEY_ID: 'AKIATB2JF6TSPJE2HGM5',
    AWS_SECRET_ACCESS_KEY: '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',
    AWS_REGION: 'us-east-2',
  },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
  //         { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ]
  // },
  async redirects() {
    return [
      // {
      //   source: '/blog',
      //   destination: '/blog/articles',
      //   permanent: false,
      // },
    ];
  },
};

export default nextConfig;
