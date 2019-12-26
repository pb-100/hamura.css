// 対象要素の探索
// 簡易コードハイライト
// image で置換
"use strict";
var CHAR_QUOT        = CHAR_TABLE[7],
    CHAR_FPN_LE      = CHAR_TABLE[30],
    CHAR_YEN         = CHAR_TABLE[113],
    CHAR_FPN_LE_LIGA = g_strFromCharCode( 8337 ) + g_strFromCharCode( 8331 ),
    CHAR_NBSP        = g_strFromCharCode( 160  ),
    CHAR_ENSP        = g_strFromCharCode( 8194 ),
    COMMANDS         = ('RESTORE#,WRITE#,NEW#,LIST#,SAVE#,LOAD#,READ#,' +
                        'RETURN,RESTORE,CLEAR,INPUT,PRINT,GOSUB,THEN,STOP,STEP,NEXT,DATA,READ,BEEP,DEFM,MODE,GOTO,' +
                        'CSR,VAC,VER,END,LET,REM,FOR,PUT,GET,SET,ON,IF,TO').split(','),
    FUNCTIONS        = 'KEY$,KEY,LEN(,MID$(,MID(,VAL,STR(,FRAC,RND(,RAN#,DEG(,DMS(,SIN,COS,TAN,ASN,ACS,ATN,LOG,EXP,SQR,ABS,SGN,INT,LN'.split(','),
    SYMBOLES         = ( ':;,"+-*/↑=≠<>≧≦' + CHAR_FPN_LE + CHAR_TABLE[31] ).split(''),
    PBFONT_TARGETS   = ' CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT',
    TASKS_ELM        = [],
    TASKS_FLAG       = [],
    canWebFont, canLig, loaded;

g_loadEventCallbacks.push(
    function(){
        var elms = DOM_getAllElements(),
            i = -1, elm;
        // .pbList, .pbFont
        for( ; elm = elms[ ++i ]; ){
            if( DOM_hasClassName( elm, 'pbList' ) ){
                register( elm );
            } else if( DOM_hasClassName( elm, 'pbFont' ) && 0 < PBFONT_TARGETS.indexOf( DOM_getTagName( elm ) ) ){
                register( elm, true );
            }; // TODO リガチャの置換はもっと広範.
        };

        if( TASKS_ELM.length ){
            webFontTestStart();
        };
        loaded = true;
    }
);

function webFontTestStart(){
    webFontTestStart = null;

    webFontTest(
        onWebFontDetectionComplete, 'PB-100',
        {
            'PB-100_canTTF'  : 'base:pbFont/ttf.css', // fileサイズ順
            'PB-100_canWOFF' : 'base:pbFont/woff.css',
            'PB-100_canEOT'  : 'base:pbFont/eot.css',
            'PB-100_canSVG'  : 'base:pbFont/svg.css'
        }, 5000
    );
}

function onWebFontDetectionComplete( _canWebFont ){
    // TODO 画像が使えるか？判定
    var style = g_body.style,
        png   = g_Trident < 9 ? 'x3mask_ie.png' : 'x3mask.png',
        elm, w;
    
    canWebFont = _canWebFont;

    if( canWebFont ){
        if(
            style['webkitFontFeatureSettings'] !== undefined ||
            style['mozFontFeatureSettings'] !== undefined ||
            style['msFontFeatureSettings'] !== undefined ||
            style['oFontFeatureSettings'] !== undefined ||
            style['fontFeatureSettings'] !== undefined
        ){
            elm = DOM_createThenAdd(
                g_body, 'code',
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
            DOM_remove( elm );
        };
    } else {
        DOM_addClassName( g_body, 'pbList-noWebFont' );

        CSSOM_add([
            '.pbList font', 'background-image:url(base:pbFont/' + png + ')'
        ]);
        CSSOM_addMediaQuery(
            '(prefers-color-scheme:dark)',
            '.pbList font{background-image:url(base:pbFont/x3mask_dark.png)}'
        );
    };

    onWebFontDetectionComplete = webFontTest = null;
    while ( TASKS_ELM.length ) register( TASKS_ELM.shift(), TASKS_FLAG.shift() );
};

/**================================================================
 * register
 */
function register( elm, ligaOnly ){
    var i, elms = [], txt;

    if( onWebFontDetectionComplete ){ // before onload
        if( TASKS_ELM.indexOf( elm ) === -1 ){
            TASKS_ELM.push( elm );
            TASKS_FLAG.push( ligaOnly );
            if( loaded && webFontTestStart ){
                webFontTestStart();
            };
        };
    } else {
        i = TASKS_ELM.indexOf( elm );
        0 <= i && TASKS_ELM.splice( i, 1 ) && TASKS_FLAG.splice( i, 1 );

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

        return text // .split( g_strFromCharCode(13) + g_strFromCharCode(10) ).join( _ )
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

    var html = [], coloringMap, i, l, chr, isNBSP, chrCode, isSP, color, inQuot, elm, className, kid;

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
        isNBSP = chr === CHAR_NBSP,
        isSP  = chr === ' ', // || chr === CHAR_NBSP,
        chr   = isNBSP ? ' ' : chr;
        color = coloringMap.charAt(i);
        color = MARK_ALL.indexOf( color ) + 1;
        color = COLORS[ color ];

        if( chr !== '\n' ){
            if( canWebFont ){
                if( g_Trident < 8 && isSP ){
                    chr = i === l - 1 ? CHAR_NBSP : CHAR_ENSP;
                };

                if( canLig && originalCode.substr( i, 2 ) === CHAR_FPN_LE_LIGA ){
                    chr = CHAR_FPN_LE_LIGA;
                    ++i;
                };
                className =
                    isSP && color === 'str' ?
                        ' class="pbList-strsp"' :
                    isNBSP ? '' :
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
            html.push( '<font' + className + '>' + chr + '</font>' ); // 全ての文字を font タグで分ける
        } else {
            html.push( '\n' );
        };
    };

    html = html.join( '' );
    if( elmTarget.nodeType === 1 ){
        elmTarget.innerHTML = html;
    } else {
        elm = DOM_justCreate( 'font', html );
        while( kid = elm.firstChild ){
            DOM_insertBefore( kid, elmTarget );
        };
        DOM_remove( elmTarget );
    };

// utils
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
};

PB100['prettify'] = register;