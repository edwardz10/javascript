const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
    gulp.src("esб/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    gulp.src("public/esб/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));

});
