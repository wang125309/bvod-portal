var gulp = require("gulp");
var fileinclude = require("gulp-file-include");
var sass = require("gulp-sass");

gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass({
            errLogToConsole: true
        }))
        .on('error', console.error)
        .pipe(gulp.dest("dist/css"));
});

gulp.task('templates', function() {
    return gulp.src(["html/index.html"])
        .pipe(fileinclude())
        .on('error', console.error)
        .pipe(gulp.dest("dist"));
});

gulp.task("watch-templates", function() {
    gulp.watch("html/*.html", ["templates"]);
});

gulp.task("watch-sass", function() {
    gulp.watch("scss/*.scss", ["sass"]);
});

gulp.task("watch", ["watch-sass", "watch-templates"]);
