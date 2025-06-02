import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/**": ["./_posts/**/*"],
  },
};

export default nextConfig;
