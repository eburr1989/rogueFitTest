// JavaScript Document

$(document).ready(function() {
	
	$.colorbox({href: "../images/gallery1.png", slideshow: true});
	
	<!-- Script for Link Hover -->
	$('.pinkBox').mouseenter(function() {
		$(this).addClass('hover');	
	});
	$('.pinkBox').mouseleave(function() {
		$(this).removeClass('hover');	
	});
});