(function ($) {
    "use strict";

    new WOW().init();

    // Property detail page thumbnail image gallery script start-------------
    if ($(".thumbnail-image-gallery-slider").length) {

        $('.thumbnail-image-gallery-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.thumb-for-thumbnail-image-gallery-slider'
        });
        $('.thumb-for-thumbnail-image-gallery-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.thumbnail-image-gallery-slider',
            dots: true,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }
    // Property detail page thumbnail image gallery script ended -------------



    // responsive tab accrodian script start -------------------
    $(".responsive-tab-accrodian").champ({
        plugin_type: "tab",
        side: "left",
        active_tab: "1",
        controllers: "false"
    });
    // responsive tab accrodian script ended -------------------



    // custom scrollbar script start ---------------------------
    $(".custom-scrollbar").mCustomScrollbar({
        theme: "minimal"
    });
    // custom scrollbar script ended ---------------------------

    
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



/* stickyHeaderAnimate script start */
(function ($) {
    'use strict';

    // define class and elements
    var StikyElement = ".StickyElementAfterScroll";
    var StikyClass = "Sticky";

    var StikyElementOffset = $(StikyElement).offset();
    var StikyElementTopOffset = StikyElementOffset.top;
    console.log("sticky top offset:" + StikyElementTopOffset);

    // animation function
    function stickyHeaderAnimate() {
        var FullHeaderElement = StikyElement;
        var FullHeaderElementHeight = $(FullHeaderElement).outerHeight();
        console.log("Header Height:" + FullHeaderElementHeight);

        var scrollTop = $(window).scrollTop();
        console.log("scroll to top:" + scrollTop);

        /*var StikyElementOffset = $(StikyElement).offset();
        var StikyElementTopOffset = StikyElementOffset.top;
        console.log("sticky top offset:"+StikyElementTopOffset);*/
        console.log("sticky top offset:" + StikyElementTopOffset);

        if (scrollTop >= StikyElementTopOffset) {
            //$(StikyElement).addClass(StikyClass);
            $("html").addClass(StikyClass);
            $("body").css("padding-top", FullHeaderElementHeight);
        } else {
            //$(StikyElement).removeClass(StikyClass);
            $("html").removeClass(StikyClass);
            $("body").css("padding-top", "");
        }
    }

    // on document ready
    stickyHeaderAnimate();

    // on window scroll
    jQuery(window).on('scroll', function () {
        stickyHeaderAnimate();
    });

    // on window resize
    jQuery(window).on('resize', function () {
        stickyHeaderAnimate();
    });

}).apply(this, [jQuery]);
/* stickyHeaderAnimate script ended */



$('select').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;
    var $getID = $(this).attr('id');

    $this.addClass('select-hidden');
    $this.wrap('<div class="select ' + $getID +'"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options ' + $getID
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            size: $this.children('option').eq(i).attr('size'),
            rel: $this.children('option').eq(i).val(),
            value: $this.children('option').eq(i).val(),
            text: $this.children('option').eq(i).text(),
            
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').slideUp();
        });
        $(this).toggleClass('active').next('ul.select-options').slideToggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.slideUp();
        //console.log($this.val());
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.slideUp();
    });

});
