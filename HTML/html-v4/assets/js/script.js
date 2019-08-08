(function ($) {
    "use strict";

    new WOW().init();
    
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

    singleAnimatedBanner.on('changed.owl.carousel', function (event) {
        //console.log("test");
        /*var item = event.item.index - 2;
        // first removing animation for all captions
        $('h2').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInUp');*/

    });
    /* Single banner slider scrpt ended */

    
    /* footer expand / collaps script start */
    jQuery(".footExpandBtn").click(function(){
        jQuery(this).toggleClass("expand");
        jQuery(".expandedSection").toggleClass("expand");
    });
    /* footer expand / collaps script ended */


    /* image light box script */
    //jQuery('.popup-gallery').simpleLightbox();


    /* goto top script function start */
    // declare variable
    var gotoTopButton = $('#toTop');
    jQuery(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            jQuery(gotoTopButton).css("opacity", "1");
        } else {
            jQuery(gotoTopButton).css("opacity", "0");
        }
    }); // scroll END

    //Click event to scroll to top
    jQuery(gotoTopButton).click(function() {
        jQuery('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    }); // click() scroll top END
    /* goto top script function ended */
    
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







