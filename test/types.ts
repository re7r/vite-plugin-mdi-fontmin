import type { UserConfig } from 'vite';
import mdiFontmin from '..';

const config: UserConfig = {
  logLevel: 'silent',
  build: {
    outDir: 'dist-ignore',
    write: false,
  },
  plugins: [
    mdiFontmin({
      names: ['arrow-left', 'arrow-right'],
      output: 'test/mdi',
      silent: false,
      logPrefix: '[test]',
    }),
  ],
};

export default config;
