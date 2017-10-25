
(function( document, ua ){

var String_fromCharCode = String.fromCharCode;

var PB100 = window[ 'PB100' ] = {
    'CDN_PATH'   : '',
    'Timer'      : {},
    'DOM'        : {},
    'CHAR_TABLE' : [
        ' ', '+', '-', '*', '/', '↑', '!', '"', '#', '$', '>', '≧', '=', '≦', '<', '≠',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', String_fromCharCode(960),
        ')', '(', String_fromCharCode(234), String_fromCharCode(8337),
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '', '', '', '', '', '',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '', '', '?', ',', ';', ':',
        '○', 'Σ', '°', '△', '@', '×', '÷',
        String_fromCharCode(9824), '←', String_fromCharCode(9829), String_fromCharCode(9830), String_fromCharCode(9827), String_fromCharCode(956),
        'Ω', '↓', '→',
        '%', String_fromCharCode(165),
        '□', '[', '&', '_', "'", '･', ']', '■', '\\', String_fromCharCode(9619)
    ]
};

var isW3C = !!document.getElementsByTagName,
    head  = (isW3C ? document.getElementsByTagName( 'HEAD' ) : document.all.tags( 'HEAD' ))[ 0 ],
    targetSheet, basePath = '', importIndex = -1;

function initAddRule(){
    var sheets = document.styleSheets,
        i = -1, sheet, href, elm;

    initAddRule = null;

    if( sheets ){
        for( ; sheet = sheets[ ++i ]; ){
            if( targetSheet = findSelectorText( sheet ) ) break;
        };
    };

    if( !targetSheet || !targetSheet.readOnly ){
        if( targetSheet ){
            href = targetSheet.href.split( '/' );
            href.pop();
            basePath = href.join( '/' ) + '/';
        } else {
            basePath = PB100[ 'CDN_PATH' ];
        };

        if( isW3C ){
            elm  = document.createElement( 'style' );
            head.appendChild( elm );
            elm.setAttribute( 'type', 'text/css' );
            targetSheet = elm.sheet;
        } else {
            head.insertAdjacentHTML( 'BeforeEnd', '<style type=text/css></style>' );
            targetSheet = sheets[ sheets.length - 1 ];
        };
    };

    function findSelectorText( sheet ){
        var rules = sheet.rules || sheet.cssRules,
            i = -1, rule, _sheet, res;

        while( rule = rules[ ++i ] ){
            if( 0 <= ( rule.selectorText || '' ).toLowerCase().indexOf( '.pblcd' ) ){
                return sheet;
            };
            if( _sheet = rule.sheet || rule.styleSheet ){
                if( res = findSelectorText( _sheet ) ) return res;
            };
        };

        //  if( rules = sheet.imports ){ // error at ie5.5
        // http://nonakaryuichi.github.io/css_import_sample/css_import.html
        if( sheet.imports && sheet.imports.length ){
            i = -1;
            while( _sheet = sheet.imports[ ++i ] ){
                if( res = findSelectorText( _sheet ) ) return res;
            };
        };
    };
};

PB100[ 'addCSS' ] = function( newRules ){
    var elm, selector, property, css = '', _css;

    initAddRule && initAddRule();

    while( newRules.length ){
        selector = newRules.shift();
        property = newRules.shift().split( 'base:' ).join( basePath );
        _css     = selector + '{' + property + '}';

        if( !targetSheet ){
            css += _css;
        } else if( targetSheet.addRule ){
            targetSheet.addRule( selector, property );
        } else if( targetSheet.insertRule ){
            targetSheet.insertRule( _css, targetSheet.cssRules.length );
        };
    };

    if( css ){
        // http://d.hatena.ne.jp/miya2000/20070327/p0
        elm = document.createElement('div');
        elm.innerHTML='_<style type="text\/css">' + css + '<\/style>';
        head.appendChild(elm.lastChild);
    };
};

PB100[ 'importCSS' ] = function( url ){
    initAddRule && initAddRule();

    url = url.split( 'base:' ).join( basePath );

    if( targetSheet.addImport ){
        targetSheet.addImport( url, ++importIndex );
    } else if( targetSheet.insertRule ){
        targetSheet.insertRule( '@import "' + url + '"', ++importIndex );
    };
};

var TIMERS = [], Timer = PB100[ 'Timer' ], timerUID = 0;

function onTimer(){
    var cb, i = TIMERS.length;

    while( i ){
        --i;
        cb = TIMERS.shift();
        cb.f( cb.p );
    };
};

if( ua[ 'IE' ] < 5 || ua[ 'MacIE' ] ){
    Timer[ '_cb' ] = onTimer;
    onTimer = 'PB100.Timer._cb()';
};

Timer[ 'set' ] = function( callback, param ){
    if( !TIMERS.length ){
        setTimeout( onTimer, 64 );
    };
    TIMERS.push( { f: callback, p : param, uid : ++timerUID } );

    return timerUID;
};

Timer[ 'clear' ] = function( uid ){
    var i = -1, cb;

    while( cb = TIMERS[ ++i ] ){
        if( cb.uid === uid ){
            TIMERS.splice( i, 1 );
            break;
        };
    };
    return 0;
};

var DOM = PB100[ 'DOM' ],
    DOM_insert = 0;

DOM[ 'create' ] = DOM_create;

function DOM_create( targetNode, tag, attrs, styles, text ){
    var elm, isStyle, next;

    if( tag === 'style' ){
        // http://d.hatena.ne.jp/miya2000/20070327/p0
        // 最初に style でないノードが無いと style が生成されない
        isStyle = true;
        elm = document.createElement( 'div' );
        elm.innerHTML = 'a<style type="text\/css">' + text + '<\/style>';
        elm = elm.lastChild;
    } else {
        elm = document.createElement( tag );
    };

    switch( DOM_insert ){
        case 1 : // insertBefore
            targetNode.parentNode.insertBefore( elm, targetNode );
            break;
        case 2 : // insertAfter
            if( next = targetNode.nextSibling ){
                targetNode.parentNode.insertBefore( elm, next );
                break;
            };
        case 0 :
            targetNode.appendChild( elm );
    };
    DOM_insert = 0;

    attrs && DOM_attr( elm, attrs );
    styles && DOM_css( elm, styles );
    text && !isStyle && elm.appendChild( document.createTextNode( text ) );
    return elm;
};

DOM[ 'prev' ] = function( targetNode, tag, attrs, styles, text ){
    DOM_insert = 1;
    return DOM_create( targetNode, tag, attrs, styles, text );
};
DOM[ 'next' ] = function( targetNode, tag, attrs, styles, text ){
    DOM_insert = 2;
    return DOM_create( targetNode, tag, attrs, styles, text );
};

DOM[ 'attr' ] = DOM_attr;

function DOM_attr( elm, attrs ){
    var k;

    for( k in attrs ){
        switch( k ){
            case 'class' :
            case 'className' :
                DOM_className( elm, attrs[ k ] );
                break;
            default :
                elm.setAttribute( k, attrs[ k ] );
                break;
        };
    }; 
};

DOM[ 'css' ] = DOM_css;

function DOM_css( elm, styles ){
    var elmStyle = elm.style, k;

    for( k in styles ){
        elmStyle[ k ] = styles[ k ];
    };
};

DOM[ 'add' ] = function( targetNode, elm, indexOrOperator ){
    // indexOrOperator -n ~ 0 ~ n, 'prev', 'next'
    targetNode.appendChild( elm );
};

DOM[ 'remove' ] = function( elm ){
    var p = elm.parentNode;
    
    if( p && p.tagName ){
        p.removeChild( elm );
    };
};

DOM[ 'className' ] = DOM_className;

function DOM_className( elm, classOrClassList, operator ){
    var isList = typeof classOrClassList === 'object',
        cnames = elm.className.split( ' ' ),
        i = -1, z, cn;

    z = cnames.length;
    while( z ){
        --z;
        if( !cnames[ z ] ) cnames.splice( z, 1 );
    };

    if( isList ){
        z = classOrClassList.length;
        while( z ){
            --z;
            if( !classOrClassList[ z ] ) classOrClassList.splice( z, 1 );
        };
    };

    switch( operator ){
        case '+' :
            if( !isList ){
                if( cnames.indexOf( classOrClassList ) === -1 ){
                    cnames.push( classOrClassList );
                    elm.className = cnames.join( ' ' );
                };
                break;
            };
        case '-' :
            if( !isList ){
                if( ( i = cnames.indexOf( classOrClassList ) ) !== -1 ){
                    cnames.splice( i, 1 );
                    elm.className = cnames.join( ' ' );
                };
                break;
            };
        case 'XOR' :
            if( isList ){
                while( cn = classOrClassList[ ++i ] ){
                    DOM_className( elm, cn, operator );
                };
            } else {
                if( DOM_className( elm, classOrClassList, '?' ) ){
                    DOM_className( elm, classOrClassList, '-' );
                } else {
                    DOM_className( elm, classOrClassList, '+' );
                };
            };
            break;
        case '?' :
            if( isList ){
                while( cn = classOrClassList[ ++i ] ){
                    if( !DOM_className( elm, cn, operator ) ) return false;
                };
                return true;
            } else {
                return ( ' ' + elm.className + ' ' ).indexOf( ' ' + classOrClassList + ' ' ) !== -1;
            };
            break;
        default :
            if( isList ){
                classOrClassList = classOrClassList.join( ' ' );
            };
            elm.className = classOrClassList;
            break;
    };
};

})( document, ua );
