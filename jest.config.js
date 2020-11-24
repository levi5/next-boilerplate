module.exports = {
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['/node_modules/', '/.next/'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
