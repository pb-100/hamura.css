var TIMERS = [], timerUID = 0,
    timerClearID, memScroll;

function Timer_on(){
    var cb, i = TIMERS.length;

    while( i ){
        --i;
        cb = TIMERS.shift();
        cb.f( cb.p );
    };
};

if( ua[ 'IE' ] < 5 || ua[ 'MacIE' ] ){
    PB100[ '_ontimer' ] = Timer_on;
    Timer_on = 'PB100._ontimer()';
};

function Timer_set( callback, param ){
    if( !TIMERS.length ){
        timerClearID = setTimeout( Timer_on, 64 );
    };
    TIMERS.push( { f: callback, p : param, uid : ++timerUID } );

    return timerUID;
};

function Timer_clear( uid ){
    var i = TIMERS.length, cb;

    while( cb = TIMERS[ --i ] ){
        if( cb.uid === uid ){
            TIMERS.splice( i, 1 );
            break;
        };
    };
    return 0;
};

if( ua[ 'iOS' ] ){
    memScroll = window.onscroll;
    window.onscroll = function( e ){
        var ret;

        if( memScroll ) ret = memScroll( e );
        clearTimeout( timerClearID );
        timerClearID = setTimeout( Timer_on, 64 );
        return ret;
    };
};