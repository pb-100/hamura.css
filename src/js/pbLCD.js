var pbLCD_toolTipElements = [];
var pbLCD_opacityFixForGecko11 = [];

p_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( !cssAvailability ) return;

        var boxModelFix = p_Trident < 6 ? 2 : 0,
            alphaByPng  = p_Presto < 7.2 || p_Gecko < 0.9 || p_Tasman,
            hasAlphaBug = p_Gecko === 1.1,
            hasPaintBug = p_Gecko < 1.4,
            samps       = p_DOM_getElementsByTagNameFromDocument( 'SAMP' ),
            isIE8       = p_Trident === 8,
            grade       = p_cssGeneratedContentGrade,
            samp, elm,
            isPB120orFX795P,
            i, j, k, kids, kid, _kids;

        if( p_iefilterEnabled ){
            p_DOM_addClassName( p_body, 'pbLCD-AX' );
        };

        if( samps.length ){
            for( i = -1; samp = samps[ ++i ]; ){
                if( !p_DOM_hasClassName( p_DOM_getParentNode( samp ), 'pbLCD' ) ) continue;        

                isPB120orFX795P = p_DOM_hasClassName( samp, 'PB-120' ) || p_DOM_hasClassName( samp, 'FX-795P' );

                kids = p_DOM_getChildren( samp );
                for( j = kids.length; kid = kids[ --j ]; ){ // 子要素が追加されるので最後から見ていく
                    switch( p_DOM_getTagName( kid ) ){
                        case 'A' :
                            if( grade < 2 || isIE8 ){ // IE8 は cssGeneratedContent に filter が利かない為, div を生成する.
                                createToolTip( kid );
                            };
                            if( grade < 2 ){
                                _kids = p_DOM_getChildren( kid );
                                for( k = _kids.length; k; ){ // 子要素が追加されるので最後から見ていく
                                    updateLCDSegment( _kids[ --k ], true );
                                };
                            };
                            if( p_cloudRendering ){
                                p_DOM_setAttribute( kid, 'href', 'javascript:void(0)' );
                            } else {
                                p_addEventListener( kid, 'click', pbLCD_onClickBalloon );
                                pbLCD_toolTipElements.push( kid );
                            };
                            break;
                        case 'B' :
                            grade < 2 && updateLCDSegment( kid, false );
                    };
                };
            };
        };
        return true;

        function createToolTip( a ){
            var settings = p_DOM_getAttribute( a, 'pbTip' ),
                div;

            if( settings ){
                var char0   = settings.charAt( 0 ),
                    dirDown = char0 === '_',
                    index   = ( dirDown ? settings.charAt( 2 ) : char0 ).toUpperCase().charCodeAt( 0 ) - 65;

                if( !isIE8 ){
                    var content = p_DOM_getAttribute( a, 'title' );

                    p_DOM_removeAttribute( a, 'pbTip' );
                    p_DOM_removeAttribute( a, 'title' );

                    div = p_DOM_insertElement(
                        a, 'div',
                        {
                            className : 'pbTip' + ( dirDown ? 'Btm' : '' ),
                            style     : {
                                width : content.length + boxModelFix + 'em',
                                left : ( index * 7 - 5 ) + 'px'
                            }
                        },
                        content
                    );
                    // tail
                    p_DOM_insertElement( div, 'div' );
                } else {
                    // tail
                    p_DOM_insertElement( a, 'div', { style : { left : ( index * 7 + 3 ) + 'px' } } );
                }
            };
            if( hasPaintBug && 0 <= a.className.indexOf( 'pbColor' ) ){
                p_DOM_insertElement( a, 'u' );
            };
        };

        function pbCharCodeToChar( code ){
            if( code.length === 3 ) code = code.substr( 0, 2 ); // XXa -> XX
            return CHAR_TABLE[ parseInt( code, 16 ) ] || '~';
        };

        function updateLCDSegment( b, parentIsAnchorElement ){
            var ghost    = p_DOM_getAttribute( b, 'pbGhst' ),
                cn       = b.className,
                csr      = cn.split( 'pbCsr' )[ 1 ] || '',
                alp      = cn.split( 'pbAlp' )[ 1 ] || '',
                ghostChr = ghost === 'CS' ? '_' : pbCharCodeToChar( ghost ),
                chrCode, ghostAlp, css;

            csr = csr.split( ' ' )[ 0 ];
            alp = parseFloat( alp.split( ' ' )[ 0 ] );

            if( alp ){
                if( alphaByPng ){
                    chrCode = cn.split( 'pbChr' )[ 1 ].split( ' ' )[ 0 ];
                    p_DOM_setStyle( b, 'backgroundPosition', getCharPositionX( chrCode, 2, isPB120orFX795P ) + 'px ' + getCharPositionY( alp ) + 'px' );
                }
                if( !parentIsAnchorElement && hasAlphaBug ){ // https://github.com/pb-100/hamura.css/issues/21, a の下に移動すると opacity が効く. この処理が無いと要素が消える!
                    p_DOM_insertElementBefore( b, 'a' ).appendChild( b );
                };
            };

            if( ghost ){
                ghostAlp = 10 - alp;

                if( alphaByPng ){
                    css = { backgroundPosition : getCharPositionX( ghost, 2, isPB120orFX795P ) + 'px ' + getCharPositionY( ghostAlp ) + 'px' };
                };
                p_DOM_removeAttribute( b, 'pbGhst' );

                elm = p_DOM_insertElementBefore(
                    b, 'b',
                    { className : 'pbChr' + ghost + ' pbCsr' + csr + ' pbAlp' + ghostAlp, style : css },
                    ghostChr 
                );
                p_setBlinkingIfCursor( elm );
            };
            p_setBlinkingIfCursor( b );
        };
    }
);

/**
 * @param {!Event} e 
 */
function pbLCD_onClickBalloon( e ){
    this.focus();
    e.preventDefault();
    e.stopPropagation();
};

p_listenUnloadEvent(
    function(){
        var elm;

        while( elm = pbLCD_toolTipElements.shift() ){
            p_removeEventListener( elm, 'click', pbLCD_onClickBalloon );
        };
    }
);

/*
 * http://archiva.jp/web/html-css/ie6_background_flickr.html
 * hover時の背景画像ちらつきに対処する
 * この問題はIE6固有の問題であり、他のモダンブラウザやIE5等では発現しない。
 */
if( p_Trident === 6 ){
    // multipleIEs IE6 standalone 版でエラーになる為 try catch で囲む
    // IE 5 以下で try catch 文は構文エラーになる為、関数を文字列から生成する
	( new Function( 'd', 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}' ) )( document );
};