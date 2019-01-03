var gulp = require('gulp');

// gulp plugins and utils
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var zip = require('gulp-zip');
<<<<<<< HEAD
=======
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');
>>>>>>> 3388283f02d99bf29a6a691a6c771960b884a901

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var easyimport = require('postcss-easy-import');

var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

var nodemonServerInit = function () {
    livereload.listen(1234);
};

<<<<<<< HEAD
gulp.task('build', ['css'], function (/* cb */) {
    return nodemonServerInit();
});

=======
gulp.task('build', ['css', 'js'], function (/* cb */) {
    return nodemonServerInit();
});

gulp.task('generate', ['css', 'js']);

>>>>>>> 3388283f02d99bf29a6a691a6c771960b884a901
gulp.task('css', function () {
    var processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano()
    ];

    return gulp.src('assets/css/*.css')
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
});

<<<<<<< HEAD
=======
gulp.task('js', function () {
    var jsFilter = filter(['**/*.js'], {restore: true});

    return gulp.src('assets/js/*.js')
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
});

>>>>>>> 3388283f02d99bf29a6a691a6c771960b884a901
gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['css']);
});

<<<<<<< HEAD
gulp.task('zip', ['css'], function () {
=======
gulp.task('zip', ['css', 'js'], function () {
>>>>>>> 3388283f02d99bf29a6a691a6c771960b884a901
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
});

gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
