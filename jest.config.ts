import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['node_modules'],
  coveragePathIgnorePatterns: ['__tests__', 'node_modules'],
  verbose: true,
  silent: true,
};

export default config;
