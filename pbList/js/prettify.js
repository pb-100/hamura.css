// 対象要素の探索
// 簡易コードハイライト
// image で置換

(function (window, document, undefined) {
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
        if (tempOnload) tempOnload(e);
        tempOnload = null;

        if (onload === main) {
            onload = new Function();
            onload = null;
        };
        main = null;

        webFontTest(
            onWebFontDetectionComplete, 'PB-100',
            {
                'PB-100_canEOT'  : 'base:pbFont/eot.css',
                'PB-100_canTTY'  : 'base:pbFont/tty.css',
                'PB-100_canWOFF' : 'base:pbFont/woff.css',
                'PB-100_canSVG'  : 'base:pbFont/svg.css'
            }, 5000
        );
        webFontTest = null;
    };

    function onWebFontDetectionComplete( _canWebFont ){
        var isW3C = !!document.getElementsByTagName,
            elms  = copyArray(isW3C ? document.all || // ie5.5用
                document.getElementsByTagName('*') : document.all),
            body  = document.body,
            style = body.style,
            pngName = ua[ 'IE' ] < 9 ? 'x3mask_ie.png' : 'x3mask.png',
            //isIElte6 = jscript && ( ( jscript <= 5.7 && !window.XMLHttpRequest ) || document.documentMode < 7 ),
            i = -1, pngName, elm, cn;
        
        canWebFont = _canWebFont;

        if( canWebFont ){
            canLig =
                style['webkitFontFeatureSettings'] !== undefined ||
                style['mozFontFeatureSettings'] !== undefined ||
                style['msFontFeatureSettings'] !== undefined ||
                style['oFontFeatureSettings'] !== undefined ||
                style['fontFeatureSettings'] !== undefined;
        } else {
            PB100[ 'DOM' ][ 'className' ]( body, 'pbList-noWebFont', '+' );

            PB100[ 'addCSS' ]([
                '.pbList font', 'background-image:url(base:pbFont/' + pngName + ')'//,
                //'.pbFont font', 'background-image:url(base:pbFont/' + pngName + ')'
            ]);
        };

        // .pbList
        for (; elm = elms[++i];) {
            cn = ' ' + elm.className + ' ';
            if (cn.indexOf(' pbList ') !== -1) {
                start(elm);
            } else if (cn.indexOf(' pbFont ') !== -1 && elm.tagName.toUpperCase() === 'CODE') {
                start(elm, true);
            }; // TODO リガチャの置換はもっと広範.
        };
        //Detector = null;

        while (TASKS.length) start(TASKS.shift());
    };

    /**================================================================
     *  start
     *
     */
    function start(elm, ligaOnly) {
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
                if( ligaOnly ){
                    elm.data = txt;
                } else {
                    prettify(chrReferanceTo(txt.split('\r').join('')), elm);
                };
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

        var html = [], pos, coloringMap, i, chr, chrCode, color, inQuot, elm, className;

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
            color = MARK_ALL.indexOf( color ) + 1;
            color = COLORS[ color ];
            
            if( !canWebFont ){
                chrCode   = CHAR_TABLE.indexOf( chr );
                chrCode   = chrCode === -1 ? '' : CHAR_TABLE.indexOf( chr ).toString( 16 ).toUpperCase();
                chrCode   = chrCode.length === 1 ? '0' + chrCode : chrCode;
                chrCode   = chrCode ? 'pbChr' + chrCode : '';
                className = 
                    chr === ' ' || !chrCode ?
                        '' :
                    color ?
                        ' class="pbList-' + color + ( chrCode ? ' ' + chrCode : '' ) + '"' :
                        ' class="' + chrCode + '"';
            } else {
                if( canLig && originalCode.substr( i, 2 ) === CHAR_FPN_LE_LIGA ){
                    chr = CHAR_FPN_LE_LIGA;
                    ++i;
                };
                className = color && chr !== ' ' ? ' class="pbList-' + color + '"' : '';
            };

            if( chr !== '\n' ){
                // elm = createCodeBlock(elmParent, originalCode.charAt(i)/* originalCode.substring( start, i ) */, COLORS[id], elmNext);
                html[ html.length ] = '<font' + className + '>' + chr + '</font>'; // 全ての文字を font タグで分ける
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

    PB100['prettify'] = start;
})(window, document);

