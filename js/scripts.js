jQuery.noConflict();

jQuery(document).ready(function($){

	// Carousel
	$('.carousel').carousel('cycle', {
		interval: 7500,
		pause: "hover"
	});

	// Uniform
	$("input:checkbox").uniform();

});