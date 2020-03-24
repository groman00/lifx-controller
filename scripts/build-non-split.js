// https://zeph.co/disable-code-splitting-create-react-app
const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
let config = defaults.__get__('config');

config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  }
};

config.optimization.runtimeChunk = false;
config.output.filename = 'static/js/[name].js'
