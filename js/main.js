
jQuery(document).ready(function(){
	jQuery('ul.sf-menu').superfish({
		hoverClass: 'sfHover'
	});
});

jQuery(document).ready(function($) {
    $('#un-carousel').owlCarousel({
    	"loop":true,
    	"nav":true,
    	"dots":false,
    	"items":1,
    	"autoHeight":true,
    	"navText":["Previous","Next"]
    }); 
});

$(document).ready(function(){
  $("#un-carousel").owlCarousel();
});