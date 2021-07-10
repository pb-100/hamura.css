// NDS には 1px
function getCharPositionX( charCode, opt_dotSize, opt_isPB120orFX795P ){
    if( charCode + '' === charCode ){
        if( charCode.charAt( 2 ) === 'a' ){
            opt_isPB120orFX795P = true;
            charCode = charCode.substr( 0, 2 );
        };
        if( charCode === 'CS' ){
            charCode = p_Trident < 9 || p_Presto < 9.5 || ( p_Gecko && !p_FirefoxGte35 ) ? 1 : 132;
        } else {
            charCode = parseInt( charCode, 16 );
        };
    };
    if( opt_isPB120orFX795P ){
        if( charCode === 50 ) charCode = 128;
        if( 102 < charCode && charCode < 108 ) charCode += 24;
    };
    opt_dotSize = opt_dotSize || 2;
    return ( charCode - 1 ) * -( opt_dotSize * 6 );
};

function getCharPositionY( opacity, opt_dotSize ){
    opt_dotSize = opt_dotSize || 3;
    return ( 10 - opacity ) * -( opt_dotSize * 8 );
};