'use strict';

var gulp = require('gulp');

// Dev Server
gulp.task('dev', ['html', 'assets', 'styles', 'vendor', 'browserify', 'images', 'watch']);
