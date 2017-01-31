/* 
 * opacity の check && !ie8- && !opera7 -> png-fallback
 * opera7 nowork animation-gif at bgimg -> 点滅
 *        nowork alpha png at bgimg     -> use img element
 * 
 * http://help.dottoro.com/ljifbjwf.php
 * version method (opera)
 *   window.opera.buildNumber();
 *   window.opera.version();
 * 
 * https://outcloud.blogspot.jp/2016/03/presto.html
 * */
;(function( window, document, testID ){
var
tempOnload = window.onload,
isOpera7   = false,
		
main = window.onload = function( e ){
		var isW3C    = !!document.getElementsByTagName,
			samps    = isW3C ? document.getElementsByTagName( 'SAMP' ) : document.all.tags( 'SAMP' ),
			jscript  = eval( '/*@cc_on@_jscript_version+@*/0' ),
			isIElte8 = jscript && ( jscript <= 5.8 || document.documentMode < 9 ),
			isIElte6 = jscript && ( ( jscript <= 5.7 && !window.XMLHttpRequest ) || document.documentMode < 7 ),
			body     = document.body,
			samp, elm, canContent,
			style, canOpacity, undef,
			i, kids, kid, j, updated, cn, csr, chr, op, dw, inner, img,
			sheets, sheet, href, basePath = '';
		
		if( tempOnload ) tempOnload( e );
		tempOnload = null;
		
		if( onload === main ){
			onload = new Function();
			onload = null;
		};
		main = null;
		
		if( samps.length ){
			// content test
			elm = document.createElement( 'a' );
			body.appendChild( elm );
			elm.setAttribute( 'id',    testID );
			elm.setAttribute( 'title', testID );
			canContent = elm.offsetWidth;

			// opacity test
			style      = elm.style;
			canOpacity = style[ 'opacity' ] !== undef || style[ '-moz-opacity' ] !== undef || style[ '-khtml-opacity' ] !== undef;

			body.removeChild( elm );
	
			for( i = -1; samp = samps[ ++i ]; ){
				if( samp.parentNode.className.indexOf( 'pbLCD' ) < 0 ) continue;		

				if( !canContent ){
					// content fallback!
					kids = samp.children;
					for( j = updated = 0; kid = kids[ j ]; ++j ){
						cn  = kid.className;
						csr = cn.split( 'pbCsr' )[ 1 ];
						csr = csr && csr.split( ' ' )[ 0 ];
	
						chr = cn.split( 'pbChr' )[ 1 ];
						chr = chr && chr.split( ' ' )[ 0 ];
	
						op  = cn.split( 'pbAlp' )[ 1 ];
						op  = op && op.split( ' ' )[ 0 ];

						if( kid.tagName.toUpperCase() === 'A' ){
							dw =
								kid.outerHTML ?
									0 < kid.outerHTML.indexOf( 'dwtip' ) :
								kid.hasAttribute ?
									kid.hasAttribute( 'dwtip' ) : false;
							
							children = kid.children;

							child0 = ( children.length && children[ 0 ] ) || ( isOpera7 && kid );
							if( child0 && isOpera7 ) child0 = createFallbackImg( child0 );

							child1 = children.length && children[ 1 ];
							if( child1 && isOpera7 ) child1 = createFallbackImg( child1 );

							inner = '<div class="pbTip">' + kid.getAttribute( 'title' ) + '</div>' + (
										isOpera7 ? '' :
										children.length ?
											'' :
											'<b class="pbChr' + chr + ( op ? ' op' + op : '' ) + '">' + kid.innerHTML + '</b>'
									) + '<div class="pbTail"></div>';
							
							cn = 'pbCsr' + csr + ' ' + ( dw ? 'pbTipBtm' : 'pbTipTop' );

							// kid.removeAttribute( 'title' );
							if( isIElte6 ){
								// kid.href    = 'javascript:void(0)'; <- html
								// kid.onclick = 'return false';
							};
							kid.className = cn;
							kid.innerHTML = inner;

							if( child0 ) kid.firstChild.appendChild( child0 );
							if( child1 ) kid.firstChild.appendChild( child1 );

							updated = 1;

							if( isOpera7 ){
								if( child0.className.indexOf( 'pbChrCS' ) !== -1 ){
									BLINK_ELMS.push( child0 );
								};
								if( child1 && child1.className.indexOf( 'pbChrCS' ) !== -1 ){
									BLINK_ELMS.push( child1 );
								};
							};
						} else if( isOpera7 ){
							if( op ){
								samp.insertBefore( img = createFallbackImg( kid ), kid );
								samp.removeChild( kid );
							} else if( cn.indexOf( 'pbChrCS' ) !== -1 ){
								BLINK_ELMS.push( kid );
							};
						};
					};

					function createFallbackImg( elm ){
						var img = document.createElement( 'img' );
						// src
						// clip
						// csr
						if( isOpera7 ){
							if( cn.indexOf( 'pbChrCS' ) !== -1 ){
								BLINK_ELMS.push( img );
							};
						};
						return img;
					};

					if( updated ){
						samp.className += ( samp.className ? ' ' : '' ) + ' pbLCD-cntfix';
					};
				};

				// png fallback!
				if( !canOpacity && !isIElte8 && !isOpera7 ){
					window[ 'PB100' ].addCSS([
						'.pbLCD b'       , 'z-index:1',
						'.pbLCD .pbChrCS', 'z-index:0',

						'.pbChrCS'       , 'background-image:url(base:pbLCD/x3_csr.gif) !important',
						'.pbChrCS'       , 'background-position:2px 20px',

						'.pbOP1', 'background-image:url(base:pbLCD/x3_a10.png)',
						'.pbOP2', 'background-image:url(base:pbLCD/x3_a20.png)',
						'.pbOP3', 'background-image:url(base:pbLCD/x3_a30.png)',
						'.pbOP4', 'background-image:url(base:pbLCD/x3_a40.png)',
						'.pbOP5', 'background-image:url(base:pbLCD/x3_a50.png)',
						'.pbOP6', 'background-image:url(base:pbLCD/x3_a60.png)',
						'.pbOP7', 'background-image:url(base:pbLCD/x3_a70.png)',
						'.pbOP8', 'background-image:url(base:pbLCD/x3_a80.png)',
						'.pbOP9', 'background-image:url(base:pbLCD/x3_a90.png)',

						'.pbChrCS.pbOP1', 'background-position:-180px 18px',
						'.pbChrCS.pbOP2', 'background-position:-160px 18px',
						'.pbChrCS.pbOP3', 'background-position:-140px 18px',
						'.pbChrCS.pbOP4', 'background-position:-120px 18px',
						'.pbChrCS.pbOP5', 'background-position:-100px 18px',
						'.pbChrCS.pbOP6', 'background-position:-80px 18px',
						'.pbChrCS.pbOP7', 'background-position:-60px 18px',
						'.pbChrCS.pbOP8', 'background-position:-40px 18px',
						'.pbChrCS.pbOP9', 'background-position:-20px 18px'
					]);
					if( canContent ) return;
				};
			};

			if( BLINK_ELMS.length ) setInterval( blinkFunction, 500 );
		};
	},
	BLINK_ELMS = [],
	blinkFlag  = false,
	blinkFunction = isOpera7 && function(){
		blinkFlag = !blinkFlag;

		for( var i = -1, elm; elm = BLINK_ELMS[ ++i ]; ){
			elm.style.visibility = blinkFlag ? '' : 'hidden';
		};
	};

})( window, document, 'pbLCD-test' );
