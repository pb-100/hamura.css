var gulp      = require('gulp'),
    sass      = require("gulp-sass"),
    cleanCSS  = require("gulp-clean-css"),
    mmq       = require("gulp-merge-media-queries"),
    plumber   = require("gulp-plumber");

/* -------------------------------------------------------
 *  Closure Compiler
 */
const closureCompiler = require('google-closure-compiler').gulp(),
      globalVariables = 'document,navigator,screen,parseFloat,Number,Function,isFinite,setTimeout,clearTimeout,Date',
      name = 'hamura.css';

gulp.task('compile', function () {
    return closureCompiler(
            {
                js                : [
                   '../web-doc-base/inline-js/01_ua.js',
                   '../web-doc-base/inline-js/02_uaPlatform.js',
                   '../web-doc-base/inline-js/03_uaEngine.js',
                   '../web-doc-base/inline-js/04_uaBrand.js',
                   '../web-doc-base/inline-js/05_uaFinish.js',

                   '../web-doc-base/js/_0_global.js',
                   '../web-doc-base/js/_1_Type.js',
                   '../web-doc-base/js/_2_Event.js',
                   '../web-doc-base/js/_3_DOM.js',
                   '../web-doc-base/js/_4_DOMStyle.js',
                   '../web-doc-base/js/_5_DOMAttr.js',
                   '../web-doc-base/js/_6_DOMClass.js',
                   '../web-doc-base/js/_7_DOMEvent.js',
                   '../web-doc-base/js/_8_CSSOM.js',

                   '../web-doc-base/js/ie5.js',

                   '../pb-100.hamura.css/common.js/_arrayPrototype.js',
                   '../pb-100.hamura.css/common.js/_CONST.js',
                   '../pb-100.hamura.css/common.js/_global.js',
                   '../pb-100.hamura.css/common.js/CHAR_TABLE.js',
                   '../pb-100.hamura.css/common.js/CSSOM.js',
                   '../pb-100.hamura.css/common.js/DOM.js',
                   '../pb-100.hamura.css/common.js/Timer.js',
                   '../pb-100.hamura.css/pbLCD/js/checkActiveX.js',
                   '../pb-100.hamura.css/pbLCD/js/fallback.js',
                   '../pb-100.hamura.css/pbList/js/prettify.js',
                   '../pb-100.hamura.css/pbList/js/webfontTest.js'
                ],
                externs           : [
                    '../web-doc-base/inline-js/__externs.js',
                    './node_modules/google-closure-compiler/contrib/externs/svg.js',
                    '../web-doc-base/js/__externs.js'
                ],
                // define            : 'X_UA_IE=5',
                compilation_level : 'ADVANCED',
                // compilation_level : 'WHITESPACE_ONLY',
                formatting        : 'PRETTY_PRINT',
                warning_level     : 'VERBOSE',
                language_in       : 'ECMASCRIPT3',
                language_out      : 'ECMASCRIPT3',
                output_wrapper    : '(function(ua,window,' + globalVariables + ',undefined){\n%output%\n})({},this,' + globalVariables + ')',
                js_output_file    : 'temp.js'
            }
        )
        .src() // needed to force the plugin to run without gulp.src
        .pipe(gulp.dest( 'R:/' + name ));
});

gulp.task( 'finish', function(){
    return closureCompiler(
        {
            js                : 'R:/' + name + '/temp.js',
            externs           : [
                '../web-doc-base/inline-js/__externs.js',
                './node_modules/google-closure-compiler/contrib/externs/svg.js',
                '../web-doc-base/js/__externs.js'
            ],
            // compilation_level : 'WHITESPACE_ONLY',
            // formatting        : 'PRETTY_PRINT',
            language_in       : 'ECMASCRIPT3',
            language_out      : 'ECMASCRIPT3',
            js_output_file    : 'hamura.js'
        }
    )
    .src() // needed to force the plugin to run without gulp.src
    .pipe(gulp.dest( './docs' ));
});

gulp.task('js', gulp.series( 'compile', 'finish' ) );

/* -------------------------------------------------------
 *  SCSS
 */
// .scss -> .css して debug 用に配置
gulp.task('sass', function() {
  return gulp.src( 'R:/pb-100.hamura.css/precompiled/*.scss' )
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS({
      compatibility : { properties : { ieFilters : true } },
      //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
      level: {
        1: {
          // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
          roundingPrecision : 3
        },
        2: {
          removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
          removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
          removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
          
          mergeSemantically: true, // controls semantic merging; defaults to false
          // controls unused at rule removing; defaults to false (available since 4.1.0)
          removeUnusedAtRules: true, // ここが true だと DATA URI の Web Font が削除される。
          restructureRules: true // controls rule restructuring; defaults to false
        }
      }
    }))
    .pipe(mmq())
    .pipe(cleanCSS({
      compatibility : { properties : { ieFilters : true } },
      level: {
        1: {
          all: false, // set all values to `false`
          removeWhitespace: true // controls removing unused whitespace; defaults to `true`
        }
      }
    }))
    .pipe(gulp.dest('docs'));
});
