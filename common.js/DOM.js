var DOM_insert;

function DOM_getAllElements(){
    var elms = document.all || DOM_getElementsByTagName('*'),
        ret = [], i = elms.length;

    while( i ) ret[ --i ] = elms[ i ];
    return ret;
};

function DOM_justCreate( tag, html ){
    var elm = DOM_createElement( tag );

    if( html ) DOM_setHTML( elm, html );
    return elm;
}

function DOM_createThenAdd( targetNode, tag, attrs, styles, text ){
    var elm, isStyle;

    if( tag === 'style' ){
        // http://d.hatena.ne.jp/miya2000/20070327/p0
        // 最初に style でないノードが無いと style が生成されない
        isStyle = true;
        elm = DOM_justCreate( 'div', 'a<style type="text\/css">' + text + '<\/style>' ).lastChild;
    } else {
        elm = DOM_justCreate( tag );
    };

    if( DOM_insert ){ // 1:insertBefore or 2:insertAfter
        if( DOM_insert === 2 ){
            targetNode = targetNode.nextSibling;
        };
        if( targetNode ){
            DOM_insertBefore( elm, targetNode );
        } else {
            DOM_appendChild( DOM_getParentElement( targetNode ), elm );
        };
    } else {
        DOM_appendChild( targetNode, elm );
    };
    DOM_insert = 0;

    attrs && DOM_attr( elm, attrs );
    styles && DOM_css( elm, styles );
    text && !isStyle && DOM_appendChild( elm, document.createTextNode( text ) );

    function DOM_attr( elm, attrs ){
        var k;
    
        for( k in attrs ){
            switch( k ){
                case 'class' :
                case 'className' :
                    DOM_addClassName( elm, attrs[ k ] );
                    break;
                default :
                    DOM_setAttribute( elm, k, attrs[ k ] );
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

    return elm;
};

function DOM_prev( targetNode, tag, attrs, styles, text ){
    DOM_insert = 1;
    return DOM_createThenAdd( targetNode, tag, attrs, styles, text );
};

function DOM_next( targetNode, tag, attrs, styles, text ){
    DOM_insert = 2;
    return DOM_createThenAdd( targetNode, tag, attrs, styles, text );
};