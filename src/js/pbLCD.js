"use strict";

/* 
 * https://outcloud.blogspot.jp/2016/03/presto.html
 * */
var PBLCD_BLINK_ELMS = [],
    pbLCD_blinkFlag,
    pbLCD_safariPreventDefault,
    PBLCD_loaded;

g_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( !cssAvailability || PBLCD_loaded ) return;

        PBLCD_loaded = true;

        var boxModelFix = g_Trident < 6 ? 1 : 0,
            samps       = DOM_getElementsByTagName( 'SAMP' ),
            isIE8       = g_Trident === 8,
            isIE5x      = 5 <= g_Trident && g_Trident < 6,
            samp, elm,
            isPB120orFX795P,
            i, j, k, kids, kid, _kids;

        if( g_iefilterEnabled ){
            DOM_addClassName( g_body, 'pbLCD-AX' );
        };
        if( g_Presto < 7.2 ){
            DOM_addClassName( g_body, 'operaLt720' );
        };

        if( samps.length ){
            for( i = -1; samp = samps[ ++i ]; ){
                if( !DOM_hasClassName( DOM_getParentElement( samp ), 'pbLCD' ) ) continue;        

                isPB120orFX795P = DOM_hasClassName( samp, 'PB-120' ) || DOM_hasClassName( samp, 'FX-795P' );

                kids = DOM_getChildren( samp );
                for( j = kids.length; j; ){ // 子要素が追加されるので最後から見ていく
                    kid = kids[ --j ];
                    switch( DOM_getTagName( kid ) ){
                        case 'A' :
                            if( g_generatedContentEnabled < 2 || isIE8 ){
                                createToolTip( kid );
                            };
                            if( g_generatedContentEnabled < 2 ){
                                _kids = DOM_getChildren( kid );
                                for( k = _kids.length; k; ){ // 子要素が追加されるので最後から見ていく
                                    !isIE8 && updateLCDSegment( _kids[ --k ] );
                                };
                            };
                            if( g_ServerSideRendering ){
                                DOM_setAttribute( kid, 'href', 'javascript:void(0)' );
                            } else {
                                kid.onclick = onClickBalloon;
                            };
                            break;
                        case 'B' :
                            g_generatedContentEnabled < 2 && updateLCDSegment( kid );
                    };
                };
            };

            if( PBLCD_BLINK_ELMS.length ){
                setInterval( blinkElements, 500 );
            } else {
                blinkElements = null;
            };
        };

        function createToolTip( a ){
            var settings = DOM_getAttribute( a, 'pbTip' ),
                char0    = settings.charAt( 0 ),
                dirDown  = char0 === '_',
                position = dirDown ? settings.charAt( 2 ) : char0,
                dir      = dirDown ? 'Btm' : '',
                content  = DOM_getAttribute( a, 'title' );

            if( !isIE8 ){
                DOM_removeAttribute( a, 'pbTip' );
                DOM_removeAttribute( a, 'title' );

                DOM_addClassName( a, 'pbTipPos' + position.toUpperCase() );

                DOM_createThenAdd(
                    a, 'div',
                    { className : 'pbTip' + dir }, { width : content.length + boxModelFix + 'em' }, content
                );
            };
            DOM_createThenAdd(
                a, 'div',
                { className : 'pbTail' + dir }
            );
            if( isIE5x && dirDown ){
                a.focus(); // 下ツールチップが描画されないので強制再描画
                a.blur();
            };
        };

        function pbCharCodeToChar( code ){
            if( code.length === 3 ) code = code.substr( 0, 2 ); // XXa -> XX
            return CHAR_TABLE[ parseInt( code, 16 ) ] || '~';
        };

        function updateLCDSegment( b ){
            if( g_generatedContentEnabled < 2 ){
                createGhost( b );
            } else {
                blinkCursor( b );
            };
        };
        function createGhost( b ){
            var ghost     = DOM_getAttribute( b, 'pbGhst' ),
                cn        = b.className,
                csr       = cn.split( 'pbCsr' )[ 1 ] || '',
                alp       = cn.split( 'pbAlp' )[ 1 ] || '',
                ghostChr  = ghost === 'CS' ? '_' : pbCharCodeToChar( ghost ),
                ghostAlp, chrCode, css;

            csr = csr.split( ' ' )[ 0 ];
            alp = parseFloat( alp.split( ' ' )[ 0 ] );
            ghostAlp = 10 - alp;

            if( alp && g_Presto < 7.2 ){
                chrCode = cn.split( 'pbChr' )[ 1 ];
                chrCode = chrCode.split( ' ' )[ 0 ];
                DOM_setStyle( b, 'backgroundPosition', getCharPositionX( chrCode, 2, isPB120orFX795P ) + 'px ' + getCharPositionY( alp ) + 'px' );
            };

            if( ghost ){
                if( g_Presto < 7.2 ){
                    css = { backgroundPosition : getCharPositionX( ghost, 2, isPB120orFX795P ) + 'px ' + getCharPositionY( ghostAlp ) + 'px' };
                    // alert( getCharPositionX( parseInt( chrCode, 16 ) ) + 'px ' + getCharPositionY( alp ) + 'px' )
                };
                DOM_removeAttribute( b, 'pbGhst' );
                elm = DOM_prev(
                    b, 'b',
                    { className : 'pbChr' + ghost + ' pbAlp' + ghostAlp + ' pbCsr' + csr },
                    css, ghostChr 
                );
                blinkCursor( elm );
            };
            blinkCursor( b );
        };

        function blinkCursor( elm ){
            if( g_Presto < 7.2 ){
                if( DOM_hasClassName( elm, 'pbChrCS' ) ){
                    PBLCD_BLINK_ELMS.push( elm );
                };
            };
        };
    }
);

function blinkElements(){
    pbLCD_blinkFlag = !pbLCD_blinkFlag;

    for( var i = -1, elm; elm = PBLCD_BLINK_ELMS[ ++i ]; ){
        DOM_setStyle( elm, 'display', pbLCD_blinkFlag ? '' : 'none' );
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