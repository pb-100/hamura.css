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
    TASK_LIST        = [],
    pbList_canWebFont, // 0:no, 1:can, 2:can lig
    pbList_fallbackImageUrl = g_assetUrl + 'pbFont/' + ( g_Trident < 9 ? 'x3mask_ie.png' : 'x3mask.png' ),
    pbList_noImageFallback  = g_Presto < 8 && !WEB_DOC_BASE_DEFINE_DEBUG,
    pbList_loaded;

g_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( !cssAvailability || pbList_loaded ) return;

        var elms = DOM_getAllElements(),
            i = -1, elm;

        // .pbList, .pbFont
        for( ; elm = elms[ ++i ]; ){
            if( DOM_hasClassName( elm, 'pbList' ) ){
                prettifyElement( elm );
            } else if( DOM_hasClassName( elm, 'pbFont' ) ){
                prettifyElement( elm, true );
            };
        };

        if( TASK_LIST.length ){
            g_DebugLogger.log( '[pbList] ' + ( TASK_LIST.length / 2 ) + ' elements found. WebFont test start.' );
            webFontTestStart();
        };

        pbList_loaded = true;
    }
);

function webFontTestStart(){
    webFontTestStart = null;

    g_webFontTest(
        onWebFontDetectionComplete, 'PB-100',
        {
            'PB-100_canTTF'  : g_assetUrl + 'pbFont/ttf.css', // fileサイズ順
            'PB-100_canWOFF' : g_assetUrl + 'pbFont/woff.css',
            'PB-100_canEOT'  : g_assetUrl + 'pbFont/eot.css',
            'PB-100_canSVG'  : g_assetUrl + 'pbFont/svg.css'
        },
        'pbFont-testCssReady',
        CHAR_FPN_LE_LIGA, 'i',
        5000
    );
};

function onWebFontDetectionComplete( _canWebFont ){
    pbList_canWebFont = _canWebFont;

    g_DebugLogger.log( '[pbList] WebFont test result : ' + !!_canWebFont );

    if( _canWebFont || pbList_noImageFallback ){
        registerTargetElements();
    } else if( g_imageEnabled ){
        createImageFallbackStyles( true );
    } else if( g_notUndefined( g_imageEnabled ) ){
        registerTargetElements();
    } else {
        g_DebugLogger.log( '[pbList] Need imageTest ' + pbList_fallbackImageUrl );
        g_imageTest( createImageFallbackStyles, pbList_fallbackImageUrl );
    };
};

function createImageFallbackStyles( imageEnabled ){
    if( imageEnabled ){
        g_DebugLogger.log( '[pbList] Fallback start!' );

        DOM_addClassName( g_body, 'pbList-noWebFont' );

        if( g_Presto < 9.5 ){
            // 9.10 で CSSOM が反映されない為、CSS 側で設定.
        } else if( g_generatedContentEnabled === 2 ){
            CSSOM_insertRule(
                [
                    '.pbList font:after', 'content:url(' + pbList_fallbackImageUrl + ')'
                ]
            );
        } else {
            CSSOM_insertRule(
                [
                    '.pbList font', 'background-image:url(' + pbList_fallbackImageUrl + ')'
                ]
            );
        };
    } else {
        // TODO border-font
        g_DebugLogger.log( '[pbList] image disabled!' );
    };
    registerTargetElements();
};

function registerTargetElements(){
    onWebFontDetectionComplete = webFontTest = null;
    while ( TASK_LIST.length ) prettifyElement( TASK_LIST.shift(), TASK_LIST.shift() );

    g_DebugLogger.log( '[pbList] complete.' );
};

/**================================================================
 * prettifyElement
 */
