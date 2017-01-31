
/*
 * https://outcloud.blogspot.jp/2016/03/ms-filter.html
 */
(function( window, temponload, mainFunction){
temponload = window.onload;

mainFunction = window.onload = function(e, d, b, c){
  if( temponload ) temponload( e );
  temponload = null;
  
  if( window.onload === mainFunction ){
    onload = new Function();
    onload = null;
  };
  
  d = document;
  b = d.body;
  c = b.className || '';
  e = d.createElement('div');
  b.appendChild(e);
  e.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow();';
  b.className += ( c ? ' ' : c ) + ( e.offsetHeight > 1 ? 'pbLCD-AX' : '' );
  e.style.cssText = '';
  b.removeChild(e);
};

})( window );
