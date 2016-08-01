'use strict';

const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass');
const header = require('gulp-header');

const indexSrc = './assets/styles/style.scss';
const pagesSrc = './assets/styles/pages/**/*.scss'
const filesSrc = './assets/styles/**/*.scss';

module.exports = function (prodDir) {

  gulp.task('styles', ['styles:pages'], function () {
    return gulp.src(indexSrc)
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(header(fs.readFileSync('./theme/header.js')))
      .pipe(gulp.dest(prodDir));
  });

  gulp.task('styles:pages', function () {
    return gulp.src(pagesSrc)
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(header(fs.readFileSync('./theme/header.js')))
      .pipe(gulp.dest(path.join(prodDir, 'assets/styles/pages')));
  });

  gulp.task('styles:watch', function () {
    return gulp.watch(filesSrc, ['styles']);
  });

  return ['styles:watch'];

};
