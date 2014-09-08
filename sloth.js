/*
 * gao_st@126.com
 * 2014-06-21
 */
if (typeof Zepto == 'undefined') { throw new Error("Sloth requires Zepto") }

!function ($) { "use strict";
	var $asideBtns = $('a[href^=#][data-role="aside"]'),
		isOpen = false,
		$mSection = $('section[data-role="main"]'),
		startX,
		dx;
	$asideBtns.on('tap', function (e) {
		if ( isOpen ) {
			$(this).closest('section').animate({"margin-left": 0}, 200);
		} else {
			$(this).closest('section').animate({left: 200}, 200);
		}
		isOpen = !isOpen; 
		e.preventDefault();
	});
	
	/*$mSection
	.on('swipeRight', function () {
		$(this).animate({"margin-left": "80%"}, 200);		
	})
	.on('swipeLeft', function () {
		$(this).animate({"margin-left": 0}, 200);		
	});*/
	
	$mSection
	.on('touchstart', function ( e ) {
		startX = e.touches[0].pageX;
	})
	.on('touchmove', function ( e ) {
		dx = e.touches[0].pageX;
		if (dx >= 200 || dx < startX ) {
			return;
		}
        $(this).css({
        	'-webkit-backface-visibility': 'hidden',
        	'-webkit-transform-origin': '0% 0%',
        	'-webkit-transform': 'translate3d('+ ( dx - startX ) +'px, 0px, 0px)'
        });
        
        console.log( dx + ',' + startX )
        
	}).on('touchend', function ( e ) {
		var des = dx - startX;
		if ( des > 50 ) {
			$(this).animate({"margin-left": 200 - des}, 200);
		} else {
			$(this).animate({"margin-left": 0 - des}, 200);
		}
//		$(this).css("margin-left", 0);
	});
}(window.Zepto);

/*!function ( window, $, undefined ) {
	var $links = $('a[href^=#]');
	var $asides = $links.filter('[data-role="aside"]');
	
	$asides.on('tap', function (e) {
		$(this).closest('section').animate({"margin-left": "80%"}, 200);
		e.preventDefault();
	});
	
	console.log(  );
}( window, Zepto );*/