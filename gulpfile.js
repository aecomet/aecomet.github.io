var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var pug = require('gulp-pug');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');

var assets = {
    css: 'assets/**/*.scss',
    js: 'assets/**/*.js'
};

var exports = {
    css: 'public/',
    js: 'public/'
};

gulp.task("server", function () {
    browser({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('pug', function() {
    return gulp.src(['./index.pug'])
        .pipe(pug({pretty: false})) // reformat option
        .pipe(gulp.dest('./'))
        .pipe(browser.reload({stream: true}));
});

gulp.task('sass', function() {
    var processors = [
        cssnext()
    ];
    return gulp.src(assets.css)
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(gulp.dest(exports.css))
        .pipe(browser.reload({stream: true}));
});

gulp.task('js', function(){
    return gulp.src(assets.js)
        .pipe(jsmin())
        .pipe(gulp.dest(exports.js));
});

gulp.task("default", ["server", "sass", "pug", "js"], function () {
    gulp.watch(assets.css, ["sass"]);
    gulp.watch(assets.js, ["js"]);
    gulp.watch('./index.pug', ["pug"]);
});