var pbList_COMMANDS    = (
                             'RESTORE#,WRITE#,NEW#,LIST#,SAVE#,LOAD#,READ#,' +
                             'RETURN,RESTORE,CLEAR,INPUT,PRINT,GOSUB,THEN,STOP,STEP,NEXT,DATA,READ,BEEP,DEFM,MODE,GOTO,' +
                             'CSR,VAC,VER,END,LET,REM,FOR,PUT,GET,SET,ON,IF,TO'
                         ).split( ',' ),
    pbList_FUNCTIONS   = 'KEY$,KEY,LEN(,MID$(,MID(,VAL,STR(,FRAC,RND(,RAN#,DEG(,DMS(,SIN,COS,TAN,ASN,ACS,ATN,LOG,EXP,SQR,ABS,SGN,INT,LN'.split( ',' ),
    pbList_SYMBOLES    = ( ':;,"+-*/↑=≠<>≧≦' + HOMOGLYPH_FPN_LE + CHAR_FPN ).split( '' ),
    pbList_TARGET_LIST = [],
    pbList_webFontTestResult, // 0:no, 1:can, 2:can lig
    pbList_fallbackImageUrl,
    pbList_noImageFallback = false, //
    pbList_isGecko091,
    pbList_loaded;

if( 0.9 <= p_Gecko && ua.conpare( p_engineVersion, '0.9.1' ) <= 0 ){
    p_DOM_addClassName( p_html, 'pbLCD-gecko09To091' );
    pbList_isGecko091 = true;
};

p_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( cssAvailability ){
            pbList_fallbackImageUrl = p_assetUrl + 'pbFont/x3mask' + ( pbList_isGecko091 ? '.gecko0.9.1.gif' : '.png' );

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

            if( pbList_TARGET_LIST.length ){
                Debug.log( '[pbList] ' + ( pbList_TARGET_LIST.length / 2 ) + ' elements found. WebFont test start.' );
                pbList_startWebFontTest();
            };

            return true;
        };
    }
);

/** @type {!Function|undefined} */
var pbList_startWebFontTest = function (){
    pbList_startWebFontTest = undefined;

    p_webFontTest(
        /** @type {!function(number):void} */ (pbList_onWebFontDetectionComplete),
        COMMON_WEBFONT__FONT_NAME,
        [
            webFontTest_IS_WOFF2, p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/woff2.css',
            webFontTest_IS_WOFF , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/woff.css',
            // webFontTest_IS_OTF  , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/otf.css',
            webFontTest_IS_TTF  , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/ttf.css',
            webFontTest_IS_EOT  , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/eot.css',
            webFontTest_IS_SVG  , p_assetUrl + COMMON_ASSET_DIR_TO_WEBFONT_DIR + '/svg.css'
        ],
        COMMON_WEBFONT__TEST_ID_AND_CLASSNAME, // 4.
        LIGATURE_MINUS_1, HOMOGLYPH_MINUS_1
    );
};

/** @type {!function(number):void|undefined} */
var pbList_onWebFontDetectionComplete = function( _canWebFont ){
    pbList_webFontTestResult = _canWebFont;

    Debug.log( '[pbList] WebFont test result : ' + !!_canWebFont );

    if( _canWebFont || pbList_noImageFallback ){
        pbList_prettifyTargetElements();
    } else if( p_imageEnabled ){
        pbList_onImageTestComplete( true );
    } else if( p_notUndefined( p_imageEnabled ) ){
        pbList_prettifyTargetElements();
    } else {
        Debug.log( '[pbList] Need imageTest ' + pbList_fallbackImageUrl );
        p_imageTest( pbList_onImageTestComplete, pbList_fallbackImageUrl );
    };

    Debug.log( 'window.offscreenBuffering = ' + window.offscreenBuffering  );
};

function pbList_onImageTestComplete( imageEnabled ){
    if( imageEnabled ){
        Debug.log( '[pbList] Fallback start!' );

        p_DOM_addClassName( p_body, 'pbList-noWebFont' );
    } else {
        // TODO border-font
        Debug.log( '[pbList] image disabled!' );
    };
    pbList_prettifyTargetElements();
};

function pbList_prettifyTargetElements(){
    pbList_onWebFontDetectionComplete = p_webFontTest = undefined;
    while( pbList_TARGET_LIST.length ){
        pbList_prettifyElement( pbList_TARGET_LIST.shift(), pbList_TARGET_LIST.shift() );
    };

    Debug.log( '[pbList] complete.' );
};

/** ================================================================
 *  prettifyElement
 * 
 * @param {!Node} elm 
 * @param {boolean=} opt_ligaOnly 
 */
