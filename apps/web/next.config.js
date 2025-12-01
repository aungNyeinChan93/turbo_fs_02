/** @type {import('next').NextConfig} */


const nextConfig = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: "/api/auth/:path*",
                    destination: "http://localhost:3002/api/auth/:path*", // for betterauth 
                },
                {
                    source: "/api/:path*",
                    destination: "http://localhost:3002/:path*", // backend
                },
            ],
        };
    },
};

export default nextConfig;
