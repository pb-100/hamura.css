/* 
 * opacity の check && !ie8- && !opera7 -> png-fallback
 * opera7 nowork animation-gif at bgimg -> 点滅
 *        nowork alpha png at bgimg     -> use img element
 * https://outcloud.blogspot.jp/2016/03/presto.html
 * */

var PBLCD_BLINK_ELMS = [],
    pbLCD_blinkFlag,
    pbLCD_safariPreventDefault,
    pbLCD_fallbackImgPositions = g_Presto < 8 && {
        // array化, left:0 の場合は top を反転, 30で割る, a の位置をleft0へ
        '00' : { left:0,top:0 },
        '01' : { left:0,top:-30},
        '02' : { left:0,top:-60},
        '03' : { left:0,top:-90},
        '04' : { left:0,top:-120},
        '05' : { left:0,top:-150},
        '06' : { left:0,top:-180},
        '07' : { left:0,top:-210},
        '08' : { left:0,top:-240},
        '09' : { left:0,top:-270},
        '0A' : { left:0,top:-300},
        '0B' : { left:0,top:-330},
        '0C' : { left:0,top:-360},
        '0D' : { left:0,top:-390},
        '0E' : { left:0,top:-420},
        '0F' : { left:0,top:-450},
        '10' : { left:0,top:-480},
        '11' : { left:0,top:-510},
        '12' : { left:0,top:-540},
        '13' : { left:0,top:-570},
        '14' : { left:0,top:-600},
        '15' : { left:0,top:-630},
        '16' : { left:0,top:-660},
        '17' : { left:0,top:-690},
        '18' : { left:0,top:-720},
        '19' : { left:0,top:-750},
        '1A' : { left:0,top:-780},
        '1B' : { left:0,top:-810},
        '1C' : { left:0,top:-840},
        '1D' : {left:0,top:-870},
        '1E' : {left:0,top:-900},
        '1F' : {left:0,top:-930},
        '20' : {left:0,top:-960},
        '21' : {left:0,top:-990},
        '22' : {left:0,top:-1020},
        '23' : {left:0,top:-1050},
        '24' : {left:0,top:-1080},
        '25' : {left:0,top:-1110},
        '26' : {left:0,top:-1140},
        '27' : {left:0,top:-1170},
        '28' : {left:0,top:-1200},
        '29' : {left:0,top:-1230},
        '2A' : {left:0,top:-1260},
        '2B' : {left:0,top:-1290},
        '2C' : {left:0,top:-1320},
        '2D' : {left:0,top:-1350},
        '2E' : {left:0,top:-1380},
        '2F' : {left:0,top:-1410},
        '30' : {left:0,top:-1440},
        '31' : {left:0,top:-1470},
        '32' : {left:0,top:-1500},
        '33' : {left:0,top:-1530},
        '34' : {left:0,top:-1560},
        '35' : {left:0,top:-1590},
        '36' : {left:0,top:-1620},
        '37' : {left:0,top:-1650},
        '38' : {left:0,top:-1680},
        '39' : {left:0,top:-1710},
        
        '40' : { top:0},
        '41' : { top:-30},
        '42' : { top:-60},
        '43' : { top:-90},
        '44' : { top:-120},
        '45' : { top:-150},
        '46' : { top:-180},
        '47' : { top:-210},
        '48' : { top:-240},
        '49' : { top:-270},
        '4A' : { top:-300},
        '4B' : { top:-330},
        '4C' : { top:-360},
        '4D' : { top:-390},
        '4E' : { top:-420},
        '4F' : { top:-450},
        '50' : { top:-480},
        '51' : { top:-510},
        '52' : { top:-540},
        '53' : { top:-570},
        '54' : { top:-600},
        '55' : { top:-630},
        '56' : { top:-660},
        '57' : { top:-690},
        '58' : { top:-720},
        '59' : { top:-750},
            /* .pbChr5A01' : { top:-780},
        '01' : { top:-810}, */
        '5C' : { top:-840},
        '5D' : { top:-870},
        '5E' : { top:-900},
        '5F' : { top:-930},
        '60' : { top:-423},
        '61' : { top:-990},
        '62' : { top:-1020},
        '63' : { top:-1050},
        '64' : { top:-1080},
        '65' : { top:-1110},
        '66' : { top:-1140},
        '67' : { top:-1170},
        '68' : { top:-1200},
        '69' : { top:-1230},
        '6A' : { top:-1260},
        '6B' : { top:-1290},
        '6C' : { top:-1320},
        '6D' : { top:-1350},
        '6E' : { top:-1380},
        '6F' : { top:-1410},
        '70' : { top:-1440},
        '71' : { top:-1470},
        '72' : { top:-1500},
        '73' : { top:-1530},
        '74' : { top:-1560},
        '75' : {left:0,top:-51},
        '76' : { top:-1620},
        '77' : {left:0,top:-786},
        '78' : { top:-1680},
        '79' : { top:-1710},
        '7A' : { top:-1740},
        '7B' : { top:-1770},

        '32a' : {left:0,top:-1740},
        '67a' : { top:-1590},
        '69a' : { top:-780},
        '6Aa' : { top:-810},
        '6Ba' : { top:-1650}
    },
    PBLCD_loaded;

