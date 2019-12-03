

// Team Script

/*$('.svgbtn').click(function(){
 $(this).next('.team-desc').fadeToggle();
 });*/

$('.svgbtn').click(function () {
    $('.team-desc').fadeOut(100);
    $(this).addClass('openedBtn');
    $(this).parent('.team-box').find('.team-desc').fadeToggle(100);
});

$('.ui-close-button').click(function () {
    //$(this).removeClass('openedBtn');
    //alert();
    //$(this).parent('.team-box').find('.team-desc').fadeOut(100);
    $(this).closest('.team-box').find('.team-desc').fadeOut(100);
});


function custom_select() {
    // custom select dropdown script start
    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
                id = $(this).attr("id"),
                name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr(
                    "value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });

    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());

        // for show / hide parsley validation error
        if ($(this).data("value") != '') {
            $('#customErrorDiv .help-block').html('');
        } else {
            $('#customErrorDiv .help-block').html('<div class="parsley-required">Ce champ est requis.</div>');
        }
    });
    // custom select dropdown script ended
}

custom_select();

/*
 $("a[href^='#']").click(function(e) {
 e.preventDefault();
 
 var position = $($(this).attr("href")).offset().top;
 
 $("body, html").animate({
 scrollTop: position
 }, 1000 );
 });*/

/* mobile header left and top menu area script start */
$("[data-openflyoutMenuBox]").click(function () {
    var getFlyoutName = $(this).attr("data-openflyoutMenuBox");
    var numItems = $(".mobile-menu-wrap[name=" + getFlyoutName + "]").length;
    //console.log(numItems);
    if (numItems != '') {
        $(".mobile-menu-wrap").addClass("closed");
        $(".mobile-menu-wrap[name=" + getFlyoutName + "]").removeClass("closed");
    }
});

$(".mobile-menu-back-btn").click(function () {
    $(this).closest(".mobile-menu-wrap").addClass("closed");
});
/* mobile header left and top menu area script ended */


/* mobile search bar show/hide script start */
$(".search-btn").click(function () {
    $(".search-overlay").addClass("search-open");
});

$(".search-close-btn").click(function () {
    $(this).closest(".search-overlay").removeClass("search-open");
});
/* mobile search bar show/hide script ended */


/* tooltip script start */
$('[data-toggle="tooltip"]').tooltip();
/* tooltip script ended */




