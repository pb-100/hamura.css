var g_strFromCharCode = String.fromCharCode,
    g_ASSET_PATH      = g_isSecure ? DEFINE_ASSET_HTTPS : DEFINE_ASSET_HTTP,
    g_canUseFilter    = !g_Trident && ( g_style[ 'filter' ] !== undefined || g_style[ '-webkit-filter' ] !== undefined );
