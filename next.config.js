const { join } = require('node:path')
const { env } = require('./settings/setEnvironment')
const dns = require('node:dns')

dns.setDefaultResultOrder('ipv4first')

/** @type {import('next').NextConfig} */
const nextConfig = {
	env,
	images: {
		remotePatterns: [],
	},
	sassOptions: {
		includePaths: [join(__dirname, 'src', 'presentation', 'global', 'styles', 'sass')],
		prependData: `@import 'main.scss';`
	},
	cleanDistDir: true,
	distDir: 'dist',
	headers: () => [{
		source: '/:path*',
		headers: [{
			key: 'Cross-Origin-Embedder-Policy',
			value: 'require-corp',
		},
		{
			key: 'Cross-Origin-Opener-Policy',
			value: 'same-origin',
		}]
	}],
	webpack: (config) => {
		config.ignoreWarnings = [
			{ file: /node_modules\/handlebars\/lib\/index.js/ },
			{ file: /node_modules\/node-fetch\/lib\/index.js/ },
			{ module: /node_modules\/node-fetch\/lib/ },
		];
		config.cache = {
			...config.cache,
			maxAge: 1200000,
			compression: 'gzip'
		}
		return config
	},
	turbopack: {},
}

module.exports = nextConfig
