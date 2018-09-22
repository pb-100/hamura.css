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

function webFontTest( callback, targetWebFontName, embededWebFonts, testInterval ){
    var INTERVAL = 5000,
        INTERVAL_EMBEDED_WEBFONT = 100;

    var setTimer = PB100[ 'Timer' ][ 'set' ],
        startTime, canDataUri,
        body = document.body,
        head = document.getElementsByTagName('head')[0],
        span, div, baseFonts, defaultWidth;

    testInterval = testInterval || INTERVAL;

    if( maybeCanWebFont() ){
        if( document[ 'fonts' ] && !( ua[ 'WebKit' ] < 603 ) ){
            testByNativeFontLoaderAPI();
        } else {
            testWebFont( true );
        };
    } else {
        setTimer( callback, false );
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
        var blacklist = ua[ 'MeeGo' ] || ua[ 'AOSP' ] < 2.2 || ua[ 'WebOS' ] || ua[ 'UCWEB' ] || ua[ 'WinPhone' ] < 8 || ua[ 'NDS' ] || ua[ 'NDSi' ] || ua[ 'N3DS' ],
            style, sheet, cssText, v, result;
    
        if( blacklist ){
            return false;
        } else if( ua[ 'IE' ] < 6 ){
            return true;
        };
        style   = PB100[ 'DOM' ][ 'create' ](
            head, 'style', 0, 0, '@font-face{font-family:"font";src:url("https://")}'
        );
        sheet   = style.sheet || style.styleSheet;
        cssText = sheet ? ((v = sheet.cssRules) && (v = v[0]) ? v.cssText : sheet.cssText || '') : '';
        result  = 0 < cssText.indexOf('src') && cssText.indexOf('@font-face') === 0;
        PB100[ 'DOM' ][ 'remove' ]( style );
        return result;
    };

/**
 * https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
 */
    function testByNativeFontLoaderAPI(){
        var font = '1.6em "' + targetWebFontName + '"';

        if( check() ){
            setTimer( callback, true );
        } else {
            document[ 'fonts' ].load( font ).then(
                function(){
                    callback( check() );
                },
                testDataURI
            );
        };

        function check(){
            return document[ 'fonts' ][ 'check' ]( font, 'i' );
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
        if( isStart ) resetTime();

        if( mesureWebFont( targetWebFontName ) ){
            callback( true );
        } else if( checkTime( testInterval ) ){
            if( canDataUri ){
                callback( false );
            } else {
                testDataURI();
            };
        } else {
            setTimer( testWebFont );
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

        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.

        // http://defghi1977-onblog.blogspot.jp/2013/02/canvasweb.html
        // ※なお，webkitでは代替フォントとしてmonospaceを使うと上手く行きませんでした．
        baseFonts = [/*'monospace',*/ 'sans-serif', 'serif']; // monospace は Chrome で具合が悪い

        // create a SPAN in the document to get the width of the text we use to test
        span = PB100[ 'DOM' ][ 'create' ](
            body, 'span',
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
            PB100[ 'DOM' ][ 'css' ]( span, { fontFamily : font } );
            defaultWidth[ font ] = span.offsetWidth; //width for the default font
            //defaultHeight[ font ] = span.offsetHeight; //height for the defualt font
        };
    };

    function mesureWebFont( testFontName ){
        var detected, i = -1, font;

        preMesure && preMesure();
        preMesure = null;

        PB100[ 'DOM' ][ 'add' ]( body, span );
        while( font = baseFonts[ ++i ] ) {
            // name of the font along with the base font for fallback.
            PB100[ 'DOM' ][ 'css' ]( span, { fontFamily : testFontName + ',' + font } );
            if( span.offsetWidth !== defaultWidth[ font ] /* || span.offsetHeight !== defaultHeight[ font ] */){
                detected = true;
                break;  
            };
        };
        PB100[ 'DOM' ][ 'remove' ]( span );
        return detected;
    };

/**================================================================
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/url/data-uri.js
 */
    function testDataURI(){
        if( ua[ 'IE' ] < 9 ){ // ie8 は img 以外をサポートしない...
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
                div = PB100[ 'DOM' ][ 'create' ](
                    body, 'div',
                    {
                        'aria-hidden' : 'true',
                        className     : 'pbFont-testCssReady',
                        id            : 'pbFont-testCssReady'
                    }
                );
                PB100[ 'importCSS' ]( embededWebFonts[ k ] );
                setTimer( testImportedCssReady, true );
            } else if( checkTime( INTERVAL_EMBEDED_WEBFONT ) ){
                delete embededWebFonts[ k ];
                setTimer( testDataUriWebFont, true );
            } else {
                setTimer( testDataUriWebFont );
            };
            return;
        };

        callback( false );
    };

    function testImportedCssReady( isStart ){
        if( isStart ) resetTime();

        if( 1 < div.offsetWidth ){
            PB100[ 'DOM' ][ 'remove' ]( div );
            testInterval = INTERVAL_EMBEDED_WEBFONT;
            setTimer( testWebFont, true );
        } else if( checkTime( testInterval ) ){
            PB100[ 'DOM' ][ 'remove' ]( div );
            callback( false );
        } else {
            setTimer( testImportedCssReady );
        };
    };
};

