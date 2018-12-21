var gulp = require('gulp');
var scss = require('gulp-sass');

// 單一寫法
// gulp.task('sass', function() {

//   return gulp.src('resourse/sass/*.scss')
//           .pipe(scss())
//           .pipe(gulp.dest('assets/css'))

// });

// 黑名單
// gulp.task('sass', function() {
//     return gulp
//         .src([
//                 'resourse/sass/**/*.scss',
//                 '!resourse/sass/editor/**/*.scss'  // 多一組/**/意即連子資料夾也排外
//             ], { nodir: true })  // If true, only matches files, not directories.
//         .pipe(scss())
//         .pipe(gulp.dest('public/css'))
// });

gulp.task('default', ['sass'], function() {
    gulp.watch('resourse/sass/**/*.scss', ['sass']);
})