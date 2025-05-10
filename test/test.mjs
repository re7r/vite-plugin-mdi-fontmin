import {build} from 'vite';
import {fileURLToPath} from 'url';
import test from 'ava';
import path from 'path';
import fs from 'fs';

import mdiFontmin from '../dist/index.min.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, 'mdi');
const inputFile = path.resolve(__dirname, 'fixtures/basic/main.mjs');

test.beforeEach(() => {
  fs.rmSync(outputDir, {recursive: true, force: true});
});

test.afterEach(() => {
  fs.rmSync(outputDir, {recursive: true, force: true});
});

test('vite-plugin-mdi-fontmin generates correct subset', async t => {
  await build({
    logLevel: 'silent',
    build: {
      rollupOptions: {
        input: inputFile,
      },
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
  });

  const files = fs.readdirSync(outputDir).sort();
  t.snapshot(files, 'file list matches snapshot');

  const contents = {};
  for (const file of files) {
    const ext = path.extname(file);
    const fullPath = path.join(outputDir, file);
    if (ext === '.css') {
      contents[file] = fs.readFileSync(fullPath, 'utf8');
    } else {
      contents[file] = fs.readFileSync(fullPath).toString('base64');
    }
  }

  t.snapshot(contents, 'file contents match snapshot');
});
