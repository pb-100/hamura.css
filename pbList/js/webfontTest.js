/**
 * 1. @font-face のチェック
 * 2. 計測してチェック 5000ms
 * 3. Data URI の可否をチェック
 * 4. Data URI の WebFont を計測してチェック 500ms
 * 5. Data URI で WebFont を埋め込んだ css の読み込み -> 計測してチェック 5000ms
 * 
 * [1 Test @font-face      n]
 *   |              |      |
 * [2 Test WebFont] |      |
 *   |              |      |
 *   | [4 Test DataURI]n-+ |
 *   |              |    | |
 *   | [8 Test CSSFont]  | |
 *   |              |    | |
 *   v              v    | |
 *   Can use WebFont.    v v
 *           Image fallback.
 */

function webFontTest( callback, targetWebFontName, embededWebFonts, testInterval ){
    var INTERVAL = 5000,
        INTERVAL_EMBEDED_WEBFONT = 100;

    var setTimer = PB100[ 'Timer' ][ 'set' ],
        startTime, canDataUri,
        body = document.body,
        head = document.getElementsByTagName('head')[0],
        link, span, div, baseFonts, defaultWidth, defaultHeight;

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
 *   https://github.com/PikadudeNo1/Modernizr/blob/master/feature-detects/css/fontface.js
 *   http://www.webapps-online.com/online-tools/user-agent-strings/dv/browser135552/nokia-browser
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
    // http://etc9.hatenablog.com/entry/20110927/1317140891
        var blacklist = ua[ 'MeeGo' ] || ua[ 'AOSP' ] < 2.2 || ua[ 'WebOS' ] || ua[ 'UCWEB' ] || ua[ 'WinPhone' ] < 8,
            wrap, style, sheet, v, cssText, result;
    
        if( blacklist ){
            return false;
        } else if( ua[ 'IE' ] < 6 ){
            return true;
        } else {
            // <style>@font-face {font-family:"font";src:url("https://")}
            // http://d.hatena.ne.jp/miya2000/20070327/p0
            //wrap = document.createElement('div');
            // 最初に style でないノードが無いと style が生成されない
            //wrap.innerHTML = 'a<style type="text\/css">@font-face {font-family:"font";src:url("https://")}<\/style>';
           // head.appendChild(style = wrap.lastChild);
            style   = PB100[ 'DOM' ][ 'create' ](
                head, 'style', 0, 0, '@font-face{font-family:"font";src:url("https://")}'
            );
            sheet   = style.sheet || style.styleSheet;
            cssText = sheet ? ((v = sheet.cssRules) && (v = v[0]) ? v.cssText : sheet.cssText || '') : '';
            // console.log(cssText);
            result  = 0 < cssText.indexOf('src') && cssText.indexOf('@font-face') === 0;
            // head.removeChild(style);
            PB100[ 'DOM' ][ 'remove' ]( style );
            return result;
        };
    };

/**
 * https://github.com/bramstein/fontfaceobserver/blob/master/src/observer.js
 */
    function testByNativeFontLoaderAPI(){
        if( check() ){
            setTimer( callback, true );
        } else {
            document[ 'fonts' ].load( '1.6em "' + targetWebFontName + '"' ).then(
                function(){
                    callback( check() );
                },
                //function(){
                    testDataURI//();
                //}
            );
        };

        function check(){
            return document[ 'fonts' ][ 'check' ]( '1.6em "' + targetWebFontName + '"', 'i' );
        };
    };

    function resetTime(){
        return startTime = new Date - 0;
    };
    
    function checkTime( ms ){
        // 
        if( document.hidden || document[ 'msHidden' ] || document[ 'mozHidden' ] || document[ 'webkitHidden' ] ) return false;
        return ms < new Date - startTime;
    };
    
    function testWebFont( isStart ){
        if( isStart ) resetTime();

        if( mesureWebFont( targetWebFontName ) ){
            callback( true );
        } else if( checkTime( testInterval ) ){
            if( canDataUri ){
                //head.removeChild( link );
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
        baseFonts = [/*'monospace',*/ 'sans-serif', 'serif']; // monospace は Chrome で具合が悪い
    
        //we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
        var testString = "mmmmmmmmmmlli";
    
        //we test using 72px font size, we may use any size. I guess larger the better.
        var testSize = '72px';
    
        // create a SPAN in the document to get the width of the text we use to test
        // span = document.createElement("span");
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
                fontSize   : testSize
            },
            testString
        );
        defaultWidth  = {};
        //defaultHeight = {};
        
    
        //body.appendChild( span );
        //span.setAttribute( 'aria-hidden', 'true' );
        // span.style.cssTest = 'position:absolute;top:0:left:0;visibility:hidden;font-size:' + testSize;
        //span.innerHTML     = testString;
    
        while( font = baseFonts[ ++i ] ) {
            //get the default width for the three base fonts
            // span.style.fontFamily = font;
            PB100[ 'DOM' ][ 'css' ]( span, { fontFamily : font } );
            defaultWidth[ i ] = span.offsetWidth; //width for the default font
            //defaultHeight[ i ] = span.offsetHeight; //height for the defualt font
        };
    };

    function mesureWebFont( testFontName ){
        var detected, i = -1, font;

        preMesure && preMesure();
        preMesure = null;

        // body.appendChild( span );
        PB100[ 'DOM' ][ 'add' ]( body, span );
        while( font = baseFonts[ ++i ] ) {
            // span.style.fontFamily = testFontName + ',' + font; // name of the font along with the base font for fallback.
            PB100[ 'DOM' ][ 'css' ]( span, { fontFamily : testFontName + ',' + font } );
            if( span.offsetWidth !== defaultWidth[ i ] /* || span.offsetHeight !== defaultHeight[ i ] */){
                detected = true;
                break;  
            };
        };
        // body.removeChild( span );
        PB100[ 'DOM' ][ 'remove' ]( span );
        return detected;
    };

/**================================================================
 * https://github.com/PikadudeNo1/Modernizr/blob/master/feature-detects/url/data-uri.js
 */
    function testDataURI(){
        if( ua[ 'IE' ] < 9 ){ // ie8 は img 以外をサポートしない...
            testDataUriComplete( false );
        } else {
            var datauri = new Image();
            
            datauri.onerror = testDataUriComplete;

            datauri.onload = function(){
                if (datauri.width == 1 && datauri.height == 1) {
                    canDataUri = true;
                };
                testDataUriComplete();
            };
        
            datauri.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        };
    };

    function testDataUriComplete( result ){
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
                /*
                div = document.createElement("div");
                body.appendChild( div );
                div.setAttribute( 'aria-hidden', 'true' );
                div.className = div.id = 'pbFont-testCssReady'; */
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
            //body.removeChild( div );
            PB100[ 'DOM' ][ 'remove' ]( div );
            testInterval = INTERVAL_EMBEDED_WEBFONT;
            setTimer( testWebFont, true );
        } else if( checkTime( testInterval ) ){
            //body.removeChild( div );
            PB100[ 'DOM' ][ 'remove' ]( div );
            callback( false );
        } else {
            setTimer( testImportedCssReady );
        };
    };
};

