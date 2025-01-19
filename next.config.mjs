/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.sanity.io' }
        ]
    },
    env: {
        SANITY_API_VERSION: process.env.SANITY_API_VERSION,
        NEXT_PUBLIC_SANITY_DATASET: process.env.SANITY_DATASET,
        NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
        SANITY_TOKEN: process.env.SANITY_AUTH_TOKEN,
    },
};

export default nextConfig;
