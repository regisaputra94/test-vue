/* eslint-disable */
var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
rename = require('gulp-rename');

function compileSass() {
  return gulp.src('src/resource/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({
      basename: 'maestro',
      suffix: '.min'
    }))
    .pipe(gulp.dest('static/css'));
}

function compileJS() {
  return gulp.src('src/resource/js/*.js')
    .pipe(uglify())
    .pipe(concat('maestro.min.js'))
    .pipe(gulp.dest('static/js'));
}

function watch() {
  gulp.watch('src/resource/js/*.js', compileJS);
  gulp.watch('src/resource/scss/*.scss', compileSass);
}


var build = gulp.parallel(compileSass, compileJS, watch);
gulp.task(build);
gulp.task('default', build);