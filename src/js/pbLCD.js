/* 
 * https://outcloud.blogspot.jp/2016/03/presto.html
 * */
var PBLCD_BLINK_ELMS = [],
    pbLCD_blinkFlag,
    pbLCD_safariPreventDefault,
    pbLCD_fallbackImgPositions,
    PBLCD_loaded;

g_listenCssAvailability(
    function( cssAvailability ){
        if( !cssAvailability || PBLCD_loaded ) return;
        PBLCD_loaded = true;

        var boxModelFix = g_Trident < 6 ? 1 : 0,
            samps       = DOM_getElementsByTagName( 'SAMP' ),
            isIElte8    = g_Trident < 9,
            isIElte6    = g_Trident < 7,
            isIE5x      = 5 <= g_Trident && g_Trident < 6,
            samp, elm,
            canOpacity, useAlphaPng, needUpdate, isPB120orFX795P,
            i, j, k, kids, kid;
        
        if( g_iefilterEnabled ){
            DOM_addClassName( g_body, 'pbLCD-AX' );
        };

        if( samps.length ){
            // opacity test
            canOpacity  = g_style[ 'opacity' ] !== undefined || g_style[ '-moz-opacity' ] !== undefined || g_style[ '-khtml-opacity' ] !== undefined;
            useAlphaPng = !canOpacity && !isIElte8 && !pbLCD_fallbackImgPositions;
            needUpdate  = !g_contentPseudoElementEnabled || useAlphaPng || pbLCD_fallbackImgPositions;
    
            for( i = -1; samp = samps[ ++i ]; ){
                if( !DOM_hasClassName( DOM_getParentElement( samp ), 'pbLCD' ) ) continue;        

                isPB120orFX795P = DOM_hasClassName( samp, 'PB-120' ) || DOM_hasClassName( samp, 'FX-795P' );

                kids = samp.children;
                for( j = kids.length; j; ){ // 子要素が追加されるので最後から見ていく
                    kid = kids[ --j ];
                    switch( DOM_getTagName( kid ) ){
                        case 'A' :
                            if( needUpdate ){
                                g_contentPseudoElementEnabled || createBaloon( kid );
                                for( k = kid.children.length; k; ){ // 子要素が追加されるので最後から見ていく
                                    updateLCDSegment( kid.children[ --k ] );
                                };
                            };
                            if( g_ServerSideRendering ){
                                DOM_setAttribute( kid, 'href', 'javascript:void(0)' );
                            } else {
                                kid.onclick = onClickBalloon;
                            };
                            break;
                        case 'B' :
                            needUpdate && updateLCDSegment( kid );
                    };
                };
            };

            if( PBLCD_BLINK_ELMS.length ){
                setInterval( blinkElements, 500 );
                if( g_contentPseudoElementEnabled ){
                    CSSOM_insertRule([
                        '.pbChrCS:after,.pbChrCS:before', 'left:0', // _ chr75,
                        '.pbChrCS:after,.pbChrCS:before', 'top:-51px' // _ chr75
                    ]);
                } else {
                    CSSOM_insertRule([
                        '.pbChrCS', 'background-position:0 -51px' // _ chr75
                    ]);
                };
            } else {
                blinkElements = null;
            };
            if( useAlphaPng ){
                if( g_contentPseudoElementEnabled ){
                    CSSOM_insertRule([
                        '.pbAlp1:after,.pbAlp9[pbGhst]:before', 'content:url(' + g_ASSET_PATH + 'pbLCD/x3_a10.png)',
                        '.pbAlp2:after,.pbAlp8[pbGhst]:before', 'content:url(' + g_ASSET_PATH + 'pbLCD/x3_a20.png)',
                        '.pbAlp3:after,.pbAlp7[pbGhst]:before', 'content:url(' + g_ASSET_PATH + 'pbLCD/x3_a30.png)',
                        '.pbAlp4:after,.pbAlp6[pbGhst]:before', 'content:url(' + g_ASSET_PATH + 'pbLCD/x3_a40.png)',
                        '.pbAlp5:after', 'content:url(' + g_ASSET_PATH + 'pbLCD/x3_a50.png)',
                        '.pbAlp6:after', 'content:url(' + g_ASSET_PATH + 'pbLCD/x3_a60.png)',
                        '.pbAlp7:after', 'content:url(' + g_ASSET_PATH + 'pbLCD/x3_a70.png)',
                        '.pbAlp8:after', 'content:url(' + g_ASSET_PATH + 'pbLCD/x3_a80.png)',
                        '.pbAlp9:after', 'content:url(' + g_ASSET_PATH + 'pbLCD/x3_a90.png)'
                    ]);
                } else {
                    CSSOM_insertRule([
                        '.pbAlp1', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a10.png)',
                        '.pbAlp2', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a20.png)',
                        '.pbAlp3', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a30.png)',
                        '.pbAlp4', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a40.png)',
                        '.pbAlp5', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a50.png)',
                        '.pbAlp6', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a60.png)',
                        '.pbAlp7', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a70.png)',
                        '.pbAlp8', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a80.png)',
                        '.pbAlp9', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a90.png)'
                    ]);
                };
            };
        };

        function createBaloon( a ){
            var settings = DOM_getAttribute( a, 'pbtip' ),
                char0    = settings.charAt( 0 ),
                dirDown  = char0 === '_',
                position = dirDown ? settings.charAt( 2 ) : char0,
                dir      = dirDown ? 'Btm' : '',
                content  = DOM_getAttribute( a, 'title' );
            
            DOM_addClassName( a, 'pbTipPos' + position.toUpperCase() );

            DOM_createThenAdd(
                a, 'div',
                { className : 'pbTip' + dir }, { width : content.length + boxModelFix + 'em' }, content
            );
            DOM_createThenAdd(
                a, 'div',
                { className : 'pbTail' + dir }
            );
            if( isIE5x && dirDown ){
                a.focus(); // 下ツールチップが描画されないので強制再描画
                a.blur();
            };
        };

        function updateLCDSegment( b ){
            g_contentPseudoElementEnabled && useAlphaPng ? blinkCursor( b ) : _updateLCDSegment( b );
        };

        function blinkCursor( elm ){
            if( !canOpacity && !isIElte8 ){
                if( DOM_hasClassName( elm, 'pbChrCS' ) ){
                    PBLCD_BLINK_ELMS.push( elm );
                };
            };
        };

        function pbCharCodeToChar( code ){
            if( code.length === 3 ) code = code.substr( 0, 2 ); // XXa -> XX
            return CHAR_TABLE[ parseInt( code, 16 ) ] || '~';
        };

        function _updateLCDSegment( b ){
            var ghost     = DOM_getAttribute( b, 'pbGhst' ),
                cn        = b.className,
                csr       = cn.split( 'pbCsr' )[ 1 ] || '',
                alp       = cn.split( 'pbAlp' )[ 1 ] || '',
                ghostChr  = ghost === 'CS' ? '_' : pbCharCodeToChar( ghost ),
                chrCode, ghostAlp;

            csr = csr.split( ' ' )[ 0 ];
            alp = alp.split( ' ' )[ 0 ];
            ghostAlp = 10 - parseFloat( alp );

            if( pbLCD_fallbackImgPositions && alp ){
                chrCode = cn.split( 'pbChr' )[ 1 ];
                chrCode = chrCode.split( ' ' )[ 0 ];
                createFallbackImage( b, chrCode, alp, b.innerHTML );
                if( ghost ){
                    createFallbackImage( b, ghost, ghostAlp, ghostChr );
                };
                DOM_setStyle( b, 'backgroundImage', 'none' );
            } else if( ghost ){
                elm = DOM_prev(
                    b, 'b',
                    { className : [ 'pbChr' + ghost + ' pbAlp' + ghostAlp + ' pbCsr' + csr ] },
                    0, ghostChr 
                );
                blinkCursor( b );
                blinkCursor( elm );
            } else {
                blinkCursor( b );
            };
        };

        function createFallbackImage( b, chrCode, alp, str ){
            var css = getCharPositionStyle( parseInt( chrCode, 16 ), isPB120orFX795P, 3 ),
                elm;

            elm = DOM_createThenAdd(
                b, 'img',
                {
                    title : str,
                    src   : '' + g_ASSET_PATH + 'pbLCD/x3_a' + alp + '0.png'
                },
                css
            );
            if( str === 'CS' ) PBLCD_BLINK_ELMS.push( elm );
        };
    }
);

function blinkElements(){
    pbLCD_blinkFlag = !pbLCD_blinkFlag;

    for( var i = -1, elm; elm = PBLCD_BLINK_ELMS[ ++i ]; ){
        DOM_setStyle( elm, 'visibility', pbLCD_blinkFlag ? '' : 'hidden' );
    };
};

function onClickBalloon( e ){
    var ev = e || event;

    this.focus();
    if( e ){
        e.preventDefault();
        e.stopPropagation();
        pbLCD_safariPreventDefault = true;
        return false;
    } else {
        ev.cancelBubble = true;
        return ev.returnValue = false;
    };
};

if( g_WebKit < 525.13 ){ // Safari3-
    g_html.onclick = function( e ){
        if( pbLCD_safariPreventDefault ){
            pbLCD_safariPreventDefault = false;
            e.preventDefault();
            return false;
        };
    };
};

if( g_Trident === 6 ){
	( new Function( 'd', 'd.execCommand( "BackgroundImageCache",!1,!0)' ) )( document );
};