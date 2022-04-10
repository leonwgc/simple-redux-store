/* eslint-disable @typescript-eslint/no-var-requires */
const { default: pack } = require('packw');

pack(true, {
  entry: {
    index: `./demo/index`,
  },
  devServer: {
    port: 9102,
  },
});
