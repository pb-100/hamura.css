var gulp   = require('gulp'),
    name   = 'hamura.css',
    output = './docs';

/* -------------------------------------------------------
 *  Closure Compiler
 */
const closureCompiler = require('google-closure-compiler').gulp(),
      globalVariables = 'document,navigator,screen,parseFloat,Number,Function,isFinite,setTimeout,clearTimeout,Date';

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
                   //'../web-doc-base/js/_7_DOMEvent.js',
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
                define            : [
                    'CONST_ASSET_HTTP="//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/"',
                    'CONST_ASSET_HTTPS="//pb-100.github.io/hamura.css/"'
                ],
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
    .pipe(gulp.dest( output ));
});

gulp.task('js', gulp.series( 'compile', 'finish' ) );

/* -------------------------------------------------------
 *  gulp css
 */
const sass      = require("gulp-sass"),
      cleanCSS  = require("gulp-clean-css"),
      gcm       = require("gulp-group-css-media-queries"),
      plumber   = require("gulp-plumber")
      gutil     = require('gulp-util'),
      Transform = require('stream').Transform,
      postcss   = require('postcss');

gulp.task('css', function() {
  return gulp.src( 'R:/pb-100.hamura.css/precompiled/*.scss' )
    .pipe(plumber())
    .pipe(sass())
    .pipe(gcm())
    .pipe(cleanCSS({
      compatibility : { properties : { ieFilters : true } },
      //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
      level: {
        1: {
          // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
          roundingPrecision : 3
        },
        2: {
          all : true,
          removeUnusedAtRules: false // ここが true だと DATA URI の Web Font が削除される。
        }
      }
    }))
    .pipe(
    // Creaet CSS for High Contrast mode.
    // Delete " [firefox-gte2]" and add ",x:-moz-any-link" to .cleardix selector.
    // Delete " [firefox-gte2]", add ",x:-moz-any-link" and replace the value from "_" to "_".
    // Delete " [opera-lte9]" and add ",x:not(\\\\)" to .cleardix selector.
    (function( opts ){
        var stream = new Transform( { objectMode : true } );

        stream._transform = function( file, encoding, cb ){
            if( file.isNull() ) return cb(null, file);
    
            if( file.isStream() ) return cb( new gutil.PluginError( 'mqo', 'Streaming not supported' ) );
    
            if( file.isBuffer() ){
                let css    = postcss.parse( String( file.contents ) ),
                    newCss = postcss.parse('@charset "UTF-8"'),
                    createNewFile, updateCurrentFile;
    
                css.walkAtRules( function( rule ){
                    if( rule.name === 'media' && rule.params === opts.match ){
                        rule.clone().walkRules( function( r ){
                            newCss.append( r );
                        } );
                        rule.remove();
                        createNewFile = true;
                    };
                });
    
                if( createNewFile ){
                    this.push(new gutil.File({
                        cwd      : file.cwd,
                        base     : file.base,
                        path     : file.base + '/' + opts.folder + '/' + file.basename,
                        contents : Buffer.from(newCss.toString())
                    }));
                };
    
                css.walkDecls('content', function( decl, rule ){
                    rule = decl.parent;
                    if( decl.value === '""' && 0 <= rule.selector.indexOf( ' [firefox-gte2]' ) ){
                        rule.selector = rule.selector.split( ' [firefox-gte2]' ).join( '' ) + ',x:-moz-any-link';
                        updateCurrentFile = true;
                    } else if( decl.value === '"_"' && 0 <= rule.selector.indexOf( ' [firefox-gte2]' ) ){
                        rule.selector = rule.selector.split( ' [firefox-gte2]' ).join( '' ) + ',x:-moz-any-link';
                        decl.value = '" "';
                        updateCurrentFile = true;
                    } else if( decl.value === '" "' && 0 <= rule.selector.indexOf( ' [opera-lte9]' ) ){
                        rule.selector = rule.selector.split( ' [opera-lte9]' ).join( '' ) + ',x:not(\\)';
                        css.append( rule ); // go to last
                        updateCurrentFile = true;
                    };
                });
    
                if( updateCurrentFile ){
                    this.push(new gutil.File({
                        cwd      : file.cwd,
                        base     : file.base,
                        path     : file.path,
                        contents : Buffer.from(css.toString())
                    }));
                } else {
                    this.push(file);
                };
                cb();
            };
        };
        return stream;
    })({
        match  : '*** only screen and (-ms-high-contrast:active)',
        folder : 'hc'
    }))
    .pipe(gulp.dest(output));
});