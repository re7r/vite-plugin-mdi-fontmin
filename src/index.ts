import type {Plugin} from 'vite';
import mdiFontminRollupPlugin, {type RollupMdiFontminOptions} from 'rollup-plugin-mdi-fontmin';

export interface ViteMdiFontminOptions extends RollupMdiFontminOptions {
}

export default function mdiFontmin(options: ViteMdiFontminOptions): Plugin {
  return {
    ...mdiFontminRollupPlugin({
      ...options ?? {},
      logPrefix: '[vite-plugin-mdi-fontmin]',
    }),
    name: 'vite-plugin-mdi-fontmin',
  };
}
