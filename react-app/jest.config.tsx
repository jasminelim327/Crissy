import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testRegex: '\\.test\\.jsx?$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

export default config;