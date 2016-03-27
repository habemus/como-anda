'use strict';

const gulp = require('gulp');
const path = require('path');

const prodDir = require('./_gulp/dest');

gulp.task('run:files',   require('./_gulp/files')(prodDir));
gulp.task('run:styles',  require('./_gulp/styles')(prodDir));
gulp.task('run:scripts', require('./_gulp/scripts')(prodDir));

gulp.task('default', [
  'run:files',
  'run:scripts',
  'run:styles'
]);
