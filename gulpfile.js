var gulp = require('gulp'),
    less = require('gulp-less'),
   rename = require("gulp-rename");
 
gulp.task('testLess', function () {
    gulp.src('style/index.less')
        .pipe(less())
        .pipe(rename("demo.css"))
        .pipe(gulp.dest('dist/'));
});


gulp.task('testWatch', function () {
    gulp.watch('style/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});