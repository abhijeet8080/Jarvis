import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
        domains: ["lh3.googleusercontent.com"],

  },
  async headers() {
    return [
      {
        source: '/models/:file*',
        headers: [
          {
            key: 'Content-Type',
            value: 'model/gltf-binary',
          },
        ],
        
      },
    ];
  },
};

export default nextConfig;
