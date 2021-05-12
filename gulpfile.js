'use strict';

const gulp = require('gulp');

var outputDir = './docs',
    tempDir   = require('os').tmpdir() + '/hamura.css',
    isRelease = false;

/* -------------------------------------------------------
 *  gulp js
 */
const ClosureCompiler = require('google-closure-compiler').gulp(),
      gulpConcat      = require('gulp-concat'),
      gulpDPZ         = require('gulp-diamond-princess-zoning'),
      globalVariables = 'document,navigator,parseFloat,Function,setTimeout,clearTimeout,Date';

var jsFileName = 'hamura.js',
    externs    = [
        './.submodules/web-doc-base/.submodules/what-browser-am-i/src/__externs.js',
        './node_modules/google-closure-compiler/contrib/externs/svg.js',
        './.submodules/web-doc-base/src/js/__externs.js',
        './src/js/__externs.js'
    ],
    defines    = [];

gulp.task('js', gulp.series(
    function(){
        return gulp.src(
                [
                    './.submodules/web-doc-base/.submodules/what-browser-am-i/src/**.js',
                    '!./.submodules/web-doc-base/.submodules/what-browser-am-i/src/4_brand.js',
                    '!' + externs[ 0 ]
                ]
            ).pipe(
                gulpDPZ(
                    {
                        labelGlobal        : 'global',
                        labelPackageGlobal : '###',
                        labelModuleGlobal  : '###',
                        packageGlobalArgs  : 'ua,window,document,navigator,screen,parseFloat,Number',
                        basePath           : '.submodules/web-doc-base/.submodules/what-browser-am-i/src',
                        fileName           : 'ua.js'
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : externs,
                        define            : [
                            'WHAT_BROWSER_AM_I_DEFINE_BRAND_ENABLED=false',
                            'WHAT_BROWSER_AM_I_DEFINE_PCSITE_REQUESTED_ENABLED=false',
                            'WHAT_BROWSER_AM_I_DEFINE_IOS_DEVICE_ENABLED=false',
                            'WHAT_BROWSER_AM_I_DEFINE_DEVICE_TYPE_ENABLED=false'
                        ].concat( defines ),
                        compilation_level : 'ADVANCED',
                        //compilation_level : 'WHITESPACE_ONLY',
                        formatting        : isRelease ? 'SINGLE_QUOTES' : 'PRETTY_PRINT',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    : 'ua={};%output%',
                        js_output_file    : 'ua.js'
                    }
                )
            ).pipe(gulp.dest( tempDir ));
    },
    function(){
        return ClosureCompiler(
            {
                js                : [
                    './.submodules/web-doc-base/src/js/0_global/1_DEFINE.js',

                    './.submodules/web-doc-base/src/js/1_packageGlobal/1_packageValiable.js',
                    './.submodules/web-doc-base/src/js/1_packageGlobal/2_builtinArrayMethods.js',

                    './.submodules/web-doc-base/src/js/2_CoreModule/DebugLogger.js',
                    './.submodules/web-doc-base/src/js/2_CoreModule/LoopTimer.js',
                    './.submodules/web-doc-base/src/js/2_CoreModule/Timer.js',

                    './.submodules/web-doc-base/src/js/3_EventModule/1_moduleGlobal.js',
                    './.submodules/web-doc-base/src/js/3_EventModule/2_core.js',
                    './.submodules/web-doc-base/src/js/3_EventModule/cssAvailability.js',
                    './.submodules/web-doc-base/src/js/3_EventModule/highContrastMode.js',
                    // './.submodules/web-doc-base/src/js/3_EventModule/imageReady.js',
                    './.submodules/web-doc-base/src/js/3_EventModule/prefersColor.js',
                    './.submodules/web-doc-base/src/js/3_EventModule/print.js',
                    // './.submodules/web-doc-base/src/js/3_EventModule/resize.js',
                    './.submodules/web-doc-base/src/js/3_EventModule/scroll.js',

                    './.submodules/web-doc-base/src/js/4_DOM/1_DOM.js',
                    './.submodules/web-doc-base/src/js/4_DOM/2_DOMStyle.js',
                    './.submodules/web-doc-base/src/js/4_DOM/3_DOMAttr.js',
                    './.submodules/web-doc-base/src/js/4_DOM/4_DOMClass.js',
                    // './.submodules/web-doc-base/src/js/4_DOM/5_DOMEvent.js',
                    // './.submodules/web-doc-base/src/js/4_DOM/nodeCleaner.js',

                    './.submodules/web-doc-base/src/js/5_CSSOM/.generated.btoa.js',
                    './.submodules/web-doc-base/src/js/5_CSSOM/CSSOM.js',

                    './.submodules/web-doc-base/src/js/6_CanUse/generatedContent.js',
                    './.submodules/web-doc-base/src/js/6_CanUse/dataUriTest.js',
                    './.submodules/web-doc-base/src/js/6_CanUse/ieFilterTest.js',
                    './.submodules/web-doc-base/src/js/6_CanUse/imageTest.js',
                    './.submodules/web-doc-base/src/js/6_CanUse/webfontTest.js',

                    './.submodules/web-doc-base/src/js/7_Library/cssLoader.js',

                    './.submodules/web-doc-base/src/js/onreachEnd.js',

                    './src/js/common/_global.js',
                    './src/js/common/CHAR_TABLE.js',
                    './src/js/common/charPosition.js',
                    './src/js/common/highContrastMode.js',
                    './src/js/pbLCD.js',
                    './src/js/pbList.js'
                ],
                externs           : externs,
                define            : [
                    'WEB_DOC_BASE_DEFINE_MOBILE_CSS_PREFIX=""'
                ].concat( defines ),
                compilation_level : 'ADVANCED',
                // compilation_level : 'WHITESPACE_ONLY',
                // formatting        : 'PRETTY_PRINT',
                warning_level     : 'VERBOSE',
                language_in       : 'ECMASCRIPT3',
                language_out      : 'ECMASCRIPT3',
                output_wrapper    : 'PB100={};(function(PB100,ua,window,emptyFunction,' + globalVariables + ',undefined){\n%output%\n})(PB100,ua,this,new Function,' + globalVariables + ')',
                js_output_file    : 'temp.js'
            }
        ).src().pipe(
            ClosureCompiler(
                {
                    externs           : externs,
                    formatting        : isRelease ? 'SINGLE_QUOTES' : 'PRETTY_PRINT',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : jsFileName
                }
            )
        ).pipe(gulp.dest( tempDir ));
    },
    function(){
        return gulp.src(
                [
                    tempDir + '/ua.js',
                    tempDir + '/' + jsFileName
                ]
            ).pipe(gulpConcat(jsFileName))
            .pipe(gulp.dest(outputDir));
    }
));

