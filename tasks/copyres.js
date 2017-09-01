module.exports = function (gulp) {
    gulp.task('copyres',function () {
        return gulp.src(['./source/**/*.{html,css,map,otf,eot,svg,ttf,woff,jpg,png,js}']).pipe(gulp.dest('dist/'));
    });
};