import type { Plugin } from 'vite';
import mdiFontminRollupPlugin, { type RollupMdiFontminOptions } from 'rollup-plugin-mdi-fontmin';

export interface ViteMdiFontminOptions extends RollupMdiFontminOptions {}

/**
 * A Vite plugin for subsetting Material Design Icons (MDI) font files.
 *
 * @param [options] - Plugin options.
 * @returns Plugin instance.
 */
export default function mdiFontmin(options?: ViteMdiFontminOptions): Plugin {
  return mdiFontminRollupPlugin(options);
}
