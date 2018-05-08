var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');

gulp.task('sass', function () {  
    gulp.src('scss/*.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});



gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['sass', 'browser-sync'], function () {  
    
    gulp.watch("scss/*.scss", ['sass']);
    
     gulp.watch("*.html").on('change', browserSync.reload);
     // gulp.watch("assets/css/bundle.css").on('change', browserSync.reload);
});