var CSSOM_targetSheet, CSSOM_basePath = '', CSSOM_importIndex = -1;

function CSSOM_init(){
    var sheets = document.styleSheets,
        i, l, href, elm;

    CSSOM_init = null;

    if( sheets ){
        for( i = 0, l = sheets.length; i < l; ++i ){
            if( CSSOM_targetSheet = findSelectorText( sheets[ i ] ) ) break;
        };
    };

    if( !CSSOM_targetSheet || !CSSOM_targetSheet.readOnly ){
        if( CSSOM_targetSheet ){
            href = CSSOM_targetSheet.href.split( '/' );
            href.pop();
            CSSOM_basePath = href.join( '/' ) + '/';
        } else {
            CSSOM_basePath = CONST_ASSET_PATH;
        };
        
        if( g_w3cDOM ){
            elm  = DOM_create( g_head, 'style', { type : 'text/css' } );
            CSSOM_targetSheet = elm.sheet;
        } else {
            g_head.insertAdjacentHTML( 'BeforeEnd', '<style type=text/css></style>' );
            CSSOM_targetSheet = sheets[ sheets.length - 1 ];
        };
    };

    function findSelectorText( sheet ){
        var rules = sheet.rules || sheet.cssRules,
            i = -1, rule, _sheet, res, imports, l;

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
        imports = sheet.imports;
        if( imports && ( l = imports.length ) ){
            for( i = 0; i < l; ++i ){
                if( res = findSelectorText( imports[ i ] ) ) return res;
            };
        };
    };
};

function CSSOM_add( newRules ){
    var selector, property, css = '', _css;

    CSSOM_init && CSSOM_init();

    while( newRules.length ){
        selector = newRules.shift();
        property = newRules.shift().split( 'base:' ).join( CSSOM_basePath );
        _css     = selector + '{' + property + '}';

        if( !CSSOM_targetSheet ){
            css += _css;
        } else if( CSSOM_targetSheet.addRule ){
            CSSOM_targetSheet.addRule( selector, property );
        } else if( CSSOM_targetSheet.insertRule ){
            CSSOM_targetSheet.insertRule( _css, CSSOM_targetSheet.cssRules.length );
        };
    };

    if( css ){
        DOM_create( g_head, 'style', 0, 0, css );
    };
};

function CSSOM_import( url ){
    CSSOM_init && CSSOM_init();

    url = url.split( 'base:' ).join( CSSOM_basePath );

    if( CSSOM_targetSheet.addImport ){
        CSSOM_targetSheet.addImport( url, ++CSSOM_importIndex );
    } else if( CSSOM_targetSheet.insertRule ){
        CSSOM_targetSheet.insertRule( '@import "' + url + '"', ++CSSOM_importIndex );
    };
};