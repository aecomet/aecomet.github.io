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

var paths = {
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
    return gulp.src(paths.css + '**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.css))
        .pipe(browser.reload({stream: true}));
});

gulp.task('js', function(){
    return gulp.src(paths.js + '**/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest(paths.js));
});

gulp.task("default", ["server", "sass", "pug", "js"], function () {
    gulp.watch(paths.css + '**/*.scss', ["sass"]);
    gulp.watch(paths.js + '**/*.js', ["js"]);
    gulp.watch('./index.pug', ["pug"]);
});