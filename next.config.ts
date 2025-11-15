import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
  reactCompiler: true,
  experimental: {
    mdxRs: { mdxType: 'gfm' }
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
