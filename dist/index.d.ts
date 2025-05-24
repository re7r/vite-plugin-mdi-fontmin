import { Plugin } from "vite";
import { RollupMdiFontminOptions } from "rollup-plugin-mdi-fontmin";

interface ViteMdiFontminOptions extends RollupMdiFontminOptions {}
/**
 * A Vite plugin for subsetting Material Design Icons (MDI) font files.
 *
 * @param [options] - Plugin options.
 * @returns Plugin instance.
 */
declare function mdiFontmin(options?: ViteMdiFontminOptions): Plugin;

export { ViteMdiFontminOptions, mdiFontmin as default };