/** @type {import('next').NextConfig} */


const nextConfig = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: "/api/auth/:path*",
                    destination: "http://localhost:3002/api/auth/:path*",
                },
                {
                    source: "/api/:path*",
                    destination: "http://localhost:3002/:path*",
                },
            ],
        };
    },
};

export default nextConfig;
