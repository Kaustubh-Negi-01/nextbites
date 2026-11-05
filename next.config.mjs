/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the dev server to render missing routes. Production builds stay static.
  output: process.env.NODE_ENV === "development" ? undefined : "export",
  basePath: "/nextbites",
  trailingSlash: true,
};

export default nextConfig;
