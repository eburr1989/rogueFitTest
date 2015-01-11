// JavaScript Document

$(document).ready(function() {
	var x=0;
	$('a.shadowImage').colorbox({rel:'gallery', open: true, slideshow: true}, function() {
			if ( $( $.colorbox.element() ).attr('id').match('end') ){
   				$.colorbox.close();
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