/* cart box mobile script start */
$(".cartbox-expand-collaps-btn").click(function () {
    $(this).closest(".cart-right-panel-for-mobile").toggleClass("opend");
});
/* cart box mobile script ended */
/* popinbox script start */
$(".popinBtn").click(function () {
    var popinBtnWidth = $(this).width(),
            popinBtnTopPos = $(this).offset().top,
            popinBtnLeftPos = $(this).offset().left,
            popinBtnRightPos = popinBtnLeftPos + popinBtnWidth,
            popinBtnDataValue = $(this).attr("data-target"),
            popinBoxHeight = $('[data-popinbox="' + popinBtnDataValue + '_box"]').height(),
            popinBoxBodyFixed = $('body').addClass('bobyScrollNone'),
            popinBoxCenterPos = -((popinBoxHeight) / 2) + "px";
    // all style remove script 
    setTimeout(function () {
        $(".popinBox").removeClass("showBox");
        $(".popinBox").removeAttr("style");
        $(".popinBoxOverlay").removeAttr("style");
    }, 10);
    // Activated popinbox property script
    setTimeout(function () {
        $('[data-target="' + popinBtnDataValue + '"]').addClass("selectedPopinBtn");
        $('[data-popinbox="' + popinBtnDataValue + '_box"]').addClass("showBox");
        $('[data-popinbox="' + popinBtnDataValue + '_box"]').css({'top': popinBtnTopPos, 'left': popinBtnRightPos + 20, "margin-top": popinBoxCenterPos});
        $("body").append('<div class="popinBoxOverlay"></div>');
        $('[data-popinbox="' + popinBtnDataValue + '_box"]').prepend('<a class="popinCloseBtn ui-close-button spin"><img src="' + baseUrl + '/assets/images/groupe558.svg" alt=""></a>');
        $(".popinBoxOverlay").css({"opacity": "1", "z-index": "99"});
    }, 20);
});
// popinbox closing script
$(".popinBoxGroup").on('click', '.popinCloseBtn', function (event) {
    $(".popinBoxOverlay").removeAttr("style");
    $(".popinBox").removeClass("showBox");
    $(".popinBtn").removeClass("selectedPopinBtn");
    $('body').removeClass('bobyScrollNone');
    setTimeout(function () {
        $(".popinBox").removeAttr("style");
        $(".popinBoxOverlay").remove();
        $(".popinBox .popinCloseBtn").remove();
    }, 50);
});
/* popinbox script ended */
/* switch-btn-with-labels script start */
var switchBtnWithlabelRadioEle = ".switch-btn-with-labels .switch-button input[type=checkbox]";
function switchBtnEvent(param) {
    $(param).closest(".switch-btn-with-labels").find(".labelname").removeClass("selectedLabel");
    if ($(param).is(":checked")) {
        $(param).closest(".switch-button").next().addClass("selectedLabel");
    } else {
        $(param).closest(".switch-button").prev().addClass("selectedLabel");
    }
    $(param).closest(".switch-btn-with-labels").find(".labelname:last-child").click(function(){
    $(param).closest(".switch-btn-with-labels").find(".labelname").removeClass("selectedLabel");
    if($(param).not(":checked")){ 
    $(param).prop('checked', true);
    $(param).closest(".switch-button").next().addClass("selectedLabel");
    }
    });

    $(param).closest(".switch-btn-with-labels").find(".labelname:first-child").click(function(){
    $(param).closest(".switch-btn-with-labels").find(".labelname").removeClass("selectedLabel");
    if($(param).is(":checked")){ 
    $(param).prop('checked', false);
    $(param).closest(".switch-button").prev().addClass("selectedLabel");
    }else{
        $(param).closest(".switch-button").prev().addClass("selectedLabel");
    }
    });
}

// on DOM ready
$(switchBtnWithlabelRadioEle).each(function () {
    switchBtnEvent(this);
});
// on checked event
$(switchBtnWithlabelRadioEle).click(function () {
    switchBtnEvent(this);
});
/* switch-btn-with-labels script ended */



  if($(".StickyElementAfterScroll_withfixheight").length == 1){  
	/* stickyelement script start */
	(function($) {
    'use strict';
  
      // define class and elements
      var StikyElement = ".StickyElementAfterScroll_withfixheight";
      var StikyClass = "Sticky";
  
      var StikyElementOffset = $(StikyElement).offset();
      var StikyElementTopOffset = StikyElementOffset.top;
      var GetStikyElementWidth = $(StikyElement).outerWidth();
      //console.log("sticky top offset:"+StikyElementTopOffset);
  
      // animation function
      function stickyHeaderAnimate_withfixheight(){
        var FullHeaderElement = StikyElement;
        var FullHeaderElementHeight = $(FullHeaderElement).outerHeight();
        var SetStikyElementWidth = $(StikyElement).css("width", GetStikyElementWidth);
        //console.log("Header Height:" + FullHeaderElementHeight);
  
        var scrollTop = $(window).scrollTop();
        //console.log("scroll to top:"+scrollTop);

        //console.log("sticky top offset:"+StikyElementTopOffset);
        
        if(scrollTop >= StikyElementTopOffset ){
          $("html").addClass(StikyClass);
          //$("body").css("padding-top", FullHeaderElementHeight);
        }else{
          $("html").removeClass(StikyClass);
          //$("body").css("padding-top", "");
        }
      }
  
      // on document ready
      stickyHeaderAnimate_withfixheight();
  
      // on window scroll
      jQuery(window).on('scroll', function(){
        stickyHeaderAnimate_withfixheight();		 
      });
  
      // on window resize
      jQuery(window).on('resize', function(){
        stickyHeaderAnimate_withfixheight();		 
      });
  
    }).apply(this, [jQuery]);
    /* stickyelement script ended */
  
  }

