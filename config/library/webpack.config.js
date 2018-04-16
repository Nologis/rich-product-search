const path = require('path');
const base = require('../../webpack.config');
delete base.externals;
base.output.path = path.resolve('dist/library');
delete base.plugins;

base.entry = {
  index: './config/library/loader.tsx'
};

module.exports = base;
