'use strict';

const path = require('path');
const dirname = path.join(__dirname, '..')
const basename = path.basename(dirname);

const hasDevFlag = basename.match(/-dev$/);
const destDir = hasDevFlag ? dirname.replace(/-dev$/, '') : dirname + '-prod';

module.exports = destDir;
