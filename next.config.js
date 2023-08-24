const { Domain } = require('domain')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {domains: ["images.unsplash.com"] },
}

module.exports = nextConfig
