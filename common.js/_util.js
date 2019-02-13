"use strict";

var Util_tempOnLoad   = window.onload, // window. を付けないと Win XP + Opera10.10 でエラーに
    Util_tempOnUnload = window.onunload,
    Util_resizeTimerID;

onload   = Util_init;
onunload = Util_kill;

function Util_init( e ){
    var i = 0, l = g_loadEventCallbacks.length, ret;

    if( Util_tempOnLoad ) ret = Util_tempOnLoad( e );
    Util_tempOnLoad = null;

    if( onload === Util_init ){
        onload = g_emptyFunction;
        onload = null;
    };

    for( ; i < l; ++i ){
        g_loadEventCallbacks[ i ]();
    };
    g_loadEventCallbacks = Util_init = null;

    return ret;
};

function Util_kill( e ){
    var i = 0, l = g_unloadEventCallbacks.length, ret;

    if( Util_tempOnUnload ) ret = Util_tempOnUnload( e );
    Util_tempOnUnload = null;

    if( onunload === Util_kill ){
        onunload = g_emptyFunction;
        onunload = null;
    };

    if( Util_resizeTimerID ) clearTimeout( Util_resizeTimerID );

    for( ; i < l; ++i ){
        g_unloadEventCallbacks[ i ]();
    };

    Util_tempOnUnload = Util_kill = g_unloadEventCallbacks = null;

    return ret;
};