/**
 * 1. @font-face のチェック
 * 2. 計測してチェック 5000ms
 * 3. Data URI の可否をチェック
 * 4. Data URI の WebFont を計測してチェック 500ms
 * 5. Data URI で WebFont を埋め込んだ css の読み込み -> 計測してチェック 5000ms
 * 
 * [Test @font-face]no-----+
 *   |                     |
 * [Test WebFont]no-+      |
 *   |              |      |
 *   |  [Test DataURI]no-+ |
 *   |              |    | |
 *   |  [Test CSSFont]no-+ |
 *   |              |    | |
 *   v              v    | |
 * WebFont is available. v v
 *           Image fallback.
 */

var WEBFONT_TEST_PREFIX = 'bad_' + ( new Date() - 0 ) + '_';

function webFontTest( callback, targetWebFontName, embededWebFonts, testInterval ){
    var INTERVAL = 5000,
        INTERVAL_EMBEDED_WEBFONT = 100;

    var startTime, canDataUri,
        span, div, baseFonts, defaultWidth;

    testInterval = testInterval || INTERVAL;

    if( DEFINE_DEBUG && 1 <= DEFINE_WEBFONT_DEBUG_MODE ){
        targetWebFontName = WEBFONT_TEST_PREFIX + targetWebFontName;
        g_DebugLogger.log( '[pbList > webFontTest] DEBUG_MODE : ' + DEFINE_WEBFONT_DEBUG_MODE );
    };

    if( maybeCanWebFont() ){
        if( DEFINE_DEBUG ){
            g_DebugLogger.log( '[pbList > webFontTest] maybeCanWebFont() : true' );
        };
        if( document.fonts && !( ua[ 'WebKit' ] < 603 ) ){
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] Use Native font loader.' );
            };
            testByNativeFontLoaderAPI();
        } else {
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] No native font loader.' );
            };
            testWebFont( true );
        };
    } else {
        if( DEFINE_DEBUG ){
            g_DebugLogger.log( '[pbList > webFontTest] maybeCanWebFont() : false' );
        };
        Timer_set( callback, false );
    };

/**================================================================
 *  https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/fontface.js
 *  http://www.webapps-online.com/online-tools/user-agent-strings/dv/browser135552/nokia-browser
 * 
 *  http://blog.kaelig.fr/post/33373448491/testing-font-face-support-on-mobile-and-tablet
 *   Some browsers declare they support @font-face but don’t display the glyphs correctly… 
 *    Symbian 10 - Nokia Browser 8.3.1.4
 *    Android 2.1 - stock browser
 *    Android 2.1 - Dolphin
 *    WebOS 2 - stock browser
 *    WebOS 3 - stock browser
 *    Android 4 - UCBrowser
 *    Windows Phone 7 - IE9
 */
    function maybeCanWebFont(){
        var blacklist =
                ua[ 'MeeGo' ] || ua[ 'AOSP' ] < 2.2 || ua[ 'WebOS' ] || ua[ 'UCWEB' ] ||
                ( ua[ 'WindowsPhone' ] && g_Trident < 10 ) || // g_Tasman ||
                ua[ 'NDS' ] || ua[ 'NDSi' ] || ua[ 'N3DS' ],
            style, sheet, cssText, v, result;
    
        if( blacklist ){
            return false;
        } else if( g_Trident < 6 ){
            return true;
        };
        style   = DOM_createThenAdd(
            g_head, 'style', 0, 0, '@font-face{font-family:"font";src:url("https://")}'
        );
        sheet   = style.sheet || style.styleSheet;
        cssText = sheet ? ((v = sheet.cssRules) && (v = v[0]) ? v.cssText : sheet.cssText || '') : '';
        result  = 0 < cssText.indexOf('src') && cssText.indexOf('@font-face') === 0;
        DOM_remove( style );
        return result;
    };

/**
 * https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
 */
    function testByNativeFontLoaderAPI(){
        var font = '1.6em "' + targetWebFontName + '"';

        if( DEFINE_DEBUG ){
            g_DebugLogger.log( '[pbList > webFontTest] testByNativeFontLoaderAPI strat.' );
        };

        if( check() ){
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] 1st fonts.check() : true' );
            };
            Timer_set( callback, mesureWebFont( targetWebFontName ) );
        } else {
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] fonts.load().then() start.' );
            };
            document.fonts.load( font ).then(
                function( fonts ){
                    if( DEFINE_DEBUG ){
                        g_DebugLogger.log( '[pbList > webFontTest] fonts.check() : ' + check() + ', fonts.length : ' + fonts.length );
                    };
                    callback( check() && mesureWebFont( targetWebFontName ) );
                },
                DEFINE_DEBUG ? function( reason ){
                    if( DEFINE_DEBUG ){
                        g_DebugLogger.log( '[pbList > webFontTest] fonts.load() rejected! ' + reason );
                        testDataURI();
                    };
                } : testDataURI
            );
        };

        function check(){
            return document.fonts[ 'check' ]( font, 'i' );
        };
    };

    function resetTime(){
        return startTime = new Date - 0;
    };
    
    function checkTime( ms ){
        // https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
        // hidden の場合は時間切れをスキップする。未検証…
        if( document.hidden || document[ 'msHidden' ] || document[ 'mozHidden' ] || document[ 'webkitHidden' ] ) return false;
        return ms < new Date - startTime;
    };
    
    function testWebFont( isStart ){
        if( isStart ){
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] testWebFont start.' );
            };
            resetTime();
        };

        if( mesureWebFont( targetWebFontName ) ){
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] testWebFont mesurement success!' );
            };
            callback( true );
        } else if( checkTime( testInterval ) ){
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] testWebFont timeout!' );
            };
            if( canDataUri ){
                callback( false );
            } else {
                testDataURI();
            };
        } else {
            Timer_set( testWebFont );
        };
    };

