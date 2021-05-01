var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify');

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('img', function () {
    gulp.src('./i/*')
        .pipe(gulp.dest('./dist/i/'));
    gulp.src('./p/*')
        .pipe(gulp.dest('./dist/p/'));
});

gulp.task('fonts', function () {
    gulp.src('./f/*')
        .pipe(gulp.dest('./dist/f/'));
});

gulp.task('default', ['html', 'css', 'js', 'img', 'fonts']);
