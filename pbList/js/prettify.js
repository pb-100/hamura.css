// 対象要素の探索
// 簡易コードハイライト
// image で置換

(function (window, document, ua, undefined) {
    "use strict";
    var String_fromCharCode = String.fromCharCode;

    var CHAR_TABLE       = PB100[ 'CHAR_TABLE' ],
        CHAR_QUOT        = CHAR_TABLE[7],
        CHAR_FPN_LE      = CHAR_TABLE[30],
        CHAR_YEN         = CHAR_TABLE[113],
        CHAR_FPN_LE_LIGA = String_fromCharCode( 8337 ) + String_fromCharCode( 8331 ),
        CHAR_NBSP        = String_fromCharCode( 160 ),
        CHAR_ENSP        = String_fromCharCode( 8194 ),

        COMMANDS   = ('RESTORE#,WRITE#,NEW#,LIST#,SAVE#,LOAD#,READ#,' +
            'RETURN,RESTORE,CLEAR,INPUT,PRINT,GOSUB,THEN,STOP,STEP,NEXT,DATA,READ,BEEP,DEFM,MODE,GOTO,' +
            'CSR,VAC,VER,END,LET,REM,FOR,PUT,GET,SET,ON,IF,TO').split(','),

        FUNCTIONS  = 'KEY$,KEY,LEN(,MID$(,MID(,VAL,STR(,FRAC,RND(,RAN#,DEG(,DMS(,SIN,COS,TAN,ASN,ACS,ATN,LOG,EXP,SQR,ABS,SGN,INT,LN'.split(','),

        SYMBOLES   = ( ':;,"+-*/↑=≠<>≧≦' + CHAR_FPN_LE + CHAR_TABLE[31] ).split(''),

        PBFONT_TARGETS = ' CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT',

        tempOnload = window.onload,
        TASKS      = [],
        canWebFont, canLig;

    window.onload = main;

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
                'PB-100_canEOT'  : 'base:pbFont/eot.css', // TODO fileサイズ順
                'PB-100_canTTF'  : 'base:pbFont/ttf.css',
                'PB-100_canWOFF' : 'base:pbFont/woff.css',
                'PB-100_canSVG'  : 'base:pbFont/svg.css'
            }, 5000
        );
        webFontTest = null;
    };

    function onWebFontDetectionComplete( _canWebFont ){
        // TODO 画像が使えるか？判定
        var elms  = copyArray( document.all || document.getElementsByTagName('*') ),
            body  = document.body,
            style = body.style,
            png   = ua[ 'IE' ] < 9 ? 'x3mask_ie.png' : 'x3mask.png',
            i = -1, elm, w;
        
        canWebFont = _canWebFont;

        if( canWebFont ){
            if(
                style['webkitFontFeatureSettings'] !== undefined ||
                style['mozFontFeatureSettings'] !== undefined ||
                style['msFontFeatureSettings'] !== undefined ||
                style['oFontFeatureSettings'] !== undefined ||
                style['fontFeatureSettings'] !== undefined
            ){
                elm = PB100[ 'DOM' ][ 'create' ](
                    body, 'code',
                    {
                        'className'   : 'pbFont',
                        'aria-hidden' : 'true'
                    },
                    {
                        position      : 'absolute',
                        top           : 0,
                        left          : 0,
                        visibility    : 'hidden',
                        display       : 'inline',
                        fontSize      : '72px'
                    },
                    'i'
                );
                w = elm.offsetWidth;
                elm.innerHTML = CHAR_FPN_LE_LIGA;
                canLig = w === elm.offsetWidth;
                PB100[ 'DOM' ][ 'remove' ]( elm );
            };
        } else {
            PB100[ 'DOM' ][ 'className' ]( body, 'pbList-noWebFont', '+' );

            PB100[ 'addCSS' ]([
                '.pbList font', 'background-image:url(base:pbFont/' + png + ')'
            ]);
        };

        // .pbList, .pbFont
        for( ; elm = elms[ ++i ]; ){
            if( PB100[ 'DOM' ][ 'className' ]( elm, 'pbList', '?' ) ){
                start( elm );
            } else if( PB100[ 'DOM' ][ 'className' ]( elm, 'pbFont', '?' ) && 0 < PBFONT_TARGETS.indexOf( elm.tagName.toUpperCase() ) ){
                start( elm, true );
            }; // TODO リガチャの置換はもっと広範.
        };

        while ( TASKS.length ) start( TASKS.shift() );
    };

