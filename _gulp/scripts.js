'use strict';

const gulp = require('gulp');
const path = require('path');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');

const src = './assets/scripts/**/*.js';

module.exports = function (prodDir) {

  gulp.task('scripts:clean', function () {
    return gulp.src(path.join(prodDir, 'assets', 'scripts', '**', '*.js'))
      .pipe(clean({ read: false, force: true }));
  });

  gulp.task('scripts', ['scripts:clean'], function () {
    return gulp.src(src)
      .pipe(uglify())
      .pipe(gulp.dest(path.join(prodDir, 'assets', 'scripts')));
  });

  gulp.task('scripts:watch', function () {
    return gulp.watch(src, ['scripts']);
  });

  return ['scripts', 'scripts:watch'];
  
};
