var p_BLINK_SVG = ( p_Trident === 9 || 2 <= p_Gecko ) && !p_canuseNativeForcedColors;

var p_BLINKING_ELEMENTS = [];

var p_blinkingFlag;
var p_blinkingTimerID;

/** @type {!Function|undefined} */
var p_blinkElements = p_Presto < 7.2 ? function(){
    p_blinkingFlag = !p_blinkingFlag;

    for( var i = -1, elm; elm = p_BLINKING_ELEMENTS[ ++i ]; ){
        if( elm.className.indexOf( 'pbAlp' ) !== -1 ){
            p_DOM_setStyle( elm, 'display', p_blinkingFlag ? '' : 'none' )
        } else {
            p_DOM_addClassName( elm, p_blinkingFlag ? 'pbChrCS' : 'pbChr00' );
            p_DOM_removeClassName( elm, p_blinkingFlag ? 'pbChr00' : 'pbChrCS' );
        };
    };
} : p_BLINK_SVG ? function(){
    p_blinkingFlag = !p_blinkingFlag;

    for( var i = -1, elm; elm = p_BLINKING_ELEMENTS[ ++i ]; ){
        p_DOM_setStyle( elm, 'opacity', p_blinkingFlag ? 1 : 0 ); // visibility は不可
    };
} : undefined;

p_setBlinkingIfCursor = function ( elm ){
    if( p_blinkElements ){
        if( p_DOM_hasClassName( elm, 'pbChrCS' ) ){
            if( !p_BLINKING_ELEMENTS.length && p_Presto ){
                setInterval( p_blinkElements, 400 );
            };
            if( p_BLINKING_ELEMENTS.indexOf( elm ) === -1 ){
                p_BLINKING_ELEMENTS.push( elm );
            };
        };
    } else {
        p_BLINKING_ELEMENTS = undefined;
    };
};

if( p_BLINK_SVG ){
    p_listenForcedColorsChange(
        function( forcedColorsState ){
            if( forcedColorsState ){
                if( !p_blinkingTimerID ){
                    p_blinkingTimerID = setInterval( p_blinkElements, 400 );
                };
            } else {
                clearInterval( p_blinkingTimerID );
                p_blinkingTimerID = 0;
            };
        }
    );
};
