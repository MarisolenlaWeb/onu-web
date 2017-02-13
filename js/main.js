
// jQuery(document).ready(function(){
// 	jQuery('ul.sf-menu').superfish({
// 		hoverClass: 'sfHover'
// 	});
// });

jQuery(document).ready(function($) {
    // $('.owl-carousel').owlCarousel({
    // 	"loop":true,
    // 	"nav":true,
    // 	"dots":false,
    // 	"items":1,
    // 	"autoHeight":true,
    // 	"navText":["Previous","Next"]
    // }); 
    $('.owl-carousel').owlCarousel({
	    loop:true,
	    nav:false,
	    dots:true,
	    items:1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});
