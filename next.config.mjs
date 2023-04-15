import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'
import withBundleAnalyzer from '@next/bundle-analyzer';

// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    experimental: { appDir: true },
    swcMinify: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
    images: {
        domains: ['cdn.discordapp.com', '*.googleusercontent.com']
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.plugins = [...config.plugins, new PrismaPlugin()]
        }

        return config
    }
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(config);
