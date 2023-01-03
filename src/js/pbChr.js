if( p_Gecko < 1.9 ){
    p_listenCssAvailabilityChange(
        function( cssAvailability ){
            if( cssAvailability ){
                var elms = p_DOM_getElementsByTagNameFromDocument( '*' ),
                    i = 0, l = elms.length, elm;
    
                for( ; i < l; ++i ){
                    elm = elms[ i ];
                    if( p_DOM_getTagName( elm ) !== 'B' && ( ' ' + elm.className ).toLowerCase().indexOf( ' pbchr' ) !== -1 ){
                        if( !p_DOM_hasAttribute( elm, 'title' ) ){
                            p_DOM_setAttribute( elm, 'title', elm.textContent );
                        };
                        elm.textContent = ' ';
                    };
                };

                return true;
            };
        }
    );
};

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