g_Event_listenHighContrustModeChange(
    function( highContrustState ){
        DOM_removeClassName( g_body, 'jsHcm' );
        DOM_removeClassName( g_body, 'jsHcmWob' );
        DOM_removeClassName( g_body, 'jsHcmBow' );
        if( highContrustState ){
            if( g_CanUse_cssTransform || g_Trident === 9 || ( 5.5 <= g_Trident && g_Trident < 9 && g_CanUse_iefilter ) ){
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