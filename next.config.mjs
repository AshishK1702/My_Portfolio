/** @type {import('next').NextConfig} */
    const nextConfig = {
      output: 'export',  // <--- This is mandatory for GitHub Pages
      images: {
        unoptimized: true, // <--- This fixes image issues on static sites
      },
    };

    export default nextConfig;
    