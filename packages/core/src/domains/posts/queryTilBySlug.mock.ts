export const mock = [
  {
    content: [
      {
        image: null,
        _type: 'block',
        style: 'normal',
        _key: '2ca04497f1ec',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Node 16 support will end on 11-Set-2023, but we all know how hard it's to have a large community and legacy projects up-to-date, so it's normal to have some compatibility issues.",
            _key: 'f1a60a103492',
          },
        ],
      },
      {
        image: null,
        style: 'normal',
        _key: 'ceadab957816',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'After trying to run an old Vuepress (v1.9.9) site on Node 18, I got the following error:',
            _key: 'bd42520d33ea',
          },
        ],
        _type: 'block',
      },
      {
        image: null,
        markDefs: null,
        _type: 'code',
        language: 'plaintext',
        _key: 'd8ce3bc7ac9e',
        code: "node:internal/crypto/hash:71\n  this[kHandle] = new _Hash(algorithm, xofLen);\n                  ^\n\nError: error:0308010C:digital envelope routines::unsupported\n    at new Hash (node:internal/crypto/hash:71:19)\n    at Object.createHash (node:crypto:133:10)\n    at module.exports (/Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/util/createHash.js:135:53)\n    at NormalModule._initBuildHash (/Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/NormalModule.js:417:16)\n    at handleParseError (/Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/NormalModule.js:471:10)\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/NormalModule.js:503:5\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/NormalModule.js:358:12\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/loader-runner@2.4.0/node_modules/loader-runner/lib/LoaderRunner.js:373:3\n    at iterateNormalLoaders (/Users/raulmelo/development/taco-api/node_modules/.pnpm/loader-runner@2.4.0/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\n    at Array.\u003canonymous\u003e (/Users/raulmelo/development/taco-api/node_modules/.pnpm/loader-runner@2.4.0/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\n    at Storage.finished (/Users/raulmelo/development/taco-api/node_modules/.pnpm/enhanced-resolve@4.5.0/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/enhanced-resolve@4.5.0/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/graceful-fs.js:123:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3) {\n  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],\n  library: 'digital envelope routines',\n  reason: 'unsupported',\n  code: 'ERR_OSSL_EVP_UNSUPPORTED'\n}\n\nNode.js v18.15.0",
        showLineNumbers: false,
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Vuepress in that version still uses Webpack, which has this compatibility problem.',
            _key: '71d4cdf060f1',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'ccd1f3ce1ee2',
        image: null,
      },
      {
        style: 'normal',
        _key: '9082bdff392e',
        image: null,
        markDefs: [],
        children: [
          {
            _key: '6c2e6727a2c1',
            _type: 'span',
            marks: [],
            text: 'So, as a workaround, instead of running:',
          },
        ],
        _type: 'block',
      },
      {
        code: 'vuepress dev documentation',
        showLineNumbers: false,
        _type: 'code',
        language: 'bash',
        _key: 'a20a51aa3c01',
        image: null,
        markDefs: null,
      },
      {
        image: null,
        _key: 'a2665df0d614',
        markDefs: [],
        children: [
          {
            marks: [],
            text: '... I have to run:',
            _key: '232b709d6009',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: 'a47ea558977b',
        code: 'NODE_OPTIONS=--openssl-legacy-provider vuepress dev documentation',
        showLineNumbers: false,
        _type: 'code',
        language: 'bash',
        image: null,
        markDefs: null,
      },
      {
        _key: 'ff10d0b1e22f',
        _type: 'divider',
        hr: true,
        image: null,
        markDefs: null,
      },
      {
        children: [
          {
            _key: '15a8969fb0ea',
            _type: 'span',
            marks: [],
            text: 'References',
          },
        ],
        _type: 'block',
        image: null,
        style: 'h2',
        _key: '71c1e8a91a42',
        markDefs: [],
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            _key: '17fe628f2ff3',
            blank: true,
            _type: 'link',
            href: 'https://stackoverflow.com/a/69699772/4781051',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['17fe628f2ff3'],
            text: 'https://stackoverflow.com/a/69699772/4781051',
            _key: '97beea2454040',
          },
        ],
        image: null,
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '4e6050624ff6',
      },
      {
        children: [
          {
            marks: ['8a5fc34fdb4e'],
            text: 'https://github.com/webpack/webpack/issues/14532#issuecomment-947012063',
            _key: 'ca9713f1e0d30',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        image: null,
        _key: '481fddaa1e3d',
        listItem: 'bullet',
        markDefs: [
          {
            _type: 'link',
            href: 'https://github.com/webpack/webpack/issues/14532#issuecomment-947012063',
            _key: '8a5fc34fdb4e',
            blank: true,
          },
        ],
      },
    ],
    slug: 'how-to-fix-digital-envelope-routines-unsupported-error-in-node',
    tags: [
      {
        _id: 'f2195d82-a1bd-456e-b572-770e49fde62d',
        name: 'Webpack',
        slug: 'webpack',
      },
      {
        _id: '45e449ee-0238-4ac1-8077-be5b6eadad55',
        name: 'NodeJS',
        slug: 'node-js',
      },
    ],
    relatedPosts: null,
    _id: 'c136935a-f62d-4e3a-abc0-7beb33a156e8',
    publishedAt: '2023-04-24',
    title: 'How to fix "digital envelope routines::unsupported" error in Node',
    language: 'en',
  },
];
