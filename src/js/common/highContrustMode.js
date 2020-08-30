if( g_Trident < 10 || ( g_Windows && ( 44 <= g_Gecko || g_Goanna ) ) ){
    g_listenHighContrustModeChange(
        function( highContrustState ){
            DOM_removeClassName( g_body, 'jsHcm' );
            DOM_removeClassName( g_body, 'jsHcmWob' );
            DOM_removeClassName( g_body, 'jsHcmBow' );
            if( highContrustState ){
                if( g_cssTransformName || g_Trident === 9 || ( 5.5 <= g_Trident && g_Trident < 9 && g_iefilterEnabled ) ){
                    DOM_addClassName( g_body, 'jsCanRotate' );
                };
                switch( highContrustState ){
                    case 1 :
                        DOM_addClassName( g_body, 'jsHcm' );
                        break;
                    case 2 :
                        DOM_addClassName( g_body, 'jsHcmWob' );
                        break;
                    case 3 :
                        DOM_addClassName( g_body, 'jsHcmBow' );
                        break;
                };
            } else {
                DOM_removeClassName( g_body, 'jsCanRotate' );
            };
        }
    );
};