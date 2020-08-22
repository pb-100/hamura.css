var gulp   = require('gulp'),
    output = './docs';

/* -------------------------------------------------------
 *  gulp js
 */
const ClosureCompiler = require('google-closure-compiler').gulp(),
      globalVariables = 'document,navigator,screen,parseFloat,Number,Function,isFinite,setTimeout,clearTimeout,Date';

var jsFileName = 'hamura.js'
    defines    = [];

gulp.task('js', gulp.series(
    function(){
        return ClosureCompiler(
            {
                js                : [
                    './web-doc-base/what-browser-am-i/src/0_global.js',
                    './web-doc-base/what-browser-am-i/src/1_packageGlobal.js',
                    './web-doc-base/what-browser-am-i/src/2_platform.js',
                    './web-doc-base/what-browser-am-i/src/3_browserEngine.js',
                    // './web-doc-base/what-browser-am-i/src/4_brand.js',
                    './web-doc-base/what-browser-am-i/src/5_finalize.js',
                    // './web-doc-base/inline-js/dynamicViewPort.js',
    
                    './web-doc-base/src/js/1_DEFINE/defines.js',
    
                    './web-doc-base/src/js/2_Core/1_globalValiables.js',
                    './web-doc-base/src/js/2_Core/2_packageValiables.js',
                    './web-doc-base/src/js/2_Core/3_Type.js',
                    './web-doc-base/src/js/2_Core/4_builtinArrayMethods.js',
                    './web-doc-base/src/js/2_Core/DebugLogger.js',
                    './web-doc-base/src/js/2_Core/LoopTimer.js',
                    './web-doc-base/src/js/2_Core/Timer.js',
    
                    './web-doc-base/src/js/3_Event/1_globalValiables.js',
                    './web-doc-base/src/js/3_Event/2_packageValiables.js',
                    './web-doc-base/src/js/3_Event/3_core.js',
                    './web-doc-base/src/js/3_Event/cssAvailability.js',
                    './web-doc-base/src/js/3_Event/highContrustMode.js',
                    //'./web-doc-base/src/js/3_Event/imageReady.js',
                    './web-doc-base/src/js/3_Event/prefersColor.js',
                    './web-doc-base/src/js/3_Event/print.js',
                    //'./web-doc-base/src/js/3_Event/resize.js',
                    './web-doc-base/src/js/3_Event/scroll.js',

                    './web-doc-base/src/js/4_DOM/1_globalValiables.js',
                    './web-doc-base/src/js/4_DOM/2_packageValiables.js',
                    './web-doc-base/src/js/4_DOM/3_DOM.js',
                    './web-doc-base/src/js/4_DOM/4_DOMStyle.js',
                    './web-doc-base/src/js/4_DOM/5_DOMAttr.js',
                    './web-doc-base/src/js/4_DOM/6_DOMClass.js',
                    // './web-doc-base/src/js/4_DOM/7_DOMEvent.js',
                    './web-doc-base/src/js/4_DOM/9_nodeCleaner.js',

                    './web-doc-base/src/js/5_CSSOM/CSSOM.js',

                    './web-doc-base/src/js/6_CanUse/1_globalValiables.js',
                    './web-doc-base/src/js/6_CanUse/2_packageValiables.js',
                    './web-doc-base/src/js/6_CanUse/contentPusedoElement.js',
                    './web-doc-base/src/js/6_CanUse/dataUriTest.js',
                    './web-doc-base/src/js/6_CanUse/ieFilterTest.js',
                    './web-doc-base/src/js/6_CanUse/imageTest.js',
                    './web-doc-base/src/js/6_CanUse/webfontTest.js',

                    './web-doc-base/src/js/7_Library/ie5.js',

                    './web-doc-base/src/js/onreachEnd.js',

                    './src/js/common/_DEFINE.js',
                    './src/js/common/_global.js',
                    './src/js/common/CHAR_TABLE.js',
                    './src/js/common/charPosition.js',
                    './src/js/common/highContrustMode.js',
                    './src/js/pbLCD.js',
                    './src/js/pbList.js'
                ],
                externs           : [
                    './web-doc-base/what-browser-am-i/src/__externs.js',
                    './node_modules/google-closure-compiler/contrib/externs/svg.js',
                    './web-doc-base/src/js/__externs.js'
                ],
                define            : [
                    'WHAT_BROWSER_AM_I_DEFINE_BRAND_ENABLED=false',
                    'WHAT_BROWSER_AM_I_DEFINE_PCSITE_REQUESTED_ENABLED=false',
                    'WHAT_BROWSER_AM_I_DEFINE_IOS_DEVICE_ENABLED=false',
                    'WHAT_BROWSER_AM_I_DEFINE_DEVICE_TYPE_ENABLED=false',
                    'g_MOBILE_CSS_PREFIX=""',
                    'DEFINE_TEST_IMAGE_HTTP="//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png"',
                    'DEFINE_TEST_IMAGE_HTTPS="//pb-100.github.io/hamura.css/pbLCD/bg.png"',
                    'DEFINE_ASSET_HTTP="//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/"',
                    'DEFINE_ASSET_HTTPS="//pb-100.github.io/hamura.css/"'
                ].concat( defines ),
                compilation_level : 'ADVANCED',
                // compilation_level : 'WHITESPACE_ONLY',
                formatting        : 'PRETTY_PRINT',
                warning_level     : 'VERBOSE',
                language_in       : 'ECMASCRIPT3',
                language_out      : 'ECMASCRIPT3',
                output_wrapper    : 'PB100={};(function(PB100,ua,window,emptyFunction,' + globalVariables + ',undefined){\n%output%\n})(PB100,{},this,new Function,' + globalVariables + ')',
                js_output_file    : 'temp.js'
            }
        ).src().pipe(
            ClosureCompiler(
                {
                    externs           : [
                        './web-doc-base/what-browser-am-i/src/__externs.js',
                        './node_modules/google-closure-compiler/contrib/externs/svg.js',
                        './web-doc-base/src/js/__externs.js'
                    ],
                    formatting        : 'PRETTY_PRINT',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : jsFileName
                }
            )
        ).pipe(gulp.dest( output ));
    }
));

/* -------------------------------------------------------
 *  gulp test0
 */
const tempJsFileName = jsFileName,
      tempOutput     = output;

gulp.task('test0',
    gulp.series(
        function( cd ){
            defines = [
                'DEFINE_DEBUG=1',
                'DEFINE_LOGGER_ELEMENT_ID="logger"'
            ];
            jsFileName = 'webfont-test.js';
            output     = tempOutput + '/test';
            cd();
        },
        'js',
        function( cd ){
            jsFileName = tempJsFileName;
            output     = tempOutput;
            defines.length = 0;
            cd();
        }
    )
);

/* -------------------------------------------------------
 *  gulp test1
 */
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
        'js',
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
        'js',
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
gulp.task('all', gulp.series( 'js', 'test0', 'test1', 'test2' ) );

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
            './web-doc-base/src/scss/00_Config/**/*.scss',
            './web-doc-base/src/scss/07_Library/contentPusedoElement.scss',
            './src/scss/common/**/*.scss',
            './src/scss/pbKey/**/*.scss',
            './src/scss/pbChr/**/*.scss',
            './src/scss/pbLCD/**/*.scss',
            './src/scss/pbFont/**/*.scss',
            './src/scss/pbList/**/*.scss' // pbFont の直後に無いと、エラーになる Error: ".pbList code" failed to @extend "%pbFontBase".
        ])
        .pipe(plumber())
        .pipe(
            izpp({ fileType : 'scss', tasks : [ { imports : [ 'hard-reset' ] } ] })
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