import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  images: {
     domains: [
      "static.vecteezy.com",
      "s3.ap-south-1.amazonaws.com",
      "img.freepik.com",
      "7wdata.be",
      "mainifesto.com",
      "image.made-in-china.com",
      "circuitdigest.com",
      "www.gambody.com",
    ],
  },
  /* config options here */
};

export default nextConfig;
