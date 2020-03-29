(function ($) {
    "use strict";

    // Property detail page thumbnail image gallery script start-------------
    if ($(".thumbnail-image-gallery-slider").length) {

        $('.thumbnail-image-gallery-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.thumb-for-thumbnail-image-gallery-slider'
        });
        $('.thumb-for-thumbnail-image-gallery-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.thumbnail-image-gallery-slider',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            infinite: false,
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
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }
    // Property detail page thumbnail image gallery script ended -------------


    //Floor plan slider start -------------
    if ($(".floor_plan_slider_wrapper").length) {
        $('.floor_plan_slider_wrapper').slick({
            dots: false,
            infinite: false,
        });
    }
    //Floor plan slider end -------------


    // similar property slider script start --------------------
    if ($(".similar-property-slider").length) {
        $('.similar-property-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            centerMode: false,
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }
    // similar property slider script ended --------------------


    //Virtual slider start ------------------
    if ($(".vitual-map-slider").length) {
        $('.vitual-map-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false,
            asNavFor: '.vitual-text-slider'
        });
        $('.vitual-text-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.vitual-map-slider',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]

        });
    }
    //Virtual slider end -------------------



    // home-city-benefit-slider script start-------------
    if ($(".home-city-benefit-slider").length) {
        $('.home-city-benefit-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            centerMode: false,
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
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
                        slidesToShow: 1,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }
    // home-city-benefit-slider script ended-------------


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
        //theme: "minimal",
        autoHideScrollbar:false,
		theme:"rounded"
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
    // animation function
    function stickyHeaderAnimate() {
        var FullHeaderElement = StikyElement;
        var FullHeaderElementHeight = $(FullHeaderElement).outerHeight();
        var scrollTop = $(window).scrollTop();
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



$('.select').each(function () {
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




// community start
$(document).ready(function () {
    $('.details-toggle').click(function () {
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
                toggle_switch.html('View More');
            } else {
                toggle_switch.html('View Less');
            }
        });
    });

});

function classToggle() {
    this.classList.toggle('active');
}
document.querySelector('.details-toggle').addEventListener('click', classToggle);
// community end

// Property Search JS Start

function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function (a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function () {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function () {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function () {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function () {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});





function classToggle() {
    this.classList.toggle('active');
}
document.querySelector('.all-property--button').addEventListener('click', classToggle);

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("" + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount").val("" + $("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));
});
// Property Search JS End
