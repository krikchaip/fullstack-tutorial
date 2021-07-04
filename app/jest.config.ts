import { Config } from '@jest/types'
import { TsJestGlobalOptions } from 'ts-jest/dist/types'
import { pathsToModuleNameMapper } from 'ts-jest/utils'

import { compilerOptions } from './tsconfig.json'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  globals: {
    'ts-jest': {
      tsconfig: { jsx: 'react' }
    } as TsJestGlobalOptions
  }
}

export default config
