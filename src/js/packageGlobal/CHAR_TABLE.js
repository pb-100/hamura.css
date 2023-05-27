var
CHAR_TABLE = [
    ' ' , '+' , '-' , '*' , '/' , '↑', '!' , '"' , '#', '$',  '>' , '≧', '=' , '≦', '<' , '≠',
    '0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8', '9',  '.' , 'π', ')' , '(' , 'Ē' , 'ᴇ',
    'A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I', 'J',  'K' , 'L' , 'M' , 'N' , 'O' , 'P',
    'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y', 'Z',  'ᴅ' , 'ʟ' , 'γ', '⇔', 'σ', '┨' ,
    'a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i', 'j',  'k' , 'l' , 'm' , 'n' , 'o' , 'p',
    'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y', 'z',  '“', '”', '?' , ',' , ';' , ':',
    '○', 'Σ', '°', '△', '@' , '×', '÷', '♠' , '←', '♥', '♦' , '♣' , 'μ', 'Ω', '↓', '→',
    '%', p_strFromCharCode(165),
                '□', '[',  '&' , '_' , "'" , '・', ']' , '■', '\\', '▓', '╱' , 'ы', 'ć'
],
CHAR_QUOT               = CHAR_TABLE[   7 ],
CHAR_YEN                = CHAR_TABLE[ 113 ],
CHAR_NBSP               = p_strFromCharCode(  160 ),
CHAR_ENSP               = p_strFromCharCode( 8194 ),
CHAR_FPN                = CHAR_TABLE[ 31 ],
CHAR_LEGACY_FPN         = 'ₑ',

HOMOGLYPH_FPN_LE        = CHAR_TABLE[ 30 ],
HOMOGLYPH_LEGACY_FPN_LE = 'ê',
HOMOGLYPH_MINUS_1       = CHAR_TABLE[ 63 ],
HOMOGLYPH_B_SLASH       = CHAR_TABLE[ 125 ],
HOMOGLYPH_SLASH_C       = CHAR_TABLE[ 126 ],
HOMOGLYPH_BCR           = p_strFromCharCode( 0xe900 ),

LIGATURE_FPN_LE         = 'ᴇ⁻',
LIGATURE_LEGACY_FPN_LE  = 'ₑ₋',
LIGATURE_MINUS_1        = '₋₁',
LIGATURE_BCR            = 'ᵇ/ᴄ',
LIGATURE_B_SLASH        = 'ᵇ/',
LIGATURE_SLASH_C        = '/ᴄ';