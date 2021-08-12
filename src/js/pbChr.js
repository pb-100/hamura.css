p_listenCssAvailabilityChange(
    function( cssAvailability ){
        if( cssAvailability ){
            var cursols = p_DOM_getElementsByClassNameFromDocument( 'pbChrCS' ),
                i = 0, l = cursols.length;

            for( ; i < l; ++i ){
                p_setBlinkingIfCursor( cursols[ i ] );
            };

            return true;
        };
    }
);