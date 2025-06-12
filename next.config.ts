import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://i.pinimg.com/736x/1e/39/8b/1e398b6177790c4592e427644e89bce1.jpg")]
  }
};

export default nextConfig;
