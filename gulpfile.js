'use strict';

var del = require('del');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var registerTasks = require('alloyui-tasks');
var runSequence = require('run-sequence');

registerTasks({
  buildDest: 'aui/build',
  buildSrc: 'aui/src/**/*.js',
  bundleFileName: 'list.js',
  soyDest: 'aui/src',
  soySrc: 'aui/src/**/*.soy'
});

gulp.task('build', function(done) {
  runSequence('clean', 'build:globals', done);
});

gulp.task('clean', function(done) {
  del(['build'], done);
});

gulp.task('lint', function() {
  return gulp.src('./**/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter(require('jshint-stylish')));
});
