'use strict';

var config = require('../config');
var path = require('path');
var gulp = require('gulp');
var cache = require('gulp-cache');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var rev = require('gulp-rev');
var size = require('gulp-size');

gulp.task('fonts', function() {
	var dest = config.dist + '/fonts';

	return gulp.src('app/bower_components/bootstrap/fonts/**/*')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(gulp.dest(dest));
});

gulp.task('assets', ['fonts'], function() {
	var dest = config.dist + '/assets';

	return gulp.src('app/assets/**/*')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(gulp.dest(dest));
});


