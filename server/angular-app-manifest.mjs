
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/DigitalBond/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/DigitalBond/home",
    "route": "/DigitalBond"
  },
  {
    "renderMode": 2,
    "route": "/DigitalBond/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IQRXI3OV.js"
    ],
    "route": "/DigitalBond/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OGE3FXKY.js"
    ],
    "route": "/DigitalBond/testimonials"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-M3E5AWYP.js"
    ],
    "route": "/DigitalBond/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L4F47CDS.js"
    ],
    "route": "/DigitalBond/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3713, hash: 'dfbcbae1e1e7de5bbf8dd3e690ad1c0667a6e52c1677d8b66aa754db84ec4c42', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2120, hash: '58825bb934746197dac4fb7a0ab802ef140bcadc5aa24e3b4358a4e73ee4701b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 56296, hash: '92afa4cd86fb622ad01e644ab038250f5b199e874283c2ebd0ca72d86d118783', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 57761, hash: '2515beefdff10f569e14e5525e9d387336dc632bb1f99af3546a9108efab39ce', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 123204, hash: 'a74ff58924898a9116ef58baf04e038a71d8502962f358832ccf56d1455bb7cd', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'testimonials/index.html': {size: 65426, hash: '4dfe2ecc69a86160bd7aa70531430b1cb511f100b5f6134509334be5909747b9', text: () => import('./assets-chunks/testimonials_index_html.mjs').then(m => m.default)},
    'styles-5AV7AAUC.css': {size: 362577, hash: 'ceTCW0Y0Skc', text: () => import('./assets-chunks/styles-5AV7AAUC_css.mjs').then(m => m.default)}
  },
};
