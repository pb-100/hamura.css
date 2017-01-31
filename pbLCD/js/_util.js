
(function( document ){

var PB100 = window[ 'PB100' ] = {
    'CDN_PATH' : ''
};

PB100.addCSS = function( newRules ){
    var isW3C  = !!document.getElementsByTagName,
        sheets = document.styleSheets,
        basePath = '',
        i = -1, sheet, targetSheet,
        head = (isW3C ? document.getElementsByTagName( 'HEAD' ) : document.all.tags( 'HEAD' ))[ 0 ],
        elm, selector, property, css = '';

    if( sheets ){
        for( ; sheet = sheets[ ++i ]; ){
            if( targetSheet = findSelectorText( sheet ) ) break;
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
            if( sheet.imports.length ){
                i = -1;
                while( _sheet = sheet.imports[ ++i ] ){
                    if( res = findSelectorText( _sheet ) ) return res;
                };
            };
        };
    };


    if( !targetSheet || targetSheet.readOnly ){
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
            targetSheet = sheets[ sheets.length ];
        };
    };

    while( newRules.length ){
        selector = newRules.shift();
        property = newRules.shift().split( 'base:' ).join( basePath );

        if( !targetSheet ){
            css += selector + '{' + property + '}';
        } else if( targetSheet.addRule ){
            targetSheet.addRule( selector, property );
        } else if( targetSheet.insertRule ){
            targetSheet.insertRule( selector + '{' + property + '}', targetSheet.cssRules.length );
        };
    };

    if( css ){
        // http://d.hatena.ne.jp/miya2000/20070327/p0
        elm = document.createElement('div');
        elm.innerHTML='_<style type="text\/css">' + css + '<\/style>';
        head.appendChild(elm.lastChild);
    };
};

})( document );
