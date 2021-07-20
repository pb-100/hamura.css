var p_strFromCharCode = String.fromCharCode,
    p_canUseFilter    = !p_Trident && ( p_style[ 'filter' ] !== undefined || p_style[ '-webkit-filter' ] !== undefined );