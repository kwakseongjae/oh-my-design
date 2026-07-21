import { defineConfig } from 'tsup';
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const rootPlaywrightUrl = new URL('./node_modules/playwright-core/', import.meta.url);
const webPlaywrightUrl = new URL('./web/node_modules/playwright-core/', import.meta.url);
const playwrightUrl = existsSync(new URL('package.json', rootPlaywrightUrl))
  ? rootPlaywrightUrl
  : webPlaywrightUrl;
const playwrightPackageUrl = new URL('package.json', playwrightUrl);
const playwrightBrowsersUrl = new URL('browsers.json', playwrightUrl);
const playwrightLicenseUrl = new URL('LICENSE', playwrightUrl);
const playwrightNoticeUrl = new URL('NOTICE', playwrightUrl);
const collectorOutputUrl = new URL('./skills/omd-reference-capture/scripts/', import.meta.url);
const playwrightPackageJson = JSON.parse(readFileSync(playwrightPackageUrl, 'utf8'));
const playwrightBrowsersJson = JSON.parse(readFileSync(playwrightBrowsersUrl, 'utf8'));
const collectorBanner = [
  '#!/usr/bin/env node',
  "import { createRequire as __omdCreateRequire } from 'node:module';",
  "import { fileURLToPath as __omdFileURLToPath } from 'node:url';",
  `const __omdPlaywrightPackage = ${JSON.stringify(playwrightPackageJson)};`,
  `const __omdPlaywrightBrowsers = ${JSON.stringify(playwrightBrowsersJson)};`,
  "const __omdPackagePath = __omdFileURLToPath(new URL('../package.json', import.meta.url));",
  "const __omdBrowsersPath = __omdFileURLToPath(new URL('../browsers.json', import.meta.url));",
  'const __omdNodeRequire = __omdCreateRequire(import.meta.url);',
  'const require = (id) => id === __omdPackagePath ? __omdPlaywrightPackage : id === __omdBrowsersPath ? __omdPlaywrightBrowsers : __omdNodeRequire(id);',
].join('\n');

const chromiumBidiStub = {
  name: 'omd-chromium-bidi-stub',
  setup(build: {
    onResolve: (options: { filter: RegExp }, callback: (args: { path: string }) => { path: string; namespace: string }) => void;
    onLoad: (options: { filter: RegExp; namespace: string }, callback: (args: { path: string }) => { contents: string; loader: 'js' }) => void;
  }) {
    // playwright-core keeps its optional WebDriver BiDi bridge as two bare
    // imports even though the npm package does not ship chromium-bidi. The
    // reference collector only launches regular Chromium through CDP, so make
    // that unused bridge explicit and fail closed if a future caller requests
    // it instead of leaving a hidden runtime module dependency in the bundle.
    build.onResolve({ filter: /^chromium-bidi\// }, (args) => ({
      path: args.path,
      namespace: 'omd-chromium-bidi',
    }));
    build.onResolve({ filter: /^fsevents$/ }, () => ({
      path: 'fsevents',
      namespace: 'omd-optional-native',
    }));
    build.onLoad(
      { filter: /.*/, namespace: 'omd-chromium-bidi' },
      (args) => ({
        contents: args.path.includes('BidiMapper')
          ? 'module.exports = { BidiServer: class { static async createAndStart() { throw new Error("WebDriver BiDi is not included in the OmD evidence collector"); } } };'
          : 'module.exports = { MapperCdpConnection: class { constructor() { throw new Error("WebDriver BiDi is not included in the OmD evidence collector"); } } };',
        loader: 'js',
      }),
    );
    build.onLoad(
      { filter: /.*/, namespace: 'omd-optional-native' },
      () => ({ contents: 'module.exports = null;', loader: 'js' }),
    );
    build.onLoad(
      { filter: /web\/scripts\/capture-reference-evidence\.ts$/ },
      (args) => ({
        // tsup banners are inserted before an entrypoint hashbang. Strip the
        // source hashbang here so the generated file has one valid hashbang,
        // followed by the ESM createRequire bridge used by bundled CJS code.
        contents: readFileSync(args.path, 'utf8').replace(/^#!.*\r?\n/, ''),
        loader: 'ts',
      }),
    );
    build.onEnd(() => {
      mkdirSync(collectorOutputUrl, { recursive: true });
      copyFileSync(playwrightLicenseUrl, new URL('PLAYWRIGHT-LICENSE.txt', collectorOutputUrl));
      copyFileSync(playwrightNoticeUrl, new URL('PLAYWRIGHT-NOTICE.txt', collectorOutputUrl));
      writeFileSync(
        new URL('THIRD_PARTY_NOTICES.md', collectorOutputUrl),
        '# Third-party notices\n\nThe bundled evidence collector contains `playwright-core` ' +
          `${playwrightPackageJson.version} (Copyright Microsoft Corporation), licensed under Apache-2.0. ` +
          'See `PLAYWRIGHT-LICENSE.txt` and `PLAYWRIGHT-NOTICE.txt` in this directory.\n',
        'utf8',
      );
    });
  },
};

export default defineConfig([
  {
    entry: { 'bin/oh-my-design': 'bin/oh-my-design.ts' },
    format: ['esm'],
    outDir: 'dist',
    clean: true,
    sourcemap: true,
    target: 'node18',
    banner: { js: '#!/usr/bin/env node' },
  },
  {
    // `omd-reference-capture` is copied out of the npm package and into an
    // agent's own skill directory. Bundle every runtime dependency (including
    // playwright-core) so the copied collector keeps working after a one-off
    // `npx oh-my-design-cli` install has left npm's temporary cache.
    entry: {
      'capture-reference-evidence': 'web/scripts/capture-reference-evidence.ts',
    },
    format: ['esm'],
    outDir: 'skills/omd-reference-capture/scripts',
    outExtension: () => ({ js: '.mjs' }),
    clean: true,
    splitting: false,
    sourcemap: false,
    shims: true,
    target: 'node18',
    noExternal: ['playwright-core'],
    esbuildPlugins: [chromiumBidiStub],
    banner: { js: collectorBanner },
  },
]);
