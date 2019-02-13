
/*
 * https://outcloud.blogspot.jp/2016/03/ms-filter.html
 */
g_loadEventCallbacks.push(
    function(e){
        e = DOM_create( g_body, 'div' );
        e.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow();';
        e.offsetHeight > 1 && DOM_className( g_body, 'pbLCD-AX', '+' );
        e.style.cssText = '';
        DOM_remove( e );
    }
);