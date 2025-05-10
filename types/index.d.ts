import type {Plugin} from 'vite';
import type {RollupMdiFontminOptions} from 'rollup-plugin-mdi-fontmin';

/**
 * Configuration for the MDI font minification plugin.
 */
export interface ViteMdiFontminOptions extends RollupMdiFontminOptions {
  /**
   * List of MDI icon names to include in the subset.
   */
  names: string[];

  /**
   * The output directory for the subsetted font files.
   * Defaults to 'public/fonts/mdi' if not provided.
   */
  output?: string;

  /**
   * Whether to suppress console output.
   * Defaults to false.
   */
  silent?: boolean;

  /**
   * Prefix for console output.
   * Defaults to ' [vite-plugin-mdi-fontmin]'.
   */
  logPrefix?: string;
}

/**
 * A Vite plugin for subsetting Material Design Icons (MDI) font files.
 *
 * @param [options] - Plugin options.
 * @returns Plugin instance.
 */
export default function mdiFontmin(options?: ViteMdiFontminOptions): Plugin;
