/** @type {import('next').NextConfig} */
const nextConfig = {
    "images": {
        loader: "custom",
        loaderFile: "./images/sets.tsx"
    }
};

export default nextConfig;
