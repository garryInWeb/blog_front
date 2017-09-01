/**
 * Created by Administrator on 2017/5/18 0018.
 */
module.exports = function (gulp,options,plugins) {
    gulp.task('imagemin', function () {
        return gulp.src(options.paths.imagemin)
            .pipe(plugins.imagemin())
            .pipe(gulp.dest('dist/image/'));
    });
};