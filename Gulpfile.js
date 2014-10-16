var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require("gulp-minify-css");
var uglify = require('gulp-uglify');
var changed = require("gulp-changed");
var tinypng = require("gulp-tinypng");
var base64 = require('gulp-base64');
var imagemin = require("gulp-imagemin");
var pngcrush = require("imagemin-pngcrush");
var minifyCSS = require('gulp-minify-css');

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
        compile(["index","search" ,"video-detail", "videos","live" ,"org-list", "org-grid", "org-detail","search-history"], "assets/jss")
    ], callback);
});

gulp.task('uglify', ['rjs'], function(){
    return gulp.src("assets/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("assets/js/"))
});

gulp.task('sass', function() {
    return gulp.src("assets/scss/*.scss")
        .pipe(sass({
            outputStyle: 'compressed',
            errLogToConsole: true
        }))
        .pipe(base64({
            baseDir: 'assets/scss',
            maxImageSize: 48 * 1024
        }))
        .pipe(cssmin({
            keepBreaks: true
        }))
        .pipe(gulp.dest("assets/css"));
});

gulp.task('image-png', function() {
    return gulp.src("assets/imgb/*.png")
        .pipe(changed('assets/img'))
        .pipe(tinypng('9kl3nT2f8qC-AaApBVXDeQt-37ArLMNs'))
        .on('error', console.error)
        .pipe(gulp.dest("assets/img"));
});

gulp.task('image-other', function() {
    return gulp.src("assets/imgb/*.{jpg,jpeg,gif}")
        .pipe(changed('assets/img'))
        .pipe(imagemin({
            progressive: true,
            use: [pngcrush()]
        }))
        .pipe(gulp.dest("assets/img"));
});

gulp.task('image', ['image-png', 'image-other']);

gulp.task('minify-css', function() {
    gulp.src('assets/css/*.css')
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task("watch-sass", function() {
    gulp.watch("assets/scss/**/*.scss", ["sass"]);
});

gulp.task("watch", ["watch-sass"]);

