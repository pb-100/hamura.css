var p_strFromCharCode   = String.fromCharCode,
    p_canUseFilter      = !p_Trident && ( p_style[ 'filter' ] !== undefined || p_style[ '-webkit-filter' ] !== undefined ),
    p_BLINKING_ELEMENTS = [],
    p_blinkingFlag,
    p_blinkElements = function(){
        p_blinkingFlag = !p_blinkingFlag;
    
        for( var i = -1, elm; elm = p_BLINKING_ELEMENTS[ ++i ]; ){
            p_DOM_setStyle( elm, 'display', p_blinkingFlag ? '' : 'none' );
        };
    };

    function p_setBlinkingIfCursor( elm ){
        if( p_Presto < 7.2 ){
            if( p_DOM_hasClassName( elm, 'pbChrCS' ) ){
                if( !p_BLINKING_ELEMENTS.length ){
                    setInterval( p_blinkElements, 500 );
                };
                if( p_BLINKING_ELEMENTS.indexOf( elm ) === -1 ){
                    p_BLINKING_ELEMENTS.push( elm );
                };
            };
        } else {
            p_blinkElements = null;
        };
    };