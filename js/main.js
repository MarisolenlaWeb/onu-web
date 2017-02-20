
// jQuery(document).ready(function(){
// 	jQuery('ul.sf-menu').superfish({
// 		hoverClass: 'sfHover'
// 	});
// });

jQuery(document).ready(function($) {
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

// MOBILE MENU
$('.superfish-1-toggle').click(
  function() {
    $('.sf-menu').toggleClass("xactive");
  });

// TRIGGER DROP DOWN SUBS
$('.sf-with-ul').click(
  function() {
    $(this).parent().toggleClass("xpopdrop");
  });