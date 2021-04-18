"use strict";
function main(){
    var FONTS              = [],
        FONT_WIDTH         = getNumber( 'fontWidth' ),
        FONT_HEIGHT        = getNumber( 'fontHeight' ),
        DESCENT            = getNumber( 'descent' ),
        ASCENT             = FONT_HEIGHT - DESCENT,
        DOT_WIDTH          = getNumber( 'dotWidth' ),
        DOT_HEIGHT         = getNumber( 'dotHeight' ),
        DOT_GAP_HORIZONTAL = getNumber( 'dotGapH' ),
        DOT_GAP_VERTICAL   = getNumber( 'dotGapV' ),
        HORIZONTAL_MARGIN  = ( FONT_WIDTH - DOT_WIDTH * 5 - DOT_GAP_HORIZONTAL * 4 ) / 2 | 0,
        BOTTOM_MARGIN      = DESCENT,
        // TOP_MARGIN         = FONT_HEIGHT - BOTTOM_MARGIN - DOT_WIDTH * 7 - DOT_GAP_VERTICAL * 6,
        elmOutp            = document.getElementById( 'output' ),
        elmTmpl            = document.getElementById( 'templete' ),
        strTmpl            = elmTmpl.value
                                .split( '#{fontWidth}' ).join( FONT_WIDTH )
                                .split( '#{fontHeight}' ).join( FONT_HEIGHT )
                                .split( '#{ascent}' ).join( ASCENT )
                                .split( '#{descent}' ).join( - DESCENT ),
        i, noMargin;

    function getNumber( id ){
        return parseFloat( document.getElementById( id ).value ) | 0;
    };

    // skip SPACE, + ~ Z
    for( i = 1; i < 58; ++i ){
        createFont(i);
    };
    // 下付き-
    noMargin = true;
    createFont(62);
    noMargin = false;
    // ^ a - z
    for( i = 63; i < 90; ++i ){
        createFont(i);
    };
    // symbols
    for( i = 92; i < 124; ++i ){
        createFont(i);
    };

    // output
    i = strTmpl.indexOf( '</font>' );
    elmOutp.value = strTmpl.substr( 0, i ) + FONTS.join( '\n' ) + strTmpl.substr( i );

    function createFont( charCode ){
        var index   = charCode % 16,
            pbCode  = (('0' + charCode.toString(16).toLowerCase()).substr(-2)),
            hex2    = (('0' + HEX_CODES[ charCode ].toString(16).toLowerCase()).substr(-2)),
            hex4    = (('000' + HEX_CODES[ charCode ].toString(16).toUpperCase()).substr(-4)),
            bitMaps = PB_FONT_BIT_MAP_DATA[ charCode / 16 | 0 ],
            offsetX = DOT_WIDTH  + DOT_GAP_HORIZONTAL,
            offsetY = DOT_HEIGHT + DOT_GAP_VERTICAL,
            bitMap = '', d = '', i, x, y, h, v;

        for( i = 0; i < 560; i += 80 ){
            bitMap += bitMaps.substr( i + index * 5, 5 );
        };

        for( i = 0; i < 35; ++i ){
            if( bitMap.charAt( i ) === ' ' ) continue;
            h = noMargin ? 0 : HORIZONTAL_MARGIN;
            v = BOTTOM_MARGIN; //TOP_MARGIN;
            x = ( i % 5 ) * offsetX + h;
            y = ( 6 - ( ( i / 5 ) | 0 ) ) * offsetY + v;
            d += 'M' + x + ' ' + y + 'h' + DOT_WIDTH + 'v-' + DOT_HEIGHT + 'h-' + DOT_WIDTH + 'v' + DOT_HEIGHT + 'z';
        };
        FONTS.push( '<glyph unicode="&#x' +
            ( hex4.substr( 0, 2 ) === '00' ? hex2 : hex4.toLowerCase() ) +
            ';" glyph-name="pbfont' + pbCode + '_0x' + hex4 + '" horiz-adv-x="' + FONT_WIDTH + '" d="' + d + '"/>' );
    };
};
