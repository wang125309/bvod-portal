var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require("gulp-minify-css");

var async = require("async");
var rjs = require("requirejs");
var pkgs = require("./assets/js/require.config");
var _ = require("underscore");

gulp.task('rjs', function(callback) {
    function compile(packages, dir) {
        return function(callback) {
            async.eachSeries(packages, function(pkg, cb) {
                console.log(pkg);
                rjs.optimize(_.extend(pkgs, {
                    name: pkg,
                    optimize: "none",
                    out: "assets/js" + "/" + pkg + ".js"
                }), function() {
                    console.log(pkg, "done!");
                    cb();
                }, function(err) {
                    console.log(pkg, "error!");
                    cb(err);
                });
            }, function(err) {
                callback(err);
            });
        };
    }

    async.series([
        compile(["index", "video-detail", "videos", "org-list", "org-grid", "org-detail"], "assets/jss")
    ], callback);
});

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

