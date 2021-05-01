var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('css', function () {
    return gulp.src('./css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function () {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('img', function () {
    return gulp.src('./i/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/i/'));
});

gulp.task('img:portfolio', function () {
    return gulp.src('./p/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/p/'));
});

gulp.task('fonts', function () {
    return gulp.src('./f/*')
        .pipe(gulp.dest('./dist/f/'));
});

gulp.task('default', gulp.parallel(['html', 'css', 'js', 'img', 'fonts']));
