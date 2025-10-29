const { resolve } = require('node:path');
const fg = require('fast-glob');

function discoverHtmlInputs() {
  const htmlFiles = fg.sync(['**/*.html', '!dist/**', '!node_modules/**'], { dot: false });
  const inputs = {};
  for (const file of htmlFiles) {
    const name = file.replace(/\.html$/, '');
    inputs[name] = resolve(process.cwd(), file);
  }
  return inputs;
}

/** @type {import('vite').UserConfig} */
module.exports = {
  root: process.cwd(),
  base: '/', // override at build: `vite build --base=/our-team-page/`
  server: { open: '/index.html' },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: discoverHtmlInputs(),
    },
  },
};




