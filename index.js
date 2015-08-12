var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var rename = require('gulp-rename');
var urlAdjuster = require('gulp-css-url-adjuster');
var files = [];
var Task = Elixir.Task;
/*
 |----------------------------------------------------------------
 | Rename Files
 |----------------------------------------------------------------
 |
 | A wrapper for gulp-rename.
 |
 */

Elixir.extend('rename', function (input, options, output) {

    new Task('rename', function () {
        gulp.src(input)
            .pipe(rename(options))
            .pipe(gulp.dest(output));
    });
});

/*
 |----------------------------------------------------------------
 | Adjust css urls
 |----------------------------------------------------------------
 |
 | A wrapper for gulp-css-url-adjuster.
 |
 */

Elixir.extend('urlAdjuster', function(input, options, output) {

    files.push({
        input: input,
        options: options,
        output: output
    });

    var stream;

    new Task('urlAdjuster', function() {
        files.forEach(function(toUrlAdjust) {
            stream = gulp.src(toUrlAdjust.input)
                .pipe(urlAdjuster(toUrlAdjust.options))
                .pipe(gulp.dest(toUrlAdjust.output));
        });

        return stream;
    });
});
