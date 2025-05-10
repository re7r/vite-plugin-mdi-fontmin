'use strict';

var mdiFontminRollupPlugin = require('rollup-plugin-mdi-fontmin');

function mdiFontmin(options) {
    return {
        ...mdiFontminRollupPlugin({
            ...options ?? {},
            logPrefix: '[vite-plugin-mdi-fontmin]',
        }),
        name: 'vite-plugin-mdi-fontmin',
    };
}

module.exports = mdiFontmin;
//# sourceMappingURL=index.js.map
