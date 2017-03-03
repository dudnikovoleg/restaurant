var gulp = require('gulp'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');
//канкатенация и минификация основных css
gulp.task('cssconcat',function(){
	return gulp.src('src/css/main_style/*.css')
	.pipe(sourcemaps.init())
	.pipe(concat('main.css'))
	.pipe(cssnano())
	.pipe(rename({suffix:'.min'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/css/main_style'));
});
//минификацыя остальных css
gulp.task('cssnano', function(){
	return gulp.src(['src/css/*.css','!src/css/fonts.css'])
	.pipe(cssnano())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('dist/css'))
});
//минификацыя js файлов
gulp.task('compress', function(){
	gulp.src('src/script/**/*.js')
	.pipe(uglify())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('dist/script'));
});
//минификация картинок
gulp.task('img', function(){
	return gulp.src('src/images/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlagins: [{removeViewBoz: false}],
		une: [pngquant()]

	}))
	.pipe(gulp.dest('dist/images'));
});
//запуск всех тасков
gulp.task('bild',['cssnano', 'cssconcat','compress','img'], function(){
});





