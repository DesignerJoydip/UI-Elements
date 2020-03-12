(function ($) {
    "use strict";
    
    /* Single banner slider scrpt start */
    var singleAnimatedBanner = jQuery('.singleAnimatedBanner');
    singleAnimatedBanner.owlCarousel({
        //animateOut: 'fadeOut',
        //animateIn: 'flipInX',
        items: 1,
        margin: 0,
        loop: true,
        stagePadding: 0,
        smartSpeed: 450,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left fa-2x fa-fw" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-2x fa-fw" aria-hidden="true"></i>'], //we will be
    });
    

    
})(window.jQuery);


/* window load script start */
jQuery(window).on("load", function (e) { 

    /* preloader script */
    jQuery("#preloader").fadeOut(); 

});
/* window load script ended */


/* window scroll script start */
jQuery(window).scroll(function() {


});
/* window scroll script ended */







