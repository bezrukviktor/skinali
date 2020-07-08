var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'MNfhKbdb2bNCTRFjDgX33hztJ3KPlf2F'
        }))
        .pipe(gulp.dest('images'));
        done()
});