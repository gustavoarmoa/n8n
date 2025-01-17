/** @type {import('jest').Config} */
module.exports = {
	...require('../../jest.config'),
	testEnvironmentOptions: {
		url: 'http://localhost/',
	},
	globalSetup: '<rootDir>/test/setup.ts',
	globalTeardown: '<rootDir>/test/teardown.ts',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@db/(.*)$': '<rootDir>/src/databases/$1',
	},
};
