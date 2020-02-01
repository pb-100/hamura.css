var PB100 = PB100 || {};

var g_strFromCharCode = String.fromCharCode,
    g_ASSET_PATH      = g_isSecure ? DEFINE_ASSET_HTTPS : DEFINE_ASSET_HTTP,
    g_canUseFilter    = !g_Trident && ( g_style[ 'filter' ] !== undefined || g_style[ '-webkit-filter' ] !== undefined ),
    g_canUseIeFilter;

g_Event_listenLoadEvent(
    function(){
        g_canUseIeFilter = g_CanUse_iefilter && g_Trident === 9;
        
        !g_canUseFilter && !g_canUseIeFilter && DOM_addClassName( g_body, 'jsNoFilter' );
    }
);