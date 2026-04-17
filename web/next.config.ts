import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["shadcn", "tw-animate-css"],
  trailingSlash: false,
};

export default nextConfig;
