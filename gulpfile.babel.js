let gulp = require('gulp');
require('babel-register');
// template
let pug = require('gulp-pug');
// script
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');
// style
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
// browser
let browser = require('browser-sync');
// other
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');

const path = {
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

    return gulp.src(path.css + '/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer(['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8']))
        .pipe(cleanCSS())
        .pipe( rename({
            extname: '.min.css'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(path.css))
        .pipe(browser.reload({stream: true}));
});

gulp.task('js', function(){
    return gulp.src(path.js + '/script.js')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(path.js))
        .pipe(browser.reload({stream: true}));
});

gulp.task("default", ["server", "sass", "pug", "js"], function () {
    gulp.watch(path.css + '/style.scss', ["sass"]);
    gulp.watch(path.js + '/script.js', ["js"]);
    gulp.watch('./index.pug', ["pug"]);
});