'use strict';

const gulp = require('gulp');
const path = require('path');
const clean = require('gulp-clean');

const src = [
  './templates/**/*.*',
  './functions/**/*.*',
  './theme/screenshot.jpg',
  './theme/favicon.ico'
];

module.exports = function (prodDir) {

  const cleanSrc = [
    path.join(prodDir, '*.php'),
    path.join(prodDir, 'favicon.ico'),
    path.join(prodDir, 'screenshot.jpg')
  ];

  gulp.task('files:clean', function () {
    return gulp.src(cleanSrc)
      .pipe(clean({ read: false, force: true }));
  });
  
  gulp.task('files', ['files:clean'], function () {
    return gulp.src(src)
      .pipe(gulp.dest(prodDir));
  });

  gulp.task('files:watch', ['files'], function () {
    return gulp.watch(src, ['files']);
  });

  return ['files:watch'];
  
};
