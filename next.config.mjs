/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/tianlab",
                destination: "/pages/tianlab"
            },
            {
                source: "/noblemind",
                destination: "/pages/noblemind"
            },
            {
                source: "/yamadalab",
                destination: "/pages/yamadalab"
            }
        ]
    }
};

export default nextConfig;
