var CHAR_QUOT        = CHAR_TABLE[7],
    CHAR_FPN_LE      = CHAR_TABLE[30],
    CHAR_YEN         = CHAR_TABLE[113],
    CHAR_FPN_LE_LIGA = p_strFromCharCode( 8337 ) + p_strFromCharCode( 8331 ),
    CHAR_NBSP        = p_strFromCharCode( 160  ),
    CHAR_ENSP        = p_strFromCharCode( 8194 ),
    COMMANDS         = ('RESTORE#,WRITE#,NEW#,LIST#,SAVE#,LOAD#,READ#,' +
                        'RETURN,RESTORE,CLEAR,INPUT,PRINT,GOSUB,THEN,STOP,STEP,NEXT,DATA,READ,BEEP,DEFM,MODE,GOTO,' +
                        'CSR,VAC,VER,END,LET,REM,FOR,PUT,GET,SET,ON,IF,TO').split(','),
    FUNCTIONS        = 'KEY$,KEY,LEN(,MID$(,MID(,VAL,STR(,FRAC,RND(,RAN#,DEG(,DMS(,SIN,COS,TAN,ASN,ACS,ATN,LOG,EXP,SQR,ABS,SGN,INT,LN'.split(','),
    SYMBOLES         = ( ':;,"+-*/↑=≠<>≧≦' + CHAR_FPN_LE + CHAR_TABLE[31] ).split(''),
    TARGET_LIST      = [],
    pbList_canWebFont, // 0:no, 1:can, 2:can lig
    pbList_fallbackImageUrl,
    pbList_noImageFallback  = 0,// p_Presto < 7.11,
    pbList_loaded;

p_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( cssAvailability ){
            pbList_fallbackImageUrl = p_assetUrl + 'pbFont/x3mask.png';

            var elms = p_DOM_getElementsByTagNameFromDocument( '*' ),
                i = -1, elm;
    
            // .pbList, .pbFont
            for( ; elm = elms[ ++i ]; ){
                if( p_DOM_hasClassName( elm, 'pbList' ) ){
                    pbList_prettifyElement( elm );
                } else if( p_DOM_hasClassName( elm, 'pbFont' ) ){
                    pbList_prettifyElement( elm, true );
                };
            };
    
            if( TARGET_LIST.length ){
                Debug.log( '[pbList] ' + ( TARGET_LIST.length / 2 ) + ' elements found. WebFont test start.' );
                pbList_startWebFontTest();
            };
    
            return true;
        };
    }
);

function pbList_startWebFontTest(){
    pbList_startWebFontTest = null;

    p_webFontTest(
        pbList_onWebFontDetectionComplete, 'PB-100',
        {
            'PB-100_canTTF'  : p_assetUrl + 'pbFont/ttf.css', // fileサイズ順
            'PB-100_canWOFF' : p_assetUrl + 'pbFont/woff.css',
            'PB-100_canEOT'  : p_assetUrl + 'pbFont/eot.css',
            'PB-100_canSVG'  : p_assetUrl + 'pbFont/svg.css'
        },
        'pbFont-testCssReady',
        CHAR_FPN_LE_LIGA, 'i',
        5000
    );
};

function pbList_onWebFontDetectionComplete( _canWebFont ){
    pbList_canWebFont = _canWebFont;

    Debug.log( '[pbList] WebFont test result : ' + !!_canWebFont );

    if( _canWebFont || pbList_noImageFallback ){
        pbList_prettifyTargetElements();
    } else if( p_imageEnabled ){
        pbList_createImageFallbackStyles( true );
    } else if( p_notUndefined( p_imageEnabled ) ){
        pbList_prettifyTargetElements();
    } else {
        Debug.log( '[pbList] Need imageTest ' + pbList_fallbackImageUrl );
        p_imageTest( pbList_createImageFallbackStyles, pbList_fallbackImageUrl );
    };
};

function pbList_createImageFallbackStyles( imageEnabled ){
    if( imageEnabled ){
        Debug.log( '[pbList] Fallback start!' );

        p_DOM_addClassName( p_body, 'pbList-noWebFont' );

        if( p_Presto < 9.5 || ( p_Gecko && !p_FirefoxGte35 ) || p_Trident === 5.5 ){
            // Opera 9.10, Trident 5.5 で CSSOM が反映されない為、CSS 側で設定.
        } else if( p_generatedContentEnabled === 2 ){
            p_CSSOM_insertRule(
                [
                    '.pbList font:after', 'content:url(' + pbList_fallbackImageUrl + ')'
                ]
            );
        } else {
            p_CSSOM_insertRule(
                [
                    '.pbList font', 'background-image:url(' + pbList_fallbackImageUrl + ')'
                ]
            );
        };
    } else {
        // TODO border-font
        Debug.log( '[pbList] image disabled!' );
    };
    pbList_prettifyTargetElements();
};

