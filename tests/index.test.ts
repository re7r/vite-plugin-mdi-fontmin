import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { build } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

import mdiFontmin from '../dist/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, 'output');
const inputFile = path.resolve(__dirname, 'fixtures/main.mjs');

beforeEach(() => {
  fs.rmSync(outputDir, { recursive: true, force: true });
});

afterEach(() => {
  fs.rmSync(outputDir, { recursive: true, force: true });
});

describe('vite-plugin-mdi-fontmin', () => {
  it('generates correct subset', async () => {
    await build({
      logLevel: 'silent',
      build: {
        lib: {
          entry: inputFile,
          formats: ['es'],
          fileName: () => 'bundle.js',
        },
        outDir: outputDir,
        emptyOutDir: false,
      },
      plugins: [
        mdiFontmin({
          names: ['arrow-left', 'arrow-right'],
          output: 'tests/output',
          silent: false,
          logPrefix: '[test]',
        }),
      ],
    });

    const files = fs.readdirSync(outputDir).sort();
    expect(files).toMatchSnapshot('file list matches snapshot');

    const contents: Record<string, string> = {};
    for (const file of files) {
      const ext = path.extname(file);
      const fullPath = path.join(outputDir, file);

      if (ext === '.css') {
        contents[file] = fs.readFileSync(fullPath, 'utf8');
      } else {
        contents[file] = fs.readFileSync(fullPath).toString('base64');
      }
    }

    expect(contents).toMatchSnapshot('file contents match snapshot');
  });
});
