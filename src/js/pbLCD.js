var pbLCD_toolTipElements = [];

p_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( !cssAvailability ) return;

        var boxModelFix = p_Trident < 6 ? 2 : 0,
            samps       = p_DOM_getElementsByTagNameFromDocument( 'SAMP' ),
            isIE8       = p_Trident === 8,
            isIE5x      = 5 <= p_Trident && p_Trident < 6,
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
                for( j = kids.length; j; ){ // 子要素が追加されるので最後から見ていく
                    kid = kids[ --j ];
                    switch( p_DOM_getTagName( kid ) ){
                        case 'A' :
                            if( p_cssGeneratedContentGrade < 2 || isIE8 ){ // IE8 は cssGeneratedContent に filter が利かない為, div を生成する.
                                createToolTip( kid );
                            };
                            if( p_cssGeneratedContentGrade < 2 ){
                                _kids = p_DOM_getChildren( kid );
                                for( k = _kids.length; k; ){ // 子要素が追加されるので最後から見ていく
                                    !isIE8 && updateLCDSegment( _kids[ --k ] );
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
                            p_cssGeneratedContentGrade < 2 && updateLCDSegment( kid );
                    };
                };
            };
        };
        return true;

        function createToolTip( a ){
            var settings = p_DOM_getAttribute( a, 'pbTip' ),
                char0    = settings.charAt( 0 ),
                dirDown  = char0 === '_',
                position = dirDown ? settings.charAt( 2 ) : char0,
                dir      = dirDown ? 'Btm' : '',
                content  = p_DOM_getAttribute( a, 'title' );

            if( !isIE8 ){
                p_DOM_removeAttribute( a, 'pbTip' );
                p_DOM_removeAttribute( a, 'title' );

                p_DOM_addClassName( a, 'pbTipPos' + position.toUpperCase() );

                p_DOM_insertElement(
                    a, 'div',
                    { className : 'pbTip' + dir, style : { width : content.length + boxModelFix + 'em' } },
                    content
                );
            };
            p_DOM_insertElement(
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
            if( p_cssGeneratedContentGrade < 2 ){
                createGhost( b );
            };
        };

        function createGhost( b ){
            var ghost     = p_DOM_getAttribute( b, 'pbGhst' ),
                cn        = b.className,
                csr       = cn.split( 'pbCsr' )[ 1 ] || '',
                alp       = cn.split( 'pbAlp' )[ 1 ] || '',
                ghostChr  = ghost === 'CS' ? '_' : pbCharCodeToChar( ghost ),
                ghostAlp, chrCode, css;

            csr = csr.split( ' ' )[ 0 ];
            alp = parseFloat( alp.split( ' ' )[ 0 ] );
            ghostAlp = 10 - alp;

            if( alp && p_Presto < 7.2 ){
                chrCode = cn.split( 'pbChr' )[ 1 ];
                chrCode = chrCode.split( ' ' )[ 0 ];
                p_DOM_setStyle( b, 'backgroundPosition', getCharPositionX( chrCode, 2, isPB120orFX795P ) + 'px ' + getCharPositionY( alp ) + 'px' );
            };

            if( ghost ){
                if( p_Presto < 7.2 ){
                    css = { backgroundPosition : getCharPositionX( ghost, 2, isPB120orFX795P ) + 'px ' + getCharPositionY( ghostAlp ) + 'px' };
                    // alert( getCharPositionX( parseInt( chrCode, 16 ) ) + 'px ' + getCharPositionY( alp ) + 'px' )
                };
                p_DOM_removeAttribute( b, 'pbGhst' );
                elm = p_DOM_insertElementBefore(
                    b, 'b',
                    { className : 'pbChr' + ghost + ' pbAlp' + ghostAlp + ' pbCsr' + csr, style : css },
                    ghostChr 
                );
                p_setBlinkingIfCursor( elm );
            };
            p_setBlinkingIfCursor( b );
        };
    }
);

function pbLCD_onClickBalloon( e ){
    this.focus();
    e.preventDefault();
    e.stopPropagation();
};

p_listenUnloadEvent(
    function( elm ){
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