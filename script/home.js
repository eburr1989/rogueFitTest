// JavaScript Document

$(document).ready(function() {
	var x=0;
	$('a.shadowImage').colorbox({rel:'gallery', open: true});
	$(document).bind('cbox_complete', function() {
			x++;
			setTimeout($.colorbox.next, 2000);
			if ( x == 5 ){
				$.colorbox.remove();
			}
	});
	
	<!-- Script for Link Hover -->
	$('.pinkBox').mouseenter(function() {
		$(this).addClass('hover');	
	});
	$('.pinkBox').mouseleave(function() {
		$(this).removeClass('hover');	
	});
});