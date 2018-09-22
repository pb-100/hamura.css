/* 
 * opacity の check && !ie8- && !opera7 -> png-fallback
 * opera7 nowork animation-gif at bgimg -> 点滅
 *        nowork alpha png at bgimg     -> use img element
 * https://outcloud.blogspot.jp/2016/03/presto.html
 * */
;(function( window, document, ua, testID, undefined ){
var
tempOnload = window.onload,
isOpera7   = ua[ 'Opera' ] < 8,
main = window.onload =
    function( e ){
        var body        = document.body,
            boxModelFix = ua[ 'IE' ] < 6 ? 1 : 0,
            isW3C       = !!document.getElementsByTagName,
            samps       = isW3C ? document.getElementsByTagName( 'SAMP' ) : document.all.tags( 'SAMP' ),
            dom         = PB100[ 'DOM' ],
            ie          = ua[ 'IE' ],
            isIElte8    = ie < 9,
            isIElte6    = ie < 7,
            isIE5x      = 5 <= ie && ie < 6,
            samp, elm, style,
            canOpacity, useAlphaPng, needUpdate, isPB120orFX795P,
            i, j, k, kids, kid;
        
        if( tempOnload ) tempOnload( e );
        tempOnload = null;
        
        if( onload === main ){
            onload = new Function();
            onload = null;
        };
        main = null;
        
        if( samps.length ){
            // content test
            elm = dom[ 'create' ](
                body, 'a',
                { id : testID, title : testID }
            );
            canContent = elm.offsetWidth;

            // opacity test
            style       = elm.style;
            canOpacity  = style[ 'opacity' ] !== undefined || style[ '-moz-opacity' ] !== undefined || style[ '-khtml-opacity' ] !== undefined;
            useAlphaPng = !canOpacity && !isIElte8 && !isOpera7;
            needUpdate  = !canContent || useAlphaPng || isOpera7;
            dom[ 'remove' ]( elm );
    
            for( i = -1; samp = samps[ ++i ]; ){
                if( !dom[ 'className' ]( samp.parentNode, 'pbLCD', '?' ) ) continue;        

                isPB120orFX795P = dom[ 'className' ]( samp, 'PB-120', '?' ) || dom[ 'className' ]( samp, 'FX-795P', '?' );

                kids = samp.children;
                for( j = kids.length; j; ){ // 子要素が追加されるので最後から見ていく
                    kid = kids[ --j ];
                    switch( kid.tagName.toUpperCase() ){
                        case 'A' :
                            if( needUpdate ){
                                canContent || createBaloon( kid );
                                for( k = kid.children.length; k; ){ // 子要素が追加されるので最後から見ていく
                                    updateLCDSegment( kid.children[ --k ] );
                                };
                            };
                            if( ua[ 'OperaMin' ] || ua[ 'UCWEB' ] ){
                                kid.setAttribute( 'href', 'javascript:void(0)' );
                            } else {
                                kid.onclick = onClickBalloon;
                            };
                            break;
                        case 'B' :
                            needUpdate && updateLCDSegment( kid );
                    };
                };
            };

            if( BLINK_ELMS.length ){
                setInterval( blinkElements, 500 );
                PB100[ 'addCSS' ]([
                    '.pbChrCS', 'background-position:0 -51px' // _ chr75
                ]);
            };
            if( useAlphaPng ){
                PB100[ 'addCSS' ]([
                    '.pbAlp1' + ( canContent ? ',.pbAlp9[pbghos]:before' : '' ), 'background-image:url(base:pbLCD/x3_a10.png)',
                    '.pbAlp2' + ( canContent ? ',.pbAlp8[pbghos]:before' : '' ), 'background-image:url(base:pbLCD/x3_a20.png)',
                    '.pbAlp3' + ( canContent ? ',.pbAlp7[pbghos]:before' : '' ), 'background-image:url(base:pbLCD/x3_a30.png)',
                    '.pbAlp4' + ( canContent ? ',.pbAlp6[pbghos]:before' : '' ), 'background-image:url(base:pbLCD/x3_a40.png)',
                    '.pbAlp5', 'background-image:url(base:pbLCD/x3_a50.png)',
                    '.pbAlp6', 'background-image:url(base:pbLCD/x3_a60.png)',
                    '.pbAlp7', 'background-image:url(base:pbLCD/x3_a70.png)',
                    '.pbAlp8', 'background-image:url(base:pbLCD/x3_a80.png)',
                    '.pbAlp9', 'background-image:url(base:pbLCD/x3_a90.png)'
                ]);
            };
        };

        function createBaloon( a ){
            var settings = a.getAttribute( 'pbtip' ) || '',
                char0    = settings.charAt( 0 ),
                dirDown  = char0 === '_',
                position = dirDown ? settings.charAt( 2 ) : char0,
                dir      = dirDown ? 'Btm' : '',
                content  = a.getAttribute( 'title' );
            
            dom[ 'className' ]( a, 'pbTipPos' + position.toUpperCase(), '+' );

            dom[ 'create' ](
                a, 'div',
                { className : 'pbTip' + dir }, { width : content.length + boxModelFix + 'em' }, content
            );
            dom[ 'create' ](
                a, 'div',
                { className : 'pbTail' + dir }
            );
            if( isIE5x && dirDown ){
                a.focus(); // 下ツールチップが描画されないので強制再描画
                a.blur();
            };
        };

        function updateLCDSegment( b ){
            canContent && useAlphaPng ? blinkCursor( b ) : _updateLCDSegment( b );
        };

        function blinkCursor( elm ){
            if( !canOpacity && !isIElte8 ){
                if( dom[ 'className' ]( elm, 'pbChrCS', '?' ) ){
                    BLINK_ELMS.push( elm );
                };
            };
        };

        function pbCharCodeToChar( code ){
            if( code.length === 3 ) code = code.substr( 0, 2 ); // XXa -> XX
            return PB100[ 'CHAR_TABLE' ][ parseInt( code, 16 ) ] || '~';
        };

        function _updateLCDSegment( b ){
            var ghost     = b.getAttribute( 'pbGhos' ) || '',
                ghostCode = ghost.substr( 1 ),
                cn        = b.className,
                csr       = cn.split( 'pbCsr' )[ 1 ] || '',
                alp       = cn.split( 'pbAlp' )[ 1 ] || '',
                ghostChr  = ghostCode === 'CS' ? '_' : pbCharCodeToChar( ghostCode ),
                chrCode, ghostAlp;

            csr = csr.split( ' ' )[ 0 ];
            alp = alp.split( ' ' )[ 0 ];
            ghostAlp = 10 - parseFloat( alp );

            if( isOpera7 && alp ){
                chrCode = cn.split( 'pbChr' )[ 1 ];
                chrCode = chrCode.split( ' ' )[ 0 ];
                createFallbackImage( b, chrCode, alp, b.innerHTML );
                if( ghost ){
                    createFallbackImage( b, ghostCode, ghostAlp, ghostChr );
                };
                dom[ 'css' ]( b, { 'backgroundImage' : 'none' } );
            } else if( ghost ){
                elm = dom[ 'prev' ](
                    b, 'b',
                    { className : [ 'pbChr' + ghostCode, 'pbAlp' + ghostAlp, 'pbCsr' + csr ] }, 0, ghostChr 
                );
                blinkCursor( b );
                blinkCursor( elm );
            } else {
                blinkCursor( b );
            };
        };

        function createFallbackImage( b, chrCode, alp, str ){
            var elm = dom[ 'create' ](
                b, 'img',
                {
                    title     : str,
                    src       : PB100[ 'CDN_PATH' ] + 'pbLCD/x3_a' + alp + '0.png'
                },
                IMG_ELM_POSITIONS[ chrCode + ( isPB120orFX795P ? 'a' : '' ) ] || IMG_ELM_POSITIONS[ chrCode ]
            );
            if( chr === 'CS' ) BLINK_ELMS.push( elm );
        };
    },

    IMG_ELM_POSITIONS = isOpera7 && {
        '00' : { left:0,top:0 },
        '01' : { left:0,top:'-30px'},
        '02' : { left:0,top:'-60px'},
        '03' : { left:0,top:'-90px'},
        '04' : { left:0,top:'-120px'},
        '05' : { left:0,top:'-150px'},
        '06' : { left:0,top:'-180px'},
        '07' : { left:0,top:'-210px'},
        '08' : { left:0,top:'-240px'},
        '09' : { left:0,top:'-270px'},
        '0A' : { left:0,top:'-300px'},
        '0B' : { left:0,top:'-330px'},
        '0C' : { left:0,top:'-360px'},
        '0D' : { left:0,top:'-390px'},
        '0E' : { left:0,top:'-420px'},
        '0F' : { left:0,top:'-450px'},
        '10' : { left:0,top:'-480px'},
        '11' : { left:0,top:'-510px'},
        '12' : { left:0,top:'-540px'},
        '13' : { left:0,top:'-570px'},
        '14' : { left:0,top:'-600px'},
        '15' : { left:0,top:'-630px'},
        '16' : { left:0,top:'-660px'},
        '17' : { left:0,top:'-690px'},
        '18' : { left:0,top:'-720px'},
        '19' : { left:0,top:'-750px'},
        '1A' : { left:0,top:'-780px'},
        '1B' : { left:0,top:'-810px'},
        '1C' : { left:0,top:'-840px'},
        '1D' : {left:0,top:'-870px'},
        '1E' : {left:0,top:'-900px'},
        '1F' : {left:0,top:'-930px'},
        '20' : {left:0,top:'-960px'},
        '21' : {left:0,top:'-990px'},
        '22' : {left:0,top:'-1020px'},
        '23' : {left:0,top:'-1050px'},
        '24' : {left:0,top:'-1080px'},
        '25' : {left:0,top:'-1110px'},
        '26' : {left:0,top:'-1140px'},
        '27' : {left:0,top:'-1170px'},
        '28' : {left:0,top:'-1200px'},
        '29' : {left:0,top:'-1230px'},
        '2A' : {left:0,top:'-1260px'},
        '2B' : {left:0,top:'-1290px'},
        '2C' : {left:0,top:'-1320px'},
        '2D' : {left:0,top:'-1350px'},
        '2E' : {left:0,top:'-1380px'},
        '2F' : {left:0,top:'-1410px'},
        '30' : {left:0,top:'-1440px'},
        '31' : {left:0,top:'-1470px'},
        '32' : {left:0,top:'-1500px'},
        '33' : {left:0,top:'-1530px'},
        '34' : {left:0,top:'-1560px'},
        '35' : {left:0,top:'-1590px'},
        '36' : {left:0,top:'-1620px'},
        '37' : {left:0,top:'-1650px'},
        '38' : {left:0,top:'-1680px'},
        '39' : {left:0,top:'-1710px'},
        
        '40' : { top:0},
        '41' : { top:'-30px'},
        '42' : { top:'-60px'},
        '43' : { top:'-90px'},
        '44' : { top:'-120px'},
        '45' : { top:'-150px'},
        '46' : { top:'-180px'},
        '47' : { top:'-210px'},
        '48' : { top:'-240px'},
        '49' : { top:'-270px'},
        '4A' : { top:'-300px'},
        '4B' : { top:'-330px'},
        '4C' : { top:'-360px'},
        '4D' : { top:'-390px'},
        '4E' : { top:'-420px'},
        '4F' : { top:'-450px'},
        '50' : { top:'-480px'},
        '51' : { top:'-510px'},
        '52' : { top:'-540px'},
        '53' : { top:'-570px'},
        '54' : { top:'-600px'},
        '55' : { top:'-630px'},
        '56' : { top:'-660px'},
        '57' : { top:'-690px'},
        '58' : { top:'-720px'},
        '59' : { top:'-750px'},
            /* .pbChr5A01' : { top:'-780px'},
        '01' : { top:'-810px'}, */
        '5C' : { top:'-840px'},
        '5D' : { top:'-870px'},
        '5E' : { top:'-900px'},
        '5F' : { top:'-930px'},
        '60' : { top:'-423px'},
        '61' : { top:'-990px'},
        '62' : { top:'-1020px'},
        '63' : { top:'-1050px'},
        '64' : { top:'-1080px'},
        '65' : { top:'-1110px'},
        '66' : { top:'-1140px'},
        '67' : { top:'-1170px'},
        '68' : { top:'-1200px'},
        '69' : { top:'-1230px'},
        '6A' : { top:'-1260px'},
        '6B' : { top:'-1290px'},
        '6C' : { top:'-1320px'},
        '6D' : { top:'-1350px'},
        '6E' : { top:'-1380px'},
        '6F' : { top:'-1410px'},
        '70' : { top:'-1440px'},
        '71' : { top:'-1470px'},
        '72' : { top:'-1500px'},
        '73' : { top:'-1530px'},
        '74' : { top:'-1560px'},
        '75' : {left:0,top:'-51px'},
        '76' : { top:'-1620px'},
        '77' : {left:0,top:'-786px'},
        '78' : { top:'-1680px'},
        '79' : { top:'-1710px'},
        '7A' : { top:'-1740px'},
        '7B' : { top:'-1770px'},

        '75' : {left:0,top:'-51px'},

        '32a' : {left:0,top:'-1740px'},
        '67a' : { top:'-1590px'},
        '69a' : { top:'-780px'},
        '6Aa' : { top:'-810px'},
        '6Ba' : { top:'-1650px'}
    },

    BLINK_ELMS = [],
    blinkFlag,
    safariPreventDefault;

    function blinkElements(){
        blinkFlag = !blinkFlag;

        for( var i = -1, elm; elm = BLINK_ELMS[ ++i ]; ){
            elm.style.visibility = blinkFlag ? '' : 'hidden';
        };
    };

    function onClickBalloon( e ){
        var ev = e || event;

        this.focus();
        if( e ){
            e.preventDefault();
            e.stopPropagation();
            safariPreventDefault = true;
            return false;
        } else {
            ev.cancelBubble = true;
            return ev.returnValue = false;
        };
    };

    if( ua[ 'WebKit' ] < 525.13 ){ // Safari3-
        html.onclick = function( e ){
            if( safariPreventDefault ){
                safariPreventDefault = false;
                e.preventDefault();
                return false;
            };
        };
    };
})( window, document, ua, 'pbLCD-test' );
