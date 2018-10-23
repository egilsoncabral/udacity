/*eslint-env node */
const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('default', ['tests'], function () {
});

gulp.task('tests', function(){
    gulp.src('tests/spec/feedreader.js')
    .pipe(jasmine());
});

var browserSync = require('browser-sync').create();
browserSync.init({
  server: './'
});
browserSync.stream();
