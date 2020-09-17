var g_strFromCharCode = String.fromCharCode,
    g_canUseFilter    = !g_Trident && ( g_style[ 'filter' ] !== undefined || g_style[ '-webkit-filter' ] !== undefined );
