'use strict';

const gulp = require('gulp');
const path = require('path');
const clean = require('gulp-clean');

const src = ['./templates/**/*.*', './functions/**/*.*'];

module.exports = function (prodDir) {

  gulp.task('files:clean', function () {
    return gulp.src(path.join(prodDir, '*.php'))
      .pipe(clean({ read: false, force: true }));
  });
  
  gulp.task('files', ['files:clean'], function () {
    return gulp.src(src)
      .pipe(gulp.dest(prodDir));
  });

  gulp.task('files:watch', function () {
    return gulp.watch(src, ['files']);
  });

  return ['files', 'files:watch'];
  
};
