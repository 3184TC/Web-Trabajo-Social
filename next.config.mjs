/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)", // Aplica a todas las rutas
          headers: [
            {
              key: "Content-Security-Policy",
              value: "frame-ancestors 'self' https://www.google.com;",
            },
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, must-revalidate, private',
            },
            {
              key: 'Pragma',
              value: 'no-cache',
            },
            {
              key: 'Expires',
              value: '0',
            },
          ],
        },
      ];
    },
  };
  
  /* module.exports = nextConfig; */
  
  