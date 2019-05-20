(function ($) {
    "use strict";
    
    /* Single banner slider scrpt start */
    var singleAnimatedBanner = $('.singleAnimatedBanner');
    singleAnimatedBanner.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        items: 1,
        margin: 0,
        loop: true,
        stagePadding: 0,
        smartSpeed: 450,
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


    /* home team slider scrpt start */
    var homeTeamMultiSlider = $('.homeTeamMultiSlider');
    homeTeamMultiSlider.owlCarousel({
        //animateOut: 'fadeOut',
        //animateIn: 'flipInX',
        items: 1,
        margin:30,
        loop: false,
        stagePadding:0,
        smartSpeed: 450,
        nav: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-2x fa-fw" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-2x fa-fw" aria-hidden="true"></i>'],
        responsiveClass:true,
        responsive:{
            0:{ items:1, }, 600:{ items:2, nav: true }, 1000:{  items:4 }
        }
    });
    /* home team slider scrpt ended */


    /* header menu toggle button script start */
    $(".menuToggleSwitch").click(function(){
        $(this).toggleClass("closed");
        $(".primary-menu").toggleClass("closed");
    });
    /* header menu toggle button script ended */

     
    /* footer expand / collaps script start */
    $(".footExpandBtn").click(function(){
        $(this).toggleClass("expand");
        $(".expandedSection").toggleClass("expand");
    });
    /* footer expand / collaps script ended */


})(window.jQuery);
