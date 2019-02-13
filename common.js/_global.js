PB100 = {};

var g_loadEventCallbacks   = [],
    g_unloadEventCallbacks = [],

    g_emptyFunction        = new Function(),
    g_strFromCharCode      = String.fromCharCode,

    g_w3cDOM = !!document.getElementsByTagName,
    g_html   = getElementsByTagName( 'html' )[ 0 ],
    g_head   = getElementsByTagName( 'head' )[ 0 ],
    g_body   = document.body;

function getElementsByTagName( tag ){
    return g_w3cDOM ? document.getElementsByTagName( tag ) : document.all.tags( tag.toUpperCase() );
};

function getAllElements(){
    var elms = document.all || document.getElementsByTagName('*'),
        ret = [], i = elms.length;

    while( i ) ret[ --i ] = elms[ i ];
    return ret;
};