
(function( document ){

var PB100 = window[ 'PB100' ] = {
    'CDN_PATH' : '',
    'Timer'    : {},
    'DOM'      : {}
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

    if( targetSheet.addRule ){
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

if( ua[ 'IE' ] < 5 ){
    Timer[ '_cb' ] = onTimer;
};

Timer[ 'set' ] = function( callback, param ){
    if( !TIMERS.length ){
        setTimeout( ua[ 'IE' ] < 5 ? 'PB100.Timer._cb()' : onTimer, 64 );
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
    DOM_;

DOM[ 'create' ] = function( parentNode, tag, attrs, styles, text ){
    var elm = document.createElement( tag );

    parentNode.appendChild( elm );

    if( attrs ){
        DOM_attr( elm, attrs );
    };

    if( styles ){
        DOM_css( elm, styles );
    };

    if( text ){
        elm.appendChild( document.createTextNode( text ) );
    };

    return elm;
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

DOM[ 'add' ] = function( parentNode, elm, indexOrOperator ){
    // indexOrOperator -n ~ 0 ~ n, 'prev', 'next'
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
                elm.className = classOrClassList.join( ' ' );
            } else {
                elm.className = classOrClassList;
            };
            break;
    };
};

})( document );
