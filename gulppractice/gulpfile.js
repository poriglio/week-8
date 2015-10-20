
//Think of the things you are requiring as "objects"

var gulp = require('gulp')
var concat = require('gulp-concat')
var makeItUgly = require('gulp-uglify')
var miniCSS = require('gulp-minify-css')

//Default tasks happen every time gulp is run
gulp.task("default",function(){
	console.log('gulp!')
})

//Two stars say to navigate through
//any number of subdirectories
//and grab all the js files there.

//The following function builds a JS file
//from the specified src file, first
//simple concatenating it,
//then uglifying it.

gulp.task("build-js",function(){
	console.log("build js is running")
	gulp.src('./public/js/src/**/*.js').pipe(concat("min.js"))
	.pipe(makeItUgly())
	.pipe(gulp.dest('./public/js/dist'))
})

//This does the same thing as the previous function,
//but for CSS files.

gulp.task("build-css",function(){
	console.log("build css is running")
        gulp.src('./public/css/src/**/*.css').pipe(concat("min.css"))
        .pipe(miniCSS())
        .pipe(gulp.dest('./public/css/dist'))
})

//The following function will watch
//for changes in the files, and run when 
//changes happen. Make sure the files are
//properly organized, so that it won't
//just give back a huge concatenated file
//every time changes happen!!!

gulp.task("ticktock",function(){
	gulp.watch("./public/js/src/**/*.js",["build-js"])
	gulp.watch("./public/css/src/**/*.js",["build-css"])
})

