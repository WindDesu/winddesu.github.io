const gulp = require("gulp");
const { pipeline } = require('readable-stream');

const babel = require("gulp-babel");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const uglify = require('gulp-uglify');

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const assets = () => pipeline(
    gulp.src("./src/assets/**"),
    gulp.dest("dist/assets")
);

const html = () => pipeline(
    gulp.src("./src/**/*.html"),
    htmlmin({ collapseWhitespace: true }),
    gulp.dest("dist")
);

const script = () => pipeline(
    gulp.src("./src/**/*.js"),
    babel(),
    uglify(),
    gulp.dest("dist")
);

const style = () => pipeline(
    gulp.src("./src/**/*.css"),
    postcss([
        autoprefixer({ overrideBrowserslist: ['last 1 version'] }),
        cssnano()
    ]),
    gulp.dest("dist")
);

module.exports = {
    assets,
    html,
    script,
    style,
    default: gulp.parallel(assets, html, script, style),
    watch: () => {
        gulp.watch("./src/assets/**", assets);
        gulp.watch("./src/**/*.html", html);
        gulp.watch("./src/**/*.js", script);
        gulp.watch("./src/**/*.css", style);
    }
};