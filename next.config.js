const isProduction = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
	dest: 'public',
	disable: !isProduction
});

const nextConfig = withPWA({
	experimental: {
		forceSwcTransforms: true
	}
});

module.exports = nextConfig;
