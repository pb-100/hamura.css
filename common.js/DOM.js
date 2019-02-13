var DOM_insert;

function DOM_justCreate( tag, html ){
    var elm = document.createElement( tag );

    if( html ) elm.innerHTML = html;
    return elm;
}

function DOM_create( targetNode, tag, attrs, styles, text ){
    var elm, isStyle, parent;

    if( tag === 'style' ){
        // http://d.hatena.ne.jp/miya2000/20070327/p0
        // 最初に style でないノードが無いと style が生成されない
        isStyle = true;
        elm = DOM_justCreate( 'div', 'a<style type="text\/css">' + text + '<\/style>' ).lastChild;
    } else {
        elm = DOM_justCreate( tag );
    };

    if( DOM_insert ){ // 1:insertBefore or 2:insertAfter
        parent = targetNode.parentNode;
        if( DOM_insert === 2 ){
            targetNode = targetNode.nextSibling;
        };
        if( targetNode ){
            parent.insertBefore( elm, targetNode );
        } else {
            DOM_add( parent, elm );
        };
    } else {
        DOM_add( targetNode, elm );
    };
    DOM_insert = 0;

    attrs && DOM_attr( elm, attrs );
    styles && DOM_css( elm, styles );
    text && !isStyle && DOM_add( elm, document.createTextNode( text ) );
    return elm;
};

function DOM_prev( targetNode, tag, attrs, styles, text ){
    DOM_insert = 1;
    return DOM_create( targetNode, tag, attrs, styles, text );
};

function DOM_next( targetNode, tag, attrs, styles, text ){
    DOM_insert = 2;
    return DOM_create( targetNode, tag, attrs, styles, text );
};

function DOM_attr( elm, attrs ){
    var k;

    if( attrs === '' + attrs ){
        return elm.getAttribute( attrs );
    };

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

function DOM_css( elm, styles ){
    var elmStyle = elm.style, k;

    for( k in styles ){
        elmStyle[ k ] = styles[ k ];
    };
};

function DOM_add( targetNode, elm, indexOrOperator ){
    // indexOrOperator -n ~ 0 ~ n, 'prev', 'next'
    targetNode.appendChild( elm );
};

function DOM_remove( elm ){
    var p = elm.parentNode;
    
    if( p && p.tagName ){
        p.removeChild( elm );
    };
};

function DOM_className( elm, classOrClassList, operator ){
    var isList = typeof classOrClassList === 'object',
        cname  = elm.className,
        cnames = cname.split( ' ' ),
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
                if( !DOM_className( elm, classOrClassList, '?' ) ){
                    cnames.push( classOrClassList );
                    DOM_className( elm, cnames );
                };
                break;
            };
        case '-' :
            if( !isList ){
                if( ( i = cnames.indexOf( classOrClassList ) ) !== -1 ){
                    cnames.splice( i, 1 );
                    DOM_className( elm, cnames );
                };
                break;
            };
        case '~' :
            if( isList ){
                while( cn = classOrClassList[ ++i ] ){
                    DOM_className( elm, cn, operator ); // + - の list もここで処理される
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
                return ( ' ' + cname + ' ' ).indexOf( ' ' + classOrClassList + ' ' ) !== -1;
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