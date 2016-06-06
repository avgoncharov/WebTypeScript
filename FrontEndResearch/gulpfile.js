var gulp = require('gulp');
var typescript = require('gulp-tsc');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var angularProtractor = require('gulp-angular-protractor');

var vendorLibsPath = './libs';

gulp.task('move_angularlibs', function () {
	return gulp.src([
		'node_modules/@angular/**/*.umd.js',
		'node_modules/@angular/**/testing.js',
	]).pipe(gulp.dest(vendorLibsPath + '/@angular'));
});

gulp.task('move_libs', function () {
	return gulp.src([
	  'node_modules/angular2-cookie/bundles/angular2-cookie.js',
	  'node_modules/angular2-cookie/bundles/angular2-cookie.js.map',
	  'node_modules/reflect-metadata/Reflect.js',
	  'node_modules/es6-shim/es6-shim.min.js*',
	  'node_modules/systemjs/dist/*.*',
	  'node_modules/jquery/dist/jquery.*js',
	  'node_modules/bootstrap/dist/js/bootstrap*.js',
	  'node_modules/rxjs/bundles/Rx.js',
	  'node_modules/zone.js/dist/zone.js'
	]).pipe(gulp.dest(vendorLibsPath));
});