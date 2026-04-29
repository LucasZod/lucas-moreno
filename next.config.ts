import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Previne redirecionamentos automáticos de trailing slash
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