function pbList_prettifyTargetElements(){
    pbList_onWebFontDetectionComplete = p_webFontTest = null;
    while( TARGET_LIST.length ){
        pbList_prettifyElement( TARGET_LIST.shift(), TARGET_LIST.shift() );
    };

    Debug.log( '[pbList] complete.' );
};

/**================================================================
 * prettifyElement
 */
function pbList_prettifyElement( elm, ligaOnly ){
    var i, textNodes = [], txt, textNode;

    if( pbList_onWebFontDetectionComplete ){ // before onload
        if( TARGET_LIST.indexOf( elm ) === -1 ){
            TARGET_LIST.push( elm, ligaOnly );
            if( pbList_loaded && pbList_startWebFontTest ){
                pbList_startWebFontTest();
            };
        };
    } else {
        i = TARGET_LIST.indexOf( elm );
        0 <= i && TARGET_LIST.splice( i, 2 );

        p_Trident < 5 ? collectElementHasOnlyText( elm ) : collectTextNode( elm );

        while( textNode = textNodes.shift() ){
            txt = p_Trident < 5 ? textNode.innerText : textNode.data;
            if( pbList_canWebFont !== 2 ){
                txt = txt.split( CHAR_FPN_LE_LIGA ).join( CHAR_FPN_LE );
            };
            if( ligaOnly ){
                p_Trident < 5 ? ( textNode.innerText = txt ) : ( textNode.data = txt );
            } else {
                pbList_prettifyLine( chrReferanceTo( txt.split( '\r' ).join( '' ) ), textNode );
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

    // textNode を探す.
    function collectTextNode( elm ){
        var kids = p_DOM_getChildNodes( elm ),
            i = -1, kid;

        for( ; kid = kids[ ++i ]; ){
            switch( kid.nodeType ){
                case 1:
                    collectTextNode( kid );
                    break;
                case 3:
                    kid.data && cleanup( kid.data ) && textNodes.push( kid ); // skip if white space string.
                    break;
            };
        };
    };

    // IE4用.
    function collectElementHasOnlyText( elm ){
        var kids = elm.children,
            i    = 0,
            l    = kids.length,
            text;

        if( l ){
            for( ; i < l; ++i ){
                collectElementHasOnlyText( kids[ i ] );
            };
        } else {
            text = elm.innerText;
            if( text && cleanup( text ) ){
                textNodes.push( elm );
            };
        };
    };

    function cleanup( text ){
        var _ = '';

        return text // .split( p_strFromCharCode(13) + p_strFromCharCode(10) ).join( _ )
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
function pbList_prettifyLine( originalCode, elmTarget ){
    var COLORS        = ['', 'area', 'line', 'str', 'cmd', 'fnc', 'syb'],
        MARK_AREA     = '+',
        MARK_LINE     = '|',
        MARK_STRING   = '~',
        MARK_COMMAND  = '{',
        MARK_FUNCTION = '}',
        MARK_SYMBOLE  = '^',
        MARK_ALL      = MARK_AREA + MARK_LINE + MARK_STRING + MARK_COMMAND + MARK_FUNCTION + MARK_SYMBOLE;

    var TARGET_IS_ELEMENT     = p_Trident < 5 || elmTarget.nodeType === 1,
        USE_INNER_HTML        = false, // p_Gecko && ua.conpare( ua.ENGINE_VERSION, '0.9.5' ) < 0,
        USE_DOCUMENT_FRAGMENT = !USE_INNER_HTML && !( p_Presto < 7.10 ) && !( p_Trident < 6 ) && document.createDocumentFragment && !!p_body.replaceChild,
        innerHTML             = [],
        _elmTarget,
        coloringMap = '', commandStartIndex, i = -1, l, chr, inQuot,
        isNBSP, isSP, color, isLn2nd, isLnSP, isLine, chrCode,
        className, lineIndex, style, elm, kid;

    if( TARGET_IS_ELEMENT ){
        elmTarget.innerHTML = '';
    };

    if( USE_DOCUMENT_FRAGMENT ){
        _elmTarget = elmTarget;
        elmTarget  = document.createDocumentFragment();
    };

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
        chr     = originalCode.charAt( i );
        isNBSP  = chr === CHAR_NBSP;
        isSP    = chr === ' ';
        chr     = isNBSP ? ' ' : chr;
        color   = coloringMap.charAt( i );
        isLn2nd = isLine;
        isLnSP  = isLn2nd && isNBSP; // Line number 直後の &nbsp;
        isLine  = color === MARK_LINE;
        color   = COLORS[ MARK_ALL.indexOf( color ) + 1 ];

        if( chr !== '\n' ){
            if( pbList_canWebFont || !p_imageEnabled || pbList_noImageFallback ){
                if( p_Trident < 7 && isSP ){
                    // chr = i === l - 1 ? CHAR_NBSP : CHAR_ENSP;
                };

                if( pbList_canWebFont === 2 && originalCode.substr( i, 2 ) === CHAR_FPN_LE_LIGA ){
                    chr = CHAR_FPN_LE_LIGA;
                    ++i;
                };
                className =
                    isSP && color === 'str' ?
                        'pbList-strsp' :
                    isNBSP ? '' :
                    !isSP && color ?
                        'pbList-' + color : '';
            } else {
                chrCode   = CHAR_TABLE.indexOf( chr );
                chrCode   = chrCode === -1 ? '' : CHAR_TABLE.indexOf( chr ).toString( 16 ).toUpperCase();
                chrCode   = chrCode.length === 1 ? '0' + chrCode : chrCode;
                chrCode   = chrCode ? 'pbChr' + chrCode : '';
                className =
                    isSP && color === 'str' ?
                        'pbList-strsp' :
                    isSP || !chrCode ?
                        '' :
                    color ?
                        ( chrCode ? chrCode + ' ' : '' ) + 'pbList-' + color :
                        chrCode;
            };
            style = undefined;
            if( isLnSP /* && ( p_WebKit || p_SafariMobile || ua.Chromium || ua.ChromiumMobile || ua.ChromeWebView || ua.AOSP || ua.Samsung || ua.KHTML || p_Presto ) */ ){
                // https://twitter.com/pbrocky/status/1215893398386688000
                // スペースだと0幅になる。&nbsp; で回避する。
                chr = 6 <= p_Trident && p_Trident < 8 ? ' ' : CHAR_NBSP;
                className = '';
            } else if( isLine && ( p_Gecko < 1.9 || ( p_Presto | 0 ) === 8 ) ){
                if( isLine && !isLn2nd ){
                    lineIndex = 4 - ( parseFloat( originalCode.substr( i ) ) + '' ).length;
                };
                // 絶対配置
                style = USE_INNER_HTML ?
                            'position:absolute;top:0;left:' + lineIndex * 12 + 'px' :
                            { position : 'absolute', top : 0, left : lineIndex * 12 + 'px' };
                ++lineIndex;
            };
            if( USE_INNER_HTML ){
                innerHTML.push(
                    '<font' + ( className ? ' class="' + className + '"' : '' ) +
                              ( style ? ' style="' + style + '"' : '' ) +
                    '>' + chr + '</font>'
                );
            } else if( TARGET_IS_ELEMENT || USE_DOCUMENT_FRAGMENT ){
                p_DOM_insertElement( elmTarget, 'font', { 'class' : className, style : style }, chr );
            } else {
                p_DOM_insertElementBefore( elmTarget, 'font', { 'class' : className, style : style }, chr );
            };
        } else {
            isLn2nd = isLine = false;
            if( USE_INNER_HTML ){
                innerHTML.push( chr );
            } else if( TARGET_IS_ELEMENT || USE_DOCUMENT_FRAGMENT ){
                p_DOM_insertTextNode( elmTarget, chr );
            } else {
                p_DOM_insertTextNodeBefore( elmTarget, chr );
            };
        };
    };

    if( TARGET_IS_ELEMENT ){
        if( USE_INNER_HTML ){
            elmTarget.innerHTML = innerHTML.join( '' );
        } else if( USE_DOCUMENT_FRAGMENT ){
            _elmTarget.appendChild( elmTarget );
        };
    } else {
        if( USE_INNER_HTML ){
            elm = document.createElement( 'font' );
            elm.innerHTML = innerHTML.join( '' );
            while( kid = elm.firstChild ){
                elmTarget.parentNode.insertBefore( kid, elmTarget );
            };
            p_DOM_remove( elmTarget );
        } else if( USE_DOCUMENT_FRAGMENT ){
            _elmTarget.parentNode.replaceChild( elmTarget, _elmTarget );
        } else {
            p_DOM_remove( elmTarget );
        };
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

PB100.prettify = pbList_prettifyElement;