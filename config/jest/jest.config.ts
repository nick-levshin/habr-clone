import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    // mock for svg
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    // for aliases
    '\\.s?css$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  rootDir: '../..',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
};

export default config;