function prettifyElement( elm, ligaOnly ){
    var i, elms = [], txt;

    if( onWebFontDetectionComplete ){ // before onload
        if( TASK_LIST.indexOf( elm ) === -1 ){
            TASK_LIST.push( elm, ligaOnly );
            if( pbList_loaded && webFontTestStart ){
                webFontTestStart();
            };
        };
    } else {
        i = TASK_LIST.indexOf( elm );
        0 <= i && TASK_LIST.splice( i, 2 );

        collectTextNode( elm );

        while( elm = elms.shift() ){
            txt = elm.data;
            if( pbList_canWebFont !== 2 ){
                txt = txt.split( CHAR_FPN_LE_LIGA ).join( CHAR_FPN_LE );
            };
            if( ligaOnly ){
                elm.data = txt;
            } else {
                prettifyLine( chrReferanceTo( txt.split( '\r' ).join( '' ) ), elm );
            };
        };
    };

    function chrReferanceTo( str ){
        // .split( '' ); で &#8331; が消える ie9-
        return str
            .split( '&yen;'  ).join( CHAR_YEN )
            .split( '&lt;'   ).join( '<' )
            .split( '&gt;'   ).join( '>' )
            .split( '&quot;' ).join( CHAR_QUOT )
            .split( '&amp;'  ).join( '&' );
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
 *  prettifyLine
 */
function prettifyLine( originalCode, elmTarget ){
    var COLORS        = ['', 'area', 'line', 'str', 'cmd', 'fnc', 'syb'],
        MARK_AREA     = '+',
        MARK_LINE     = '|',
        MARK_STRING   = '~',
        MARK_COMMAND  = '{',
        MARK_FUNCTION = '}',
        MARK_SYMBOLE  = '^',
        MARK_ALL      = MARK_AREA + MARK_LINE + MARK_STRING + MARK_COMMAND + MARK_FUNCTION + MARK_SYMBOLE;

    var html = [],
        coloringMap = '', commandStartIndex, i = -1, l, chr, inQuot,
        isNBSP, isSP, color, isLnSP, isLine, chrCode,
        elm, className, kid, margin;

    if( isProgramArea( originalCode ) ){
        coloringMap = repeatString( MARK_AREA, originalCode.length );
    } else {
        if( 0 <= ( commandStartIndex = getCommandStartIndex( originalCode ) ) ){
            coloringMap = repeatString( MARK_LINE, commandStartIndex );
            i = commandStartIndex;
            --i;
        };

        while( chr = originalCode.charAt( ++i ) ){
            if( chr === CHAR_QUOT || inQuot ){
                coloringMap += MARK_STRING;
                if( chr === CHAR_QUOT ) inQuot = !inQuot;
            } else {
                coloringMap += chr;
            };  
        };

        coloringMap = marking(coloringMap, SYMBOLES, MARK_SYMBOLE);
        coloringMap = marking(coloringMap, COMMANDS, MARK_COMMAND);
        coloringMap = marking(coloringMap, FUNCTIONS, MARK_FUNCTION);
    };

    for( i = 0, l = originalCode.length; i < l; ++i ){
        chr    = originalCode.charAt( i );
        isNBSP = chr === CHAR_NBSP;
        isSP   = chr === ' ';
        chr    = isNBSP ? ' ' : chr;
        color  = coloringMap.charAt( i );
        isLnSP = isLine; // Line number 直後の &nbsp;
        isLine = color === MARK_LINE;
        color  = COLORS[ MARK_ALL.indexOf( color ) + 1 ];
        margin = '';

        if( chr !== '\n' ){
            if( pbList_canWebFont || !g_imageEnabled || pbList_noImageFallback ){
                if( g_Trident < 8 && isSP ){
                    chr = i === l - 1 ? CHAR_NBSP : CHAR_ENSP;
                };

                if( pbList_canWebFont === 2 && originalCode.substr( i, 2 ) === CHAR_FPN_LE_LIGA ){
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
                        ' class="' + ( chrCode ? chrCode + ' ' : '' ) + 'pbList-' + color + '"' :
                        ' class="' + chrCode + '"';
            };
            if( isLnSP && isNBSP /* && ( g_WebKit || g_SafariMobile || ua.Chromium || ua.ChromiumMobile || ua.ChromeWebView || ua.AOSP || ua.Samsung || ua.KHTML || g_Presto ) */ ){
                // https://twitter.com/pbrocky/status/1215893398386688000
                // スペースだと0幅になる。&nbsp; だと空白になる。
                chr = CHAR_NBSP;
            } else if( isLine && !isLnSP && g_Presto < 9.5 && commandStartIndex < 4 ){
                // display:block;float:left でレイアウトしている行番号に margin を入れる
                margin = repeatString( '<font>' + CHAR_NBSP + '</font>', 4 - commandStartIndex );
            };
            html.push( margin + '<font' + className + '>' + chr + '</font>' ); // 全ての文字を font タグで分ける
        } else {
            isLnSP = isLine = false;
            html.push( chr );
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
    /**
     * hir90の日記 > Javascript高速化・文字列の繰り返しを得る
     *   https://web.archive.org/web/20111110062428/http://d.hatena.ne.jp/hir90/20080620/1213987444
     */
    function repeatString( str, num ){
        var res = '';

        while( num ){
            if( num & 1 ) res += str;
            num = num >> 1;
            str += str;
        };
        return res;
    };

    function marking( text, list, mark ){
        var item, i = -1, p, l;

        while( item = list[ ++i ] ){
            while( 0 <= ( p = text.indexOf( item ) ) ){
                l = item.length;
                text = text.substr( 0, p ) + repeatString( mark, l ) + text.substr( p + l );
            };
        };
        return text;
    };

    function getCommandStartIndex( line ){
        var tmp = parseFloat( line ), str = '' + tmp;

        if( 0 < tmp && ( tmp === tmp | 0 ) ){
            tmp = line.indexOf( str ) + str.length;
            if( tmp <= line.length ) return tmp;
        };
        return 0;
    };

    function isProgramArea( line ){
        var n = line.indexOf( 'P' );

        if( n === -1 ) return false;

        n = parseFloat( line.charAt( n + 1 ) );
        return 0 <= n && n <= 9;
    };
};

PB100.prettify = prettifyElement;