g_Event_listenHighContrustModeChange(
    function( highContrustState ){
        if( highContrustState ){
            if( g_CanUse_cssTransform || g_Trident === 9 || ( 5.5 <= g_Trident && g_Trident < 9 && g_CanUse_iefilter ) ){
                DOM_addClassName( g_body, 'jsCanRotate' );
            };
        } else {
            DOM_removeClassName( g_body, 'jsCanRotate' );
        };
    }
);