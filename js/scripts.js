jQuery.noConflict();

jQuery(document).ready(function($){

	$('.carousel').carousel('cycle', {
		interval: 7500,
		pause: "hover"
	});

});