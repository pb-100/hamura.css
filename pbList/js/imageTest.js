/**
 * Detecting if images are disabled in browsers
 *  https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/
 * 
 * ブラウザ自身による画像の禁止
 * アドオンやネットワーク監視アプリによる画像の禁止
 * 
 * Webページにimgタグがある
 *   
 */
function imageReady( callback, urlOrUrlList, testIterval ){
    img = new Image();
    img.onerror = imageReady_onError;
    img.onload = imageReady_onLoad;
    img.src = url;

    if( ua[ 'Opera' ] < 8 && img.complete ){
        Timer_set( callback, true );
    } else {
        timerID = Timer_set( imageReady_check );
    };
};

function imageReady_check(){
    if( finish ) return;
    
    if( img.complete ){
        finish = true;
        if( raw.width ) return;
        Timer_set( callback, false );
    } else {
        timerID = Timer_set( imageReady_check );
    };
};
function imageReady_onError(){
    var errorFix = !ua[ 'IE' ] || ua[ 'IE' ] === 11 || ua[ 'IEHost' ] === 11;

    // ie11(10,9 開発モード)で mineType 不正の場合、画像取得に成功してもエラーイベントが起こるのを無視する。
    if( errorFix && img.width ) return;
    if( finish ) return;

    finish = true;
    timerID && Timer_clear( timerID );
    timerID = Timer_set( callback, false );
};
function imageReady_onLoad(){
    finish = true;
    timerID && Timer_clear( timerID );

    if( ua[ 'Prsto' ] && !img.complete ){
        timerID = Timer_set( callback, false );
    } else {
        Timer_set( callback, true );
    };
}