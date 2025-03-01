import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
		API_BASE_URL: process.env.API_BASE_URL,
	},
};

export default nextConfig;
