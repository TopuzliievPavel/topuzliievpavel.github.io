var gulp = require("gulp"),
		sass = require("gulp-sass"),
		autoprefixer = require("gulp-autoprefixer"),
		cssbeautify = require("gulp-cssbeautify"),
		browserSync = require("browser-sync").create();

var options = {
	scssFile: "./scss/*.scss",
	cssFolder: "./css/",
	indexHtml: "./*.html"
}

gulp.task("compile-css", function() {
	gulp.src(options.scssFile)
			.pipe(sass().on("error", sass.logError))
			.pipe(autoprefixer({
					browsers: ["last 3 versions"],
					cascade: false
			}))
			.pipe(cssbeautify({
				indent: " ",
				openbrace: "separate-line",
				autosemicolon: true
			}))
			.pipe(gulp.dest(options.cssFolder))
			.pipe(browserSync.stream());
})

gulp.task("serve", function() {
		browserSync.init({
				server: "./"
		});

		gulp.watch(options.scssFile).on("change", gulp.series("compile-css"));
		gulp.watch(options.indexHtml).on("change", browserSync.reload);
})

gulp.task("default", gulp.series("serve"));





// ./scss/**/*.scss