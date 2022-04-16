if( !p_canuseNativeForcedColors ){
    p_listenForcedColorsChange(
        function( forcedColorsState ){
            if( forcedColorsState ){
                p_DOM_setAttribute(
                    p_html,
                    'forced-colors',
                    forcedColorsState === 2 ? 'lod' :
                    forcedColorsState === 3 ? 'dol' : 'active'
                );

                if( p_cssTransformName || p_Trident === 9 || ( 5.5 <= p_Trident && p_Trident < 9 && p_iefilterEnabled ) ){
                    p_DOM_addClassName( p_html, 'jsCanRotate' );
                };
            } else {
                p_DOM_removeAttribute( p_html, 'forced-colors' );
                p_DOM_removeClassName( p_html, 'jsCanRotate' );
            };
        }
    );
};