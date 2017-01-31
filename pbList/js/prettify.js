// 対象要素の探索
// 簡易コードハイライト
// image で置換

(function (window, document, undef) {
    "use strict";
    var

        CHAR_TABLE = [
            ' ', '+', '-', '*', '/', '↑', '!', '"', '#', '$', '>', '≧', '=', '≦', '<', '≠',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', String_fromCharCode(960),
            ')', '(', String_fromCharCode(234), String_fromCharCode(8337),
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '', '', '', '', '', '',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '', '', '?', ',', ';', ':',
            '○', 'Σ', '°', '△', '@', '×', '÷',
            String_fromCharCode(9824), '←', String_fromCharCode(9829), String_fromCharCode(9830), String_fromCharCode(9827), String_fromCharCode(956),
            'Ω', '↓', '→',
            '%', String_fromCharCode(165),
            '□', '[', '&', '_', "'", '･', ']', '■', '\\', String_fromCharCode(9619)
        ],
        CHAR_QUOT = CHAR_TABLE[7],
        CHAR_FPN_LE = CHAR_TABLE[30],
        CHAR_YEN = CHAR_TABLE[113],
        CHAR_FPN_LE_LIGA = String_fromCharCode(8337) + String_fromCharCode(8331),

        COMMANDS = ('RESTORE#,WRITE#,NEW#,LIST#,SAVE#,LOAD#,READ#,' +
            'RETURN,RESTORE,CLEAR,INPUT,PRINT,GOSUB,THEN,STOP,STEP,NEXT,DATA,READ,BEEP,DEFM,MODE,GOTO,' +
            'CSR,VAC,VER,END,LET,REM,FOR,PUT,GET,SET,ON,IF,TO').split(','),

        FUNCTIONS = 'KEY$,KEY,LEN(,MID$(,MID(,VAL,STR(,FRAC,RND(,RAN#,DEG(,DMS(,SIN,COS,TAN,ASN,ACS,ATN,LOG,EXP,SQR,ABS,SGN,INT,LN'.split(','),

        SYMBOLES = (':;,"+-*/↑=≠<>≧≦' + CHAR_FPN_LE + CHAR_TABLE[31]).split(''),

        tempOnload = window.onload,
        TASKS = [],
        canWebFont, canLig;

    window.onload = main;

    function String_fromCharCode(code) {
        return String.fromCharCode(code);
    };

    function chrReferanceTo(str) {
        // .split( '' ); で &#8331 が消える ie9-
        // basicString = basicString.split( '' );
        return str//.split( CHAR_FPN_LE_LIGA ).join( CHAR_FPN_LE );
            .split('&yen;').join(CHAR_YEN)
            .split('&lt;').join('<')
            .split('&gt;').join('>')
            .split('&quot;').join(CHAR_QUOT)
            .split('&amp;').join('&');
    };
    function toChrReferance(text) {
        return text
            .split("&").join("&amp;")
            .split("<").join("&lt;")
            .split(">").join("&gt;")
            .split(CHAR_QUOT).join("&quot;")
            .split(CHAR_YEN).join('&yen;');
        //.split( CHAR_FPN_LE ).join( CHAR_FPN_LE_LIGA );
    };
    /* http://d.hatena.ne.jp/hir90/20080620/1213987444 */
    function repeatString(str, num) {
        var res = '';

        while (num) {
            if (num & 1) res += str;
            num = num >> 1;
            str += str;
        };
        return res;
    };

    function copyArray( elms ) {
        var ret = [], i = elms.length;
        //ret.push.apply(ret, ary);
        while( i ) ret[ --i ] = elms[ i ];
        return ret;
    };

    function main(e) {
        var isW3C = !!document.getElementsByTagName,
            elms = copyArray(isW3C ? document.all || // ie5.5用
                document.getElementsByTagName('*') : document.all),
            body = document.body,
            jscript = eval('/*@cc_on@_jscript_version+@*/0'),
            isIElte8 = jscript && (jscript <= 5.8 || document.documentMode < 9),
            //isIElte6 = jscript && ( ( jscript <= 5.7 && !window.XMLHttpRequest ) || document.documentMode < 7 ),
            i = -1, pngName, elm, cn;

        if (tempOnload) tempOnload(e);
        tempOnload = null;

        if (onload === main) {
            onload = new Function();
            onload = null;
        };
        main = null;

        if (canWebFont = Modernizr_CanWebFont()) {//Detector( body )( 'PB-100' ) ){
            canLig =
                body['-webkit-font-feature-settings'] !== undef ||
                body['-moz-font-feature-settings'] !== undef ||
                body['-ms-font-feature-settings'] !== undef ||
                body['-o-font-feature-settings'] !== undef ||
                body['font-feature-settings'] !== undef;
        } else {
            body.className += (body.className ? ' ' : '') + ' pbList-noWebFont';
            pngName = isIElte8 ? 'x3wie.png' : 'x3w.png';

            window[ 'PB100' ].addCSS([
                '.pbList b', 'background-image:url(base:pbList/' + pngName + ')',
                '.pbFont b', 'background-image:url(base:pbList/' + pngName + ')'
            ]);
        };

        Modernizr_CanWebFont = null;

        if (!canWebFont) return;

        // .pbList
        for (; elm = elms[++i];) {
            cn = ' ' + elm.className + ' ';
            if (cn.indexOf(' pbList ') !== -1) {
                start(elm);
            } else
                if (cn.indexOf(' pbFont ') !== -1 && elm.tagName.toUpperCase() === 'CODE') {
                    start(elm);
                }; // TODO リガチャの置換はもっと広範.
        };
        //Detector = null;

        while (TASKS.length) start(TASKS.shift());
    };

    /**
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
    /* onload イベントが webfont 取得前に発生することで判定に失敗する...
    function Detector( body ){
        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.
        var baseFonts = ['monospace', 'sans-serif', 'serif'];
    
        //we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
        var testString = "mmmmmmmmmmlli";
    
        //we test using 72px font size, we may use any size. I guess larger the better.
        var testSize = '72px';
    
        // create a SPAN in the document to get the width of the text we use to test
        var s = document.createElement("span");
    
        var defaultWidth = {};
        var defaultHeight = {};
        var i = -1, font;
    
        body.appendChild(s);
        s.style.fontSize = testSize;
        s.innerHTML      = testString;
    
        for ( ; font = baseFonts[ ++i ]; ) {
            //get the default width for the three base fonts
            s.style.fontFamily = font;
            defaultWidth[ i ]  = s.offsetWidth; //width for the default font
            defaultHeight[ i ] = s.offsetHeight; //height for the defualt font
        };
        body.removeChild(s);
    
        function detect( testFontName ) {
            var detected = false;
            var i = -1, font;
    
            body.appendChild(s);
            for ( ; font = baseFonts[ ++i ]; ) {
                s.style.fontFamily = testFontName + ',' + font; // name of the font along with the base font for fallback.
                if(s.offsetWidth !== defaultWidth[ i ] || s.offsetHeight !== defaultHeight[ i ]){
                    detected = true;  
                };
            };
            body.removeChild(s);
            return detected;
        };
    
        return detect;
    }; */

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
     * 
     *  img.onload = img.onerror = 'webfont';
     *  -> 測定
     */
    function Modernizr_CanWebFont() {
// http://etc9.hatenablog.com/entry/20110927/1317140891
var ie = (function(){
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : undef;
}());
if( ie ===5 && (0).toFixed ) ie = 5.5;

        var jsVer = ie, // eval('/*@cc_on@_jscript_version+@*/0'),
            blacklist = (function (navigator) {
            var ua = navigator.userAgent,
                sys = navigator.platform,
                av = navigator.appVersion,

                nokia = 0 < ua.indexOf('NokiaBrowser/'),

                // Android 2.1
                aosp2 = (function (v) {
                    if (window.opera || (0 < ua.indexOf('Gecko\/') && (v = ua.split('rv:')[1]))) {

                    } else if ((ua.indexOf('Linux') + 1) || (ua.indexOf('Android') + 1)) {
                        if ((v = ua.split('Android ')[1]) ||
                            (v = sys.split('Android ')[1])) { // PCモードの Android Firefox では platform に Android 0.0.0 が存在
                            v = v.split('.');
                            v = parseFloat(v[0]) || 0;
                        } else
                            if ((sys === 'Linux armv7l' || sys === 'Linux i686') &&
                                window.ontouchstart !== undef &&
                                (v = parseFloat(ua.split('WebKit\/')[1]))) {
                                // https://ja.wikipedia.org/wiki/WebKit
                                // http://www.au.kddi.com/developer/android/kishu/ua/

                                if (!window['Int8Array']) {
                                    v =
                                        v < 529 ? 1.5 : // <= 528.5
                                            v < 531 ? 2.0 : // 530 2.0~2.1
                                                // 533 2.2~2.3
                                                v < 534 ? (window.HTMLAudioElement ? 2.3 : 2.2) : 0;
                                };
                            };
                        return v && v <= 2.1;
                    };
                })(),

                webos = window["palmGetResource"],

                // Android 4 - UCBrowser
                ucb = 0 < ua.indexOf('UCBrowser/'),

                // Windows Phone 7 - IE9
                wp = 0 < ua.indexOf('Windows Phone') || 0 < av.indexOf('ZuneWP'),// ZuneWP はデスクトップモードで登場する
                wppre8 = wp && 5.7 <= jsVer && jsVer < 10;

            return nokia || aosp2 || webos || ucb || wppre8;
        })(navigator),
            wrap, style, sheet, v, cssText;

        if (blacklist) {
            return false;
        } else {
            // jsVer && (document.title = jsVer)
            if( jsVer && jsVer <= 5.5 ){
                // Multiple IE 5.5 が 5.6 を返す... 6 -> 2.6, 7 -> 5.7,
                return true;
            }
            // <style>@font-face {font-family:"font";src:url("https://")}
            // http://d.hatena.ne.jp/miya2000/20070327/p0
            wrap = document.createElement('div');
            // 最初に style でないノードが無いと style が生成されない
            wrap.innerHTML = 'a<style type="text\/css">@font-face {font-family:"font";src:url("https://")}<\/style>';
            document.getElementsByTagName('head')[0].appendChild(style = wrap.lastChild);


            sheet = style.sheet || style.styleSheet;
            cssText = sheet ? ((v = sheet.cssRules) && (v = v[0]) ? v.cssText : sheet.cssText || '') : '';
            // console.log(cssText);
            return 0 < cssText.indexOf('src') && cssText.indexOf('@font-face') === 0;
        };
    };

    /**================================================================
     *  start
     *
     */
    function start(elm) {
        var i, div, elms = [], txt;

        // if onload 前
        if (main) {
            TASKS.push(elm);
        } else {
            if (i = TASKS.indexOf(elm)) {
                0 <= i && TASKS.splice(i, 1);
            };

            // no webfont の場合、pre タグを div に置換
            /*
            if( !canWebFont && elm.tagName.toUpperCase() === 'PRE' ){
                div = document.createElement( 'div' );
                elm.parentNode.insertBefore( div, elm );
                div.appendChild( elm.firstChild );
                div.className = elm.className;
                elm.parentNode.removeChild( elm );
                elm = div;
            }; */

            findTextNode(elm);

            while (elm = elms.shift()) {
                txt = elm.data;
                if (!canLig) {
                    txt = txt.split(CHAR_FPN_LE_LIGA).join(CHAR_FPN_LE);
                };
                prettify(chrReferanceTo(txt.split('\r').join('')), elm);
                //elm.parentNode.removeChild(elm);
            };
        };

        function cleanup(text) {
            var _ = '';

            // if( text == null || text === '' ) return '';

            return text.split(String_fromCharCode(13)+String_fromCharCode(10)).join(_)
                .split('\r').join(_)
                .split('\n').join(_)
                .split('\t').join(_)
                .split('\f').join(_)
                .split('\b').join(_)
                .split(' ').join(_);
        };

        // textnode を探す.
        function findTextNode(elm) {
            var kids = elm.childNodes,
                i = -1, kid;

            for (; kid = kids[++i];) {
                switch (kid.nodeType) {
                    case 1: findTextNode(kid);
                        break;
                    case 3: kid.data && cleanup(kid.data) && elms.push(kid);
                        break;
                };
            };
        };
    };

    /**================================================================
     *  prettify
     *
     */
    function prettify(originalCode, elmTarget) {
        var COLORS = ['', 'area', 'line', 'str', 'cmd', 'fnc', 'syb'],
            MARK_AREA = '+',
            MARK_LINE = '|',
            MARK_STRING = '~',
            MARK_COMMAND = '{',
            MARK_FUNCTION = '}',
            MARK_SYMBOLE = '^',
            MARK_ALL = MARK_AREA + MARK_LINE + MARK_STRING + MARK_COMMAND + MARK_FUNCTION + MARK_SYMBOLE;

        var html = [], pos, isArea, coloringMap, i, chr, color, inQuot, id, elm, className;

        pos = originalCode.indexOf( 'P' );

        if( pos !== -1 && isProgramArea( originalCode.substr( pos ) ) ){
            coloringMap = repeatString( MARK_AREA, originalCode.length );
        } else {
            if (i = getCommandStartIndex(originalCode)) {
                coloringMap = repeatString(MARK_LINE, i);
                --i
            } else {
                coloringMap = '';
                i = -1;
            };

            while (chr = originalCode.charAt(++i)) {
                if (chr === CHAR_QUOT || inQuot) {
                    coloringMap += MARK_STRING;
                    if (chr === CHAR_QUOT) inQuot = !inQuot;
                } else {
                    coloringMap += chr;
                };
            };

            coloringMap = marking(coloringMap, SYMBOLES, MARK_SYMBOLE);
            coloringMap = marking(coloringMap, COMMANDS, MARK_COMMAND);
            coloringMap = marking(coloringMap, FUNCTIONS, MARK_FUNCTION);
        };

        //elmParent.title=coloringMap;

        for (i = 0; i < originalCode.length; ++i) {
            chr   = originalCode.charAt(i);
            color = coloringMap.charAt(i);
            id    = MARK_ALL.indexOf( color ) + 1;

            if ( chr !== '\n') {
                // elm = createCodeBlock(elmParent, originalCode.charAt(i)/* originalCode.substring( start, i ) */, COLORS[id], elmNext);
                className = COLORS[ id ] && chr !== ' ' ? ' class="pbList-' + COLORS[ id ] + '"' : '';
                html[ html.length ] = '<font' + className + '>' + chr + '</font>';
            } else {
                html[ html.length ] = '\n';
                /*
                if (elm) {
                    elm.innerHTML += '\n';
                } else {
                    elmNext ? elmParent.insertBefore(document.createTextNode('\n'), elmNext) : elmParent.appendChild(document.createTextNode('\n'));
                };*/
            };
        };
        if( elmTarget.nodeType === 1 ){
            elmTarget.innerHTML = html.join( '' );
        } else {
            elm = document.createElement('font');
            elm.innerHTML = html.join( '' );
            while( elm.firstChild ){
                elmTarget.parentNode.insertBefore( elm.firstChild, elmTarget );
            };
            elmTarget.parentNode.removeChild( elmTarget );
        };
    };

    /**================================================================
     *  utils
     */
    function createCodeBlock(elmParent, code, color, elmNext) {
        var i = -1, elm, chr, hex;

        if (canWebFont) {
            elm = document.createElement('font');
            elmNext ? elmParent.insertBefore(elm, elmNext) : elmParent.appendChild(elm);
            color && (elm.style.color = color);
            elm.innerHTML = toChrReferance(code).split(' ').join('&nbsp;');
            //elm.title = code;
            return elm;
        } else {
            /*
            while( chr = code.charAt( ++i ) ){
                elm = document.createElement( 'b' );
                elmNext ? elmParent.insertBefore( elm, elmNext ) : elmParent.appendChild( elm );
                elm.innerHTML = toChrReferance( chr );
    
                hex = '0' + CHAR_TABLE.indexOf( chr ).toString( 16 );
                elm.className = 'pbChr' + hex.substr( hex.length - 2 );
                
                elm.style.background = color;
            }; */
        };
        return elm;
    };

    function marking(text, list, mark) {
        var item, i = -1, p, l;

        while (item = list[++i]) {
            while (0 <= (p = text.indexOf(item))) {
                l = item.length;
                text = text.substr(0, p) + repeatString(mark, l) + text.substr(p + l);
            };
        };
        return text;
    };

    function getCommandStartIndex(line) {
        var tmp = parseFloat(line);

        if (0 < tmp && (tmp === tmp | 0)) {
            tmp += '';
            tmp = line.indexOf(tmp) + tmp.length;
            if (tmp <= line.length) return tmp;
        };
        return 0;
    };

    function isProgramArea(line) {
        var n = parseFloat(line.charAt(1));
        return line.charAt(0) === 'P' && 0 <= n && n <= 9;
    };

    window[ 'PB100' ]['prettify'] = start;
})(window, document);

