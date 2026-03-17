import type { NextConfig } from "next";
import path from "path";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "daoyi-website-2026";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

export default nextConfig;
