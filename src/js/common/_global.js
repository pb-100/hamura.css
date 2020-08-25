var g_strFromCharCode = String.fromCharCode,
    g_ASSET_PATH      = g_isSecure ? HAMURA_CSS_DEFINE_ASSET_HTTPS : HAMURA_CSS_DEFINE_ASSET_HTTP,
    g_canUseFilter    = !g_Trident && ( g_style[ 'filter' ] !== undefined || g_style[ '-webkit-filter' ] !== undefined );
