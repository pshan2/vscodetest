var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var jade = require("gulp-jade");
var sass = require("gulp-sass");

gulp.task("sass",function() {
    return gulp.src('src/styles/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/styles'));
})

gulp.task("typescript", function () {
    return tsProject.src('src/scripts/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest("dist/scripts"));
});

gulp.task("jade",function() {
    return gulp.src('src/templates/*.jade')
        .pipe(jade())
        .pipe(gulp.dest("./dist"));
})


gulp.task('default',['sass','typescript','jade']);