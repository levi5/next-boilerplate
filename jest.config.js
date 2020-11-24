module.exports = {
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['/node_modules/', '/.next/'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
