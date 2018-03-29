const gulp = require("gulp");
const stylus = require("gulp-stylus");
const watch = require("gulp-watch");

gulp.task("Stylus", function() {
  return gulp
    .src("./src/styl/*.styl")
    .pipe(stylus())
    .pipe(gulp.dest("./src/css"));
});

gulp.task("watch", function() {
  gulp.watch("./src/styl/*", ["Stylus"]);
});