/**================================================================
 * start
 *  
 */ function start( elm, ligaOnly ){
        var i, elms = [], txt;

        if( main ){ // before onload
            TASKS.push( elm );
        } else {
            i = TASKS.indexOf( elm );
            0 <= i && TASKS.splice( i, 1 );

            collectTextNode( elm );

            while( elm = elms.shift() ){
                txt = elm.data;
                if( !canLig ){
                    txt = txt.split( CHAR_FPN_LE_LIGA ).join( CHAR_FPN_LE );
                };
                if( ligaOnly ){
                    elm.data = txt;
                } else {
                    prettify( chrReferanceTo( txt.split( '\r' ).join( '' ) ), elm );
                };
            };
        };

        // textnode を探す.
        function collectTextNode( elm ){
            var kids = elm.childNodes,
                i = -1, kid;

            for( ; kid = kids[ ++i ]; ){
                switch( kid.nodeType ){
                    case 1:
                        collectTextNode( kid );
                        break;
                    case 3:
                        kid.data && cleanup( kid.data ) && elms.push( kid ); // skip if white space string.
                        break;
                };
            };
        };

        function cleanup( text ){
            var _ = '';

            return text // .split( String_fromCharCode(13) + String_fromCharCode(10) ).join( _ )
                .split( '\r' ).join( _ )
                .split( '\n' ).join( _ )
                .split( '\t' ).join( _ )
                .split( '\f' ).join( _ )
                .split( '\b' ).join( _ )
                .split( ' ' ).join( _ );
        };
    };

/**================================================================
 *  prettify
 */
    function prettify(originalCode, elmTarget) {
        var COLORS        = ['', 'area', 'line', 'str', 'cmd', 'fnc', 'syb'],
            MARK_AREA     = '+',
            MARK_LINE     = '|',
            MARK_STRING   = '~',
            MARK_COMMAND  = '{',
            MARK_FUNCTION = '}',
            MARK_SYMBOLE  = '^',
            MARK_ALL      = MARK_AREA + MARK_LINE + MARK_STRING + MARK_COMMAND + MARK_FUNCTION + MARK_SYMBOLE;

        var html = [], coloringMap, i, l, chr, chrCode, isSP, color, inQuot, elm, className;

        if( isProgramArea( originalCode ) ){
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

        //elmParent.title=coloringMap; // debug

        for( i = 0, l = originalCode.length; i < l; ++i ){
            chr   = originalCode.charAt(i);
            isSP  = chr === ' ' || chr === CHAR_ENSP,
            color = coloringMap.charAt(i);
            color = MARK_ALL.indexOf( color ) + 1;
            color = COLORS[ color ];
            
            if( ua[ 'IE' ] < 8 && isSP ){
                chr = i === i - 1 ? CHAR_NBSP : CHAR_ENSP;
            };

            if( canWebFont ){
                if( canLig && originalCode.substr( i, 2 ) === CHAR_FPN_LE_LIGA ){
                    chr = CHAR_FPN_LE_LIGA;
                    ++i;
                };
                className =
                    isSP && color === 'str' ?
                        ' class="pbList-strsp"' :
                    !isSP && color ?
                        ' class="pbList-' + color + '"' : '';
            } else {
                chrCode   = CHAR_TABLE.indexOf( chr );
                chrCode   = chrCode === -1 ? '' : CHAR_TABLE.indexOf( chr ).toString( 16 ).toUpperCase();
                chrCode   = chrCode.length === 1 ? '0' + chrCode : chrCode;
                chrCode   = chrCode ? 'pbChr' + chrCode : '';
                className =
                    isSP && color === 'str' ?
                        ' class="pbList-strsp"' :
                    isSP || !chrCode ?
                        '' :
                    color ?
                        ' class="pbList-' + color + ( chrCode ? ' ' + chrCode : '' ) + '"' :
                        ' class="' + chrCode + '"';
            };

            if( chr !== '\n' ){
                html[ html.length ] = '<font' + className + '>' + chr + '</font>'; // 全ての文字を font タグで分ける
            } else {
                html[ html.length ] = '\n';
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
    function chrReferanceTo(str) {
        // .split( '' ); で &#8331 が消える ie9-
        // basicString = basicString.split( '' );
        return str
            .split('&yen;').join(CHAR_YEN)
            .split('&lt;').join('<')
            .split('&gt;').join('>')
            .split('&quot;').join(CHAR_QUOT)
            .split('&amp;').join('&');
    };
    /* function toChrReferance(text) {
        return text
            .split("&").join("&amp;")
            .split("<").join("&lt;")
            .split(">").join("&gt;")
            .split(CHAR_QUOT).join("&quot;")
            .split(CHAR_YEN).join('&yen;');
    }; */
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

    function isProgramArea( line ) {
        var n = line.indexOf( 'P' );

        if( n === -1 ) return false;

        n = parseFloat( line.charAt( n + 1 ) );
        return 0 <= n && n <= 9;
    };

    PB100['prettify'] = start;
})(window, document, ua);

