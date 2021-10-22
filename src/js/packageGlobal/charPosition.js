// TODO NDS, NDSi, 3DS 用には 1px x 1px のフォント
/**
 * @param {string|number} charCode 
 * @param {number=} opt_dotSize 
 * @param {boolean=} opt_isPB120orFX795P 
 * @returns {number}
 */
function getCharPositionX( charCode, opt_dotSize, opt_isPB120orFX795P ){
    if( charCode + '' === charCode ){ // <- typeof charCode === 'string'
        if( charCode.charAt( 2 ) === 'a' ){
            opt_isPB120orFX795P = true;
            charCode = charCode.substr( 0, 2 );
        };
        if( charCode === 'CS' ){
            charCode = p_Presto  < 7.2                           ? 117 :
                       p_Trident < 9 || p_Presto < 9 || p_Tasman ?   1 : 132;
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

/**
 * @param {number} opacity 
 * @param {number=} opt_dotSize 
 * @returns {number}
 */
function getCharPositionY( opacity, opt_dotSize ){
    opt_dotSize = opt_dotSize || 3;
    return ( 10 - opacity ) * -( opt_dotSize * 8 );
};