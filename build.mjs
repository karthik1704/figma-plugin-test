// build.js
import { build } from 'esbuild';

build({
  entryPoints: ['code.ts'],
  bundle: true,
  outfile: 'dist/code.js',
  platform: 'node',
  target: 'esnext',
  format: 'cjs',
}).catch(() => process.exit(1));
