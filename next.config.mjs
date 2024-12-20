/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'], // Adds @svgr/webpack loader
      });
      return config;
    },
  };
  
  export default nextConfig;
  