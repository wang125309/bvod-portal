var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('sass', function() {
    return gulp.src("assets/scss/*.scss")
        .pipe(sass({
            errLogToConsole: true
        }))
        .on('error', console.error)
        .pipe(gulp.dest("assets/css"));
});

gulp.task("watch-sass", function() {
    gulp.watch("scss/*.scss", ["sass"]);
});

gulp.task("watch", ["watch-sass"]);