g_Event_listenCssAvailability(
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
        
        if( g_CanUse_iefilter ){
            DOM_addClassName( g_body, 'pbLCD-AX' );
        };

        if( samps.length ){
            // opacity test
            canOpacity  = g_style[ 'opacity' ] !== undefined || g_style[ '-moz-opacity' ] !== undefined || g_style[ '-khtml-opacity' ] !== undefined;
            useAlphaPng = !canOpacity && !isIElte8 && !pbLCD_fallbackImgPositions;
            needUpdate  = !g_CanUse_contentPusedoElement || useAlphaPng || pbLCD_fallbackImgPositions;
    
            for( i = -1; samp = samps[ ++i ]; ){
                if( !DOM_hasClassName( DOM_getParentElement( samp ), 'pbLCD' ) ) continue;        

                isPB120orFX795P = DOM_hasClassName( samp, 'PB-120' ) || DOM_hasClassName( samp, 'FX-795P' );

                kids = samp.children;
                for( j = kids.length; j; ){ // 子要素が追加されるので最後から見ていく
                    kid = kids[ --j ];
                    switch( DOM_getTagName( kid ) ){
                        case 'A' :
                            if( needUpdate ){
                                g_CanUse_contentPusedoElement || createBaloon( kid );
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
                CSSOM_insertRule([
                    '.pbChrCS', 'background-position:0 -51px' // _ chr75
                ]);
            } else {
                blinkElements = null;
            };
            if( useAlphaPng ){
                CSSOM_insertRule([
                    '.pbAlp1' + ( g_CanUse_contentPusedoElement ? ',.pbAlp9[pbGhos]:before' : '' ), 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a10.png)',
                    '.pbAlp2' + ( g_CanUse_contentPusedoElement ? ',.pbAlp8[pbGhos]:before' : '' ), 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a20.png)',
                    '.pbAlp3' + ( g_CanUse_contentPusedoElement ? ',.pbAlp7[pbGhos]:before' : '' ), 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a30.png)',
                    '.pbAlp4' + ( g_CanUse_contentPusedoElement ? ',.pbAlp6[pbGhos]:before' : '' ), 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a40.png)',
                    '.pbAlp5', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a50.png)',
                    '.pbAlp6', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a60.png)',
                    '.pbAlp7', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a70.png)',
                    '.pbAlp8', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a80.png)',
                    '.pbAlp9', 'background-image:url(' + g_ASSET_PATH + 'pbLCD/x3_a90.png)'
                ]);
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
            g_CanUse_contentPusedoElement && useAlphaPng ? blinkCursor( b ) : _updateLCDSegment( b );
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
            var ghost     = DOM_getAttribute( b, 'pbGhos' ),
                ghostCode = ghost.substr( 1 ),
                cn        = b.className,
                csr       = cn.split( 'pbCsr' )[ 1 ] || '',
                alp       = cn.split( 'pbAlp' )[ 1 ] || '',
                ghostChr  = ghostCode === 'CS' ? '_' : pbCharCodeToChar( ghostCode ),
                chrCode, ghostAlp;

            csr = csr.split( ' ' )[ 0 ];
            alp = alp.split( ' ' )[ 0 ];
            ghostAlp = 10 - parseFloat( alp );

            if( pbLCD_fallbackImgPositions && alp ){
                chrCode = cn.split( 'pbChr' )[ 1 ];
                chrCode = chrCode.split( ' ' )[ 0 ];
                createFallbackImage( b, chrCode, alp, b.innerHTML );
                if( ghost ){
                    createFallbackImage( b, ghostCode, ghostAlp, ghostChr );
                };
                DOM_setStyle( b, 'backgroundImage', 'none' );
            } else if( ghost ){
                elm = DOM_prev(
                    b, 'b',
                    { className : [ 'pbChr' + ghostCode + ' pbAlp' + ghostAlp + ' pbCsr' + csr ] }, 0, ghostChr 
                );
                blinkCursor( b );
                blinkCursor( elm );
            } else {
                blinkCursor( b );
            };
        };

        function createFallbackImage( b, chrCode, alp, str ){
            var css = pbLCD_fallbackImgPositions[ chrCode + ( isPB120orFX795P ? 'a' : '' ) ] || pbLCD_fallbackImgPositions[ chrCode ],
                elm;
            
            css.top += 'px';

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

if( ua[ 'WebKit' ] < 525.13 ){ // Safari3-
    g_html.onclick = function( e ){
        if( pbLCD_safariPreventDefault ){
            pbLCD_safariPreventDefault = false;
            e.preventDefault();
            return false;
        };
    };
};