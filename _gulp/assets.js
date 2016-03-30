'use strict';

const gulp = require('gulp');
const path = require('path');
const clean = require('gulp-clean');

const fontsSrc = './assets/fonts/**/*.*';
const imagesSrc = './assets/images/**/*.*';
const svgSrc = './assets/svg/**/*.*';

module.exports = function (prodDir) {

  const fontsProdDir = path.join(prodDir, 'assets', 'fonts');
  const imagesProdDir = path.join(prodDir, 'assets', 'images');
  const svgProdDir = path.join(prodDir, 'assets', 'svg');
  
  gulp.task('assets:fonts:clean', function () {
    return gulp.src(fontsProdDir)
      .pipe(clean({ read: false, force: true }));
  });
  gulp.task('assets:fonts', ['assets:fonts:clean'], function () {
    return gulp.src(fontsSrc)
      .pipe(gulp.dest(fontsProdDir));
  });
  gulp.task('assets:fonts:watch', ['assets:fonts'], function () {
    return gulp.watch(fontsSrc, ['files']);
  });

  gulp.task('assets:images:clean', function () {
    return gulp.src(imagesProdDir)
      .pipe(clean({ read: false, force: true }));
  });
  gulp.task('assets:images', ['assets:images:clean'], function () {
    return gulp.src(imagesSrc)
      .pipe(gulp.dest(imagesProdDir));
  });
  gulp.task('assets:images:watch', ['assets:images'], function () {
    return gulp.watch(imagesSrc, ['files']);
  });

  gulp.task('assets:svg:clean', function () {
    return gulp.src(svgProdDir)
      .pipe(clean({ read: false, force: true }));
  });
  gulp.task('assets:svg', ['assets:svg:clean'], function () {
    return gulp.src(svgSrc)
      .pipe(gulp.dest(svgProdDir));
  });
  gulp.task('assets:svg:watch', ['assets:svg'], function () {
    return gulp.watch(svgSrc, ['files']);
  });

  return ['assets:fonts:watch', 'assets:images:watch', 'assets:svg:watch'];
  
};
