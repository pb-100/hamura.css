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
                    // './web-doc-base/inline-js/10_dynamicViewPort.js',

                    './web-doc-base/js/1_DEFINE/defines.js',

                    './web-doc-base/js/2_Core/1_globalValiables.js',
                    './web-doc-base/js/2_Core/2_packageValiables.js',
                    './web-doc-base/js/2_Core/3_Type.js',
                    './web-doc-base/js/2_Core/4_builtinArrayMethods.js',
                    './web-doc-base/js/2_Core/DebugLogger.js',
                    './web-doc-base/js/2_Core/LoopTimer.js',
                    './web-doc-base/js/2_Core/Timer.js',
 
                    './web-doc-base/js/3_Event/1_globalValiables.js',
                    './web-doc-base/js/3_Event/2_packageValiables.js',
                    './web-doc-base/js/3_Event/3_core.js',
                    './web-doc-base/js/3_Event/cssAvailability.js',
                    './web-doc-base/js/3_Event/highContrustMode.js',
                    //'./web-doc-base/js/3_Event/imageReady.js',
                    './web-doc-base/js/3_Event/prefersColor.js',
                    './web-doc-base/js/3_Event/print.js',
                    //'./web-doc-base/js/3_Event/resize.js',
                    './web-doc-base/js/3_Event/scroll.js',
 
                    './web-doc-base/js/4_DOM/1_globalValiables.js',
                    './web-doc-base/js/4_DOM/2_packageValiables.js',
                    './web-doc-base/js/4_DOM/3_DOM.js',
                    './web-doc-base/js/4_DOM/4_DOMStyle.js',
                    './web-doc-base/js/4_DOM/5_DOMAttr.js',
                    './web-doc-base/js/4_DOM/6_DOMClass.js',
                    // './web-doc-base/js/4_DOM/7_DOMEvent.js',
                    './web-doc-base/js/4_DOM/9_nodeCleaner.js',
 
                    './web-doc-base/js/5_CSSOM/CSSOM.js',
 
                    './web-doc-base/js/6_CanUse/1_globalValiables.js',
                    './web-doc-base/js/6_CanUse/2_packageValiables.js',
                    './web-doc-base/js/6_CanUse/contentPusedoElemenmt.js',
                    './web-doc-base/js/6_CanUse/dataUriTest.js',
                    './web-doc-base/js/6_CanUse/ieFilterTest.js',
                    './web-doc-base/js/6_CanUse/imageTest.js',
                    './web-doc-base/js/6_CanUse/webfontTest.js',

                    './web-doc-base/js/7_Library/ie5.js',

                    './web-doc-base/js/onreachEnd.js',

                    './common.js/_DEFINE.js',
                    './common.js/_global.js',
                    './common.js/CHAR_TABLE.js',
                    './pbLCD/js/fallback.js',
                    './pbList/js/prettify.js'
                ],
                externs           : [
                    './web-doc-base/inline-js/__externs.js',
                    './node_modules/google-closure-compiler/contrib/externs/svg.js',
                    './web-doc-base/js/__externs.js'
                ],
                define            : [
                    'g_MOBILE_CSS_PREFIX=""',
                    'DEFINE_ASSET_HTTP="//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/"',
                    'DEFINE_ASSET_HTTPS="//pb-100.github.io/hamura.css/"',
                    'DEFINE_TEST_IMAGE_URL="//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png"'
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
 *  gulp test1
 */
const tempJsFileName = jsFileName,
      tempOutput     = output;

gulp.task('test1',
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
 *  gulp test2
 */
gulp.task('test2',
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
 *  gulp all
 */
gulp.task('all', gulp.series( 'js', 'test1', 'test2' ) );

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
            './web-doc-base/scss/00_Config/**/*.scss',
            './web-doc-base/scss/07_Library/contentPusedoElemenmt.scss',
            './pbChr/scss/**/*.scss',
            './pbFont/scss/**/*.scss',
            './pbKey/scss/**/*.scss',
            './pbLCD/scss/**/*.scss',
            './pbList/scss/**/*.scss'
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