/* -------------------------------------------------------
 *  gulp test0
 */
const tempJsFileName = jsFileName;

gulp.task('test0',
    gulp.series(
        function( cd ){
            defines = [
                'WEB_DOC_BASE_DEFINE_DEBUG=1',
                'WEB_DOC_BASE_DEFINE_LOGGER_ELEMENT_ID="logger"'
            ];
            jsFileName = 'webfont-test.js';
            cd();
        },
        'js',
        function( cd ){
            jsFileName = tempJsFileName;
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
                'WEB_DOC_BASE_DEFINE_DEBUG=1',
                'WEB_DOC_BASE_DEFINE_LOGGER_ELEMENT_ID="logger"',
                'WEB_DOC_BASE_DEFINE_WEBFONT_DEBUG_MODE=1'
            ];
            jsFileName = 'webfont-blocked-test.js';
            cd();
        },
        'js',
        function( cd ){
            jsFileName = tempJsFileName;
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
                'WEB_DOC_BASE_DEFINE_DEBUG=1',
                'WEB_DOC_BASE_DEFINE_LOGGER_ELEMENT_ID="logger"',
                'WEB_DOC_BASE_DEFINE_WEBFONT_DEBUG_MODE=2'
            ];
            jsFileName = 'nowebfont-fallback-test.js';
            cd();
        },
        'js',
        function( cd ){
            jsFileName = tempJsFileName;
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
const plumber     = require('gulp-plumber'),
      izpp        = require('gulp-iz-preprocessor'),
      sass        = require('gulp-sass'),
      gcm         = require('gulp-group-css-media-queries'),
      cleanCSS    = require('gulp-clean-css'),
      CSShack     = require('./.submodules/web-doc-base/js-buildtools/gulp-csshack.js'),
      finalizeCSS = require('./.submodules/web-doc-base/js-buildtools/gulp-finalize-css.js'),
      stream      = require('stream');

gulp.task('css', function(){
    return gulp.src([
            './.submodules/web-doc-base/src/scss/00_Config/**/*.scss',
            './.submodules/web-doc-base/src/scss/07_Library/contentPusedoElement.scss',
            './src/scss/common/**/*.scss',
            './src/scss/pbKey/**/*.scss',
            './src/scss/pbChr/**/*.scss',
            './src/scss/pbLCD/**/*.scss',
            './src/scss/pbFont/**/*.scss',
            './src/scss/pbList/**/*.scss'
        ])
        .pipe(plumber())
        .pipe(
            izpp({ fileType : 'scss', tasks : [ { imports : [ 'hard-reset' ] } ] })
        )
        .pipe(sass())
        .pipe(gcm())
        .pipe(cleanCSS({
            compatibility : { properties : { ieFilters : true } },
            //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
            level : {
                1 : {
                    // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
                    roundingPrecision : 3
                },
                2 : {
                    all : true,
                    removeUnusedAtRules: false,
                    skipProperties : [ 'display' ]
                }
            }
        }))
        .pipe(CSShack())
        .pipe(cleanCSS({
            format        : isRelease ? {} : 'beautify',
            compatibility : { properties : { ieFilters : true } },
            //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
            level : {
                1 : { roundingPrecision : 3 },
                2 : { all : true, removeUnusedAtRules: false },
                skipProperties : [ 'display', 'background', '-webkit-transition-property', '-webkit-transition' ]
            }
        }))
        .pipe(finalizeCSS())
        .pipe(transfrom)
        .pipe(gulp.dest(outputDir));
    });

var transfrom = new stream.Transform( { objectMode : true } );
    transfrom._transform = function( file, encoding, cb ){
        if( file.basename === 'legacy.css' ){
            file.contents = Buffer.from(file.contents.toString( encoding ) +
                '.pbAlp9[pbGhst="01"],.pbAlp9[pbGhst=CS]{' +
                    'background-position:0 -216px' +
                '}' +
                '.pbAlp8[pbGhst="01"],.pbAlp8[pbGhst=CS]{' +
                    'background-position:0 -192px' +
                '}' +
                '.pbAlp7[pbGhst="01"],.pbAlp7[pbGhst=CS]{' +
                    'background-position:0 -168px' +
                '}' +
                '.pbAlp6[pbGhst="01"],.pbAlp6[pbGhst=CS]{' +
                    'background-position:0 -144px' +
                '}'
            )
        };
        this.push( file );
        cb();
    };

/* -------------------------------------------------------
 *  For github workflow. See .github/workflows/release.yml
 */
gulp.task( 'release', gulp.series(
    function(){
        outputDir = 'output';
        isRelease = true;

        return gulp.src([ // docs/pbFont/ 以下と docs/pbLCD/ 以下をコピー
            'docs/*/*',
            '!docs/pbFontSVGGenerator/*'
        ]).pipe( gulp.dest( outputDir ) );
    },
    'js', 'css'
) );