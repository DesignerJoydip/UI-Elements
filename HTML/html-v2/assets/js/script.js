(function ($) {
    "use strict";

    new WOW().init();
    
    /* Single banner slider scrpt start */
    var singleAnimatedBanner = $('.singleAnimatedBanner');
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
    $(".footExpandBtn").click(function(){
        $(this).toggleClass("expand");
        $(".expandedSection").toggleClass("expand");
    });
    /* footer expand / collaps script ended */


    


})(window.jQuery);


jQuery(window).on("load", function (e) { 
    jQuery("#preloader").fadeOut(); 
})

