if( !p_canuseNativeForcedColors ){
    p_listenForcedColorsChange(
        function( forcedColorsState ){
            p_DOM_removeClassName( p_body, 'jsHcm' );
            p_DOM_removeClassName( p_body, 'jsHcmWob' );
            p_DOM_removeClassName( p_body, 'jsHcmBow' );
            if( forcedColorsState ){
                if( p_cssTransformName || p_Trident === 9 || ( 5.5 <= p_Trident && p_Trident < 9 && p_iefilterEnabled ) ){
                    p_DOM_addClassName( p_body, 'jsCanRotate' );
                };
                switch( forcedColorsState ){
                    case 1 :
                        p_DOM_addClassName( p_body, 'jsHcm' );
                        break;
                    case 2 :
                        p_DOM_addClassName( p_body, 'jsHcmWob' );
                        break;
                    case 3 :
                        p_DOM_addClassName( p_body, 'jsHcmBow' );
                        break;
                };
            } else {
                p_DOM_removeClassName( p_body, 'jsCanRotate' );
            };
        }
    );
};