/**================================================================
 * Original Code:
 * 
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.3 (24 Mar 2012)
 */
    function preMesure(){
        var i = -1, font;

        preMesure = null;

        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.

        // http://defghi1977-onblog.blogspot.jp/2013/02/canvasweb.html
        // ※なお，webkitでは代替フォントとしてmonospaceを使うと上手く行きませんでした．
        baseFonts = [/*'monospace',*/ 'sans-serif', 'serif']; // monospace は Chrome で具合が悪い

        // create a SPAN in the document to get the width of the text we use to test
        span = DOM_createThenAdd(
            g_body, 'span',
            {
                'aria-hidden' : 'true'
            },
            {
                position   : 'absolute',
                top        : 0,
                left       : 0,
                visibility : 'hidden',
                //we test using 72px font size, we may use any size. I guess larger the better.
                fontSize   : '72px'
            },
        //we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
            'mmmmmmmmmmlli'
        );
        defaultWidth = {};
    
        while( font = baseFonts[ ++i ] ) {
            //get the default width for the three base fonts
            DOM_setStyle( span, 'fontFamily', font );
            defaultWidth[ font ] = span.offsetWidth; //width for the default font
            //defaultHeight[ font ] = span.offsetHeight; //height for the defualt font
        };
    };

    function mesureWebFont( testFontName ){
        var detected, i = -1, font;

        preMesure && preMesure();

        DOM_appendChild( g_body, span );
        while( font = baseFonts[ ++i ] ) {
            // name of the font along with the base font for fallback.
            DOM_setStyle( span, 'fontFamily', '"' + testFontName + '",' + font );
            if( span.offsetWidth !== defaultWidth[ font ] /* || span.offsetHeight !== defaultHeight[ font ] */){
                detected = true;
                break;  
            };
        };
        DOM_remove( span );
        return detected;
    };

/**================================================================
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/url/data-uri.js
 */
    function testDataURI(){
        if( DEFINE_DEBUG ){
            g_DebugLogger.log( '[pbList > webFontTest] testDataURI start.' );
        };

        if( g_Trident < 9 ){ // ie8 は img 以外をサポートしない...
            testDataUriComplete();
        } else {
            var datauri = new Image();
            
            datauri.onerror = testDataUriComplete;

            datauri.onload = function(){
                canDataUri = datauri.width * datauri.height === 1;
                testDataUriComplete();
            };
        
            datauri.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        };
    };

    function testDataUriComplete(){
        if( DEFINE_DEBUG ){
            g_DebugLogger.log( '[pbList > webFontTest] testDataURI ended : ' + canDataUri );
        };

        if( canDataUri ){
            testDataUriWebFont( true );
        } else {
            callback( false );
        };
    };
    
    function testDataUriWebFont( isStart ){
        var k;
        
        if( isStart ) resetTime();

        for( k in embededWebFonts ){
            if( mesureWebFont( k ) ){
                if( DEFINE_DEBUG ){
                    g_DebugLogger.log( '[pbList > webFontTest] success! ' + k );
                };
                div = DOM_createThenAdd(
                    g_body, 'div',
                    {
                        'aria-hidden' : 'true',
                        className     : 'pbFont-testCssReady',
                        id            : 'pbFont-testCssReady'
                    }
                );
                CSSOM_import( embededWebFonts[ k ] );
                Timer_set( testImportedCssReady, true );
            } else if( checkTime( INTERVAL_EMBEDED_WEBFONT ) ){
                if( DEFINE_DEBUG ){
                    g_DebugLogger.log( '[pbList > webFontTest] timeout! ' + k );
                };
                delete embededWebFonts[ k ];
                Timer_set( testDataUriWebFont, true );
            } else {
                Timer_set( testDataUriWebFont );
            };
            return;
        };

        callback( false );
    };

    function testImportedCssReady( isStart ){
        if( isStart ){
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] testImportedCssReady start!' );
                if( DEFINE_WEBFONT_DEBUG_MODE < 2 ){
                    targetWebFontName = targetWebFontName.replace( WEBFONT_TEST_PREFIX, '' );
                };
            };
            resetTime();
        };

        if( 1 < div.offsetWidth ){
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] testImportedCssReady ended.' );
            };
            DOM_remove( div );
            testInterval = INTERVAL_EMBEDED_WEBFONT;
            Timer_set( testWebFont, true );
        } else if( checkTime( testInterval ) ){
            if( DEFINE_DEBUG ){
                g_DebugLogger.log( '[pbList > webFontTest] testImportedCssReady timeout!' );
            };
            DOM_remove( div );
            callback( false );
        } else {
            Timer_set( testImportedCssReady );
        };
    };
};

