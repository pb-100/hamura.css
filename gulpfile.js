var gulp   = require('gulp'),
    name   = 'hamura.css',
    output = './docs';

/* -------------------------------------------------------
 *  gulp js
 */
const closureCompiler = require('google-closure-compiler').gulp(),
      globalVariables = 'document,navigator,screen,parseFloat,Number,Function,isFinite,setTimeout,clearTimeout,Date',
      tempDir         = require('os').tmpdir() + '/' + name;

var jsFileName = 'hamura.js'
    defines = [];

gulp.task('compile', function () {
    return closureCompiler(
            {
                js                : [
                   './web-doc-base/inline-js/01_ua.js',
                   './web-doc-base/inline-js/02_uaPlatform.js',
                   './web-doc-base/inline-js/03_uaEngine.js',
                   './web-doc-base/inline-js/04_uaBrand.js',
                   './web-doc-base/inline-js/05_uaFinish.js',

                   './web-doc-base/js/_0_global.js',
                   './web-doc-base/js/_1_Type.js',
                   './web-doc-base/js/_2_Event.js',
                   './web-doc-base/js/_3_DOM.js',
                   './web-doc-base/js/_4_DOMStyle.js',
                   './web-doc-base/js/_5_DOMAttr.js',
                   './web-doc-base/js/_6_DOMClass.js',
                   //'../web-doc-base/js/_7_DOMEvent.js',
                   './web-doc-base/js/_7_CSSOM.js',

                   './web-doc-base/js/ie5.js',

                   './common.js/_arrayPrototype.js',
                   './common.js/_DEFINE.js',
                   './common.js/_global.js',
                   './common.js/_DebugLogger.js',
                   './common.js/CHAR_TABLE.js',
                   './common.js/CSSOM.js',
                   './common.js/DOM.js',
                   './common.js/Timer.js',
                   './pbLCD/js/checkActiveX.js',
                   './pbLCD/js/fallback.js',
                   './pbList/js/prettify.js',
                   './pbList/js/webfontTest.js'
                ],
                externs           : [
                    './web-doc-base/inline-js/__externs.js',
                    './node_modules/google-closure-compiler/contrib/externs/svg.js',
                    './web-doc-base/js/__externs.js'
                ],
                define            : [
                    'g_MOBILE_CSS_PREFIX=""',
                    'DEFINE_ASSET_HTTP="//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/"',
                    'DEFINE_ASSET_HTTPS="//pb-100.github.io/hamura.css/"'
                ].concat( defines ),
                compilation_level : 'ADVANCED',
                // compilation_level : 'WHITESPACE_ONLY',
                formatting        : 'PRETTY_PRINT',
                warning_level     : 'VERBOSE',
                language_in       : 'ECMASCRIPT3',
                language_out      : 'ECMASCRIPT3',
                output_wrapper    : 'PB100={};(function(PB100,ua,window,' + globalVariables + ',undefined){\n%output%\n})(PB100,{},this,' + globalVariables + ')',
                js_output_file    : 'temp.js'
            }
        )
        .src()
        .pipe(gulp.dest( tempDir ));
});

gulp.task( 'finish', function(){
    return closureCompiler(
        {
            js                : tempDir + '/temp.js',
            externs           : [
                './web-doc-base/inline-js/__externs.js',
                './node_modules/google-closure-compiler/contrib/externs/svg.js',
                './web-doc-base/js/__externs.js'
            ],
            formatting        : 'PRETTY_PRINT',
            language_in       : 'ECMASCRIPT3',
            language_out      : 'ECMASCRIPT3',
            js_output_file    : jsFileName
        }
    )
    .src()
    .pipe(gulp.dest( output ));
});

gulp.task('js', gulp.series( 'compile', 'finish' ) );

/* -------------------------------------------------------
 *  gulp debug1
 */
const tempJsFileName = jsFileName,
      tempOutput     = output;

gulp.task('debug1',
    gulp.series(
        function( cd ){
            defines = [
                'DEFINE_DEBUG=1',
                'DEFINE_LOGGER_ELEMENT_ID="logger"',
                'DEFINE_WEBFONT_DEBUG_MODE=1'
            ];
            jsFileName = 'webfont-blocked-test.js';
            output     = tempOutput + '/test';
            cd();
        },
        'compile', 'finish',
        function( cd ){
            jsFileName = tempJsFileName;
            output     = tempOutput;
            defines.length = 0;
            cd();
        }
    )
);

/* -------------------------------------------------------
 *  gulp debug2
 */
gulp.task('debug2',
    gulp.series(
        function( cd ){
            defines = [
                'DEFINE_DEBUG=1',
                'DEFINE_LOGGER_ELEMENT_ID="logger"',
                'DEFINE_WEBFONT_DEBUG_MODE=2'
            ];
            jsFileName = 'nowebfont-fallback-test.js';
            output     = tempOutput + '/test';
            cd();
        },
        'compile', 'finish',
        function( cd ){
            jsFileName = tempJsFileName;
            output     = tempOutput;
            defines.length = 0;
            cd();
        }
    )
);

/* -------------------------------------------------------
 *  gulp css
 */
const plumber     = require("gulp-plumber"),
      izpp        = require('gulp-iz-preprocessor'),
      sass        = require("gulp-sass"),
      gcm         = require("gulp-group-css-media-queries"),
      cleanCSS    = require("gulp-clean-css"),
      finalizeCSS = require("./web-doc-base/gulp-finalize-css.js");

gulp.task('css', function(){
    return gulp.src([
            "./web-doc-base/scss/00_Config/**/*.scss",
            "./pbKey/scss/**/*.scss",
            "./pbLCD/scss/**/*.scss",
            "./pbList/scss/**/*.scss"
        ])
        .pipe(plumber())
        .pipe(
            izpp({ fileType : 'scss' })
        )
        .pipe(sass())
        .pipe(gcm())
        .pipe(cleanCSS({
            format: 'beautify',
            compatibility : { properties : { ieFilters : true } },
            //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
            level: {
                1: {
                    // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
                    roundingPrecision : 3
                },
                2: {
                    all : true,
                    removeUnusedAtRules: false
                }
            }
        }))
        .pipe(finalizeCSS())
        .pipe(gulp.dest(output));
    });