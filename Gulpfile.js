var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require("gulp-minify-css");

gulp.task('sass', function() {
    return gulp.src("assets/scss/*.scss")
        .pipe(sass({
            outputStyle: 'compressed',
            errLogToConsole: true
        }))
        .pipe(cssmin({
            keepBreaks: true
        }))
        .pipe(gulp.dest("assets/css"));
});

gulp.task("watch-sass", function() {
    gulp.watch("assets/scss/**/*.scss", ["sass"]);
});

gulp.task("watch", ["watch-sass"]);