function pbList_prettifyElement( elm, opt_ligaOnly ){
    var i, textNodes = [], txt, textNode;

    if( pbList_onWebFontDetectionComplete ){ // before onload
        if( pbList_TARGET_LIST.indexOf( elm ) === -1 ){
            pbList_TARGET_LIST.push( elm, opt_ligaOnly );
            if( pbList_loaded && pbList_startWebFontTest ){
                pbList_startWebFontTest();
            };
        };
    } else {
        i = pbList_TARGET_LIST.indexOf( elm );
        0 <= i && pbList_TARGET_LIST.splice( i, 2 );

        p_Trident < 5 ? collectElementHasOnlyText( elm ) : collectTextNode( elm );

        while( textNode = textNodes.shift() ){
            txt = p_Trident < 5 ? textNode.innerText : textNode.data;
            if( pbList_webFontTestResult !== 2 ){
                // .split( '' ); で &#8331; が消えるので必ず最初に行う ie9-
                if( 0 <= txt.indexOf( LIGATURE_LEGACY_FPN_LE ) ){
                    txt = txt.split( LIGATURE_LEGACY_FPN_LE ).join( HOMOGLYPH_FPN_LE );
                };
                if( 0 <= txt.indexOf( LIGATURE_FPN_LE ) ){
                    txt = txt.split( LIGATURE_FPN_LE ).join( HOMOGLYPH_FPN_LE );
                };
                if( pbList_webFontTestResult ){
                    if( 0 <= txt.indexOf( LIGATURE_MINUS_1 ) ){
                        txt = txt.split( LIGATURE_MINUS_1 ).join( HOMOGLYPH_MINUS_1 );
                    };
                    if( 0 <= txt.indexOf( LIGATURE_BCR ) ){
                        txt = txt.split( LIGATURE_BCR ).join( HOMOGLYPH_BCR );
                    };
                    if( 0 <= txt.indexOf( LIGATURE_B_SLASH ) ){
                        txt = txt.split( LIGATURE_B_SLASH ).join( HOMOGLYPH_B_SLASH );
                    };
                    if( 0 <= txt.indexOf( LIGATURE_SLASH_C ) ){
                        txt = txt.split( LIGATURE_SLASH_C ).join( HOMOGLYPH_SLASH_C );
                    };
                };
            } else {
                if( 0 <= txt.indexOf( LIGATURE_LEGACY_FPN_LE ) ){
                    txt = txt.split( LIGATURE_LEGACY_FPN_LE ).join( LIGATURE_FPN_LE );
                };
            };
            if( 0 <= txt.indexOf( CHAR_LEGACY_FPN ) ){
                txt = txt.split( CHAR_LEGACY_FPN ).join( CHAR_FPN );
            };
            if( opt_ligaOnly ){
                p_Trident < 5 ? ( textNode.innerText = txt ) : ( textNode.data = txt );
            } else {
                pbList_prettifyLine(
                    chrReferanceTo(
                        txt.split( '\r\n' ).join( '\n' )
                           .split( '\r'   ).join( '\n' )
                    ),
                    textNode
                );
            };
        };
    };

    function chrReferanceTo( str ){
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
var pbList_USE_INNER_HTML        = false;
var pbList_BAD_DOCUMENT_FRAGMENT = p_Presto < 8;
var pbList_USE_DOCUMENT_FRAGMENT = !pbList_USE_INNER_HTML &&
                                   !pbList_BAD_DOCUMENT_FRAGMENT && // https://twitter.com/pbrocky/status/1445450684338360328
                                   !( p_Trident < 6 ) && document.createDocumentFragment && !!p_body.replaceChild;

function pbList_prettifyLine( originalCode, elmTarget ){
    var COLORS        = ['', 'area', 'line', 'str', 'cmd', 'fnc', 'syb'],
        MARK_AREA     = '+',
        MARK_LINE     = '|',
        MARK_STRING   = '~',
        MARK_COMMAND  = '{',
        MARK_FUNCTION = '}',
        MARK_SYMBOLE  = '^',
        MARK_ALL      = MARK_AREA + MARK_LINE + MARK_STRING + MARK_COMMAND + MARK_FUNCTION + MARK_SYMBOLE;

    var TARGET_IS_ELEMENT = p_Trident < 5 || elmTarget.nodeType === 1,
        innerHTML         = [],
        memVisibility,
        _elmTarget,
        coloringMap = '', commandStartIndex, i = -1, l, chr, inQuot,
        isNBSP, isSP, color, isLn2nd, isLnSP, isLine, chrCode,
        className, lineIndex, style, elm, kid;

    if( TARGET_IS_ELEMENT ){
        if( pbList_BAD_DOCUMENT_FRAGMENT ){ // https://twitter.com/pbrocky/status/1445452475243241484
            memVisibility = elmTarget.style.visibility;
            p_DOM_setStyle( elmTarget, 'visibility', 'hidden' );
        };
        elmTarget.innerHTML = '';
    };

    if( pbList_USE_DOCUMENT_FRAGMENT ){
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

        coloringMap = marking(coloringMap, pbList_SYMBOLES, MARK_SYMBOLE);
        coloringMap = marking(coloringMap, pbList_COMMANDS, MARK_COMMAND);
        coloringMap = marking(coloringMap, pbList_FUNCTIONS, MARK_FUNCTION);
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
            if( pbList_webFontTestResult || !p_imageEnabled || pbList_noImageFallback ){
                if( pbList_webFontTestResult === 2 ){
                    if( originalCode.substr( i, 3 ) === LIGATURE_BCR ){
                        chr = LIGATURE_BCR;
                        i += 2;
                    } else {
                        switch( originalCode.substr( i, 2 ) ){
                            case LIGATURE_FPN_LE  :
                            case LIGATURE_MINUS_1 :
                            case LIGATURE_B_SLASH :
                            case LIGATURE_SLASH_C :
                                chr = originalCode.substr( i, 2 );
                                ++i;
                        };
                    };
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
            if( isLnSP ){
                // https://twitter.com/pbrocky/status/1215893398386688000
                // スペースだと0幅になる。&nbsp; で回避する。
                chr = 6 <= p_Trident && p_Trident < 8 ? ' ' : CHAR_NBSP;
                className = '';
            } else if( isLine && (
                           p_Gecko && !p_FirefoxGte35 // ~1.9.0 で必要
                           || p_Presto < 9.5
                     )
            ){
                if( isLine && !isLn2nd ){
                    lineIndex = 4 - ( parseFloat( originalCode.substr( i ) ) + '' ).length;
                };
                if( p_Presto < 7.5 ){
                    style = pbList_USE_INNER_HTML ?
                                'position:relative;top:-4px;left:' + lineIndex * 12 + 'px' :
                                { position : 'relative', top : '-4px', left : lineIndex * 12 + 'px' };
                } else {
                    // position:absolute は Gecko 0.9.4 で要素が消えてしまう
                    style = pbList_USE_INNER_HTML ?
                                'position:relative;left:' + lineIndex * 12 + 'px' :
                                { position : 'relative', left : lineIndex * 12 + 'px' };
                };
            } else if( isSP && p_Presto < 7.5 ){
                className = 'pbList-strsp'; // スペースが無視される問題の対策 https://twitter.com/pbrocky/status/1445446340285112320
            };
            if( pbList_USE_INNER_HTML ){
                innerHTML.push(
                    '<font' + ( className ? ' class="' + className + '"' : '' ) +
                              ( style ? ' style="' + style + '"' : '' ) +
                    '>' + chr + '</font>'
                );
            } else if( TARGET_IS_ELEMENT || pbList_USE_DOCUMENT_FRAGMENT ){
                p_DOM_insertElement( elmTarget, 'font', { 'class' : className, style : style }, chr );
            } else {
                p_DOM_insertElementBefore( elmTarget, 'font', { 'class' : className, style : style }, chr );
            };
        } else {
            isLn2nd = isLine = false;
            if( pbList_USE_INNER_HTML ){
                innerHTML.push( chr );
            } else if( TARGET_IS_ELEMENT || pbList_USE_DOCUMENT_FRAGMENT ){
                p_DOM_insertTextNode( elmTarget, chr );
            } else {
                p_DOM_insertTextNodeBefore( elmTarget, chr );
            };
        };
    };

    if( TARGET_IS_ELEMENT ){
        if( pbList_USE_INNER_HTML ){
            elmTarget.innerHTML = innerHTML.join( '' );
        } else if( pbList_USE_DOCUMENT_FRAGMENT ){
            _elmTarget.appendChild( elmTarget );
        };
        if( pbList_BAD_DOCUMENT_FRAGMENT ){
            p_DOM_setStyle( elmTarget, 'visibility', memVisibility );
        };
    } else {
        if( pbList_USE_INNER_HTML ){
            elm = document.createElement( 'font' );
            elm.innerHTML = innerHTML.join( '' );
            while( kid = elm.firstChild ){
                elmTarget.parentNode.insertBefore( kid, elmTarget );
            };
            p_DOM_remove( elmTarget );
        } else if( pbList_USE_DOCUMENT_FRAGMENT ){
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