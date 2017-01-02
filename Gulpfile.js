var gulp = require('gulp')  
var webserver = require('gulp-webserver')  
var browserify = require('browserify')  
var babelify = require('babelify')  
var source = require('vinyl-source-stream')  
var nib = require('nib')  
var minify = require('gulp-minify-css')
var htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {  
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8000,
      fallback: 'index.html',
      livereload: true
    }))
})

gulp.task('css', function() {  
  gulp.src('./src/css/style.css')
    .pipe(minify())
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('build', function() {  
  browserify({
    entries: './src/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/js'))
})

gulp.task('minify', function () {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
})

gulp.task('images', function() {  
  gulp.src('./src/img/*.*')
    .pipe(gulp.dest('./build/img/'))
})

gulp.task('watch', function() {  
  gulp.watch('./src/**/*.jsx', ['build'])
  gulp.watch('./src/index.html', ['minify'])
  gulp.watch(['./src/css/**/*.css', './src/components/**/*.css'], ['css'])
})

gulp.task('default', ['minify', 'server', 'watch', 'images']);


