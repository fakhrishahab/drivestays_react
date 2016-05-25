var gulp 	= require('gulp'),
	sass 	= require('gulp-sass'),
	plumber = require('gulp-plumber'),
	browserify = require('gulp-browserify'),
	reactify = require('reactify'),
	server 	= require('./server');

gulp.task('script', function(){
	gulp.src('./dev/script/**/*.*')
		.pipe(plumber())
		.pipe(browserify({ transform : 'reactify', debug: true }))
		.pipe(gulp.dest('public/script'))
})

gulp.task('fonts', function(){
	gulp.src('./dev/assets/fonts/**/*.*')
		.pipe(gulp.dest('public/assets/fonts'))
})

gulp.task('images', function(){
	gulp.src('./dev/assets/images/**/*.*')
		.pipe(gulp.dest('public/assets/images'))
})

gulp.task('sass', function(){
	gulp.src('./dev/styles/*.scss')
		.pipe(plumber())
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(sass.sync().on('Error', sass.logError))
		.pipe(gulp.dest('public/assets/./styles'))
})

gulp.task('style', function(){
	gulp.src('./dev/styles/*.css')
		.pipe(gulp.dest('public/assets/styles'))
})

gulp.task('createServer', function(){
	server;
})

gulp.task('default',[
		'createServer',
		'script',
		'fonts',
		'images',
		'sass',
		'style',
		'watch'
	])

gulp.task('watch', function(){
	gulp.watch('./dev/script/**/*.*', ['script'])
	gulp.watch('./dev/assets/**/*.*', ['fonts', 'images'])
	gulp.watch('./dev/styles/**/*.*', ['sass', 'style'])
})