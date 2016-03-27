'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const indexSrc = './assets/styles/style.scss';
const filesSrc = './assets/styles/**/*.scss';

module.exports = function (prodDir) {

  gulp.task('styles', function () {
    return gulp.src(indexSrc)
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(gulp.dest(prodDir));
  });

  gulp.task('styles:watch', function () {
    return gulp.watch(filesSrc, ['styles']);
  });

  return ['styles', 'styles:watch']

};
