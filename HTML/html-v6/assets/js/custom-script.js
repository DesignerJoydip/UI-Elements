/* stickyHeaderAnimate script start */
(function($) {
	'use strict';

		// define class and elements
		var FullHeaderElement = ".header";
		var StikyElement = ".StickyElementAfterScroll";
		var StikyClass = "Sticky";

		// animation function
		function stickyHeaderAnimate(){
			var FullHeaderElementHeight = $(FullHeaderElement).outerHeight();
			$(FullHeaderElement).css("min-height", FullHeaderElementHeight+"px");
			//console.log(FullHeaderElementHeight);
			var scrollTop = $(window).scrollTop();
			var PrevSectionOfStikyElement = $(StikyElement).prev().outerHeight();
			var StikyElementOffset = scrollTop - PrevSectionOfStikyElement;
			if(scrollTop>=PrevSectionOfStikyElement){
				$(StikyElement).addClass(StikyClass);
			}else{
				$(StikyElement).removeClass(StikyClass);
			}	
		}

		// on ducument ready
		stickyHeaderAnimate();

		// on window scroll
		jQuery(window).on('scroll', function(){
			stickyHeaderAnimate();		 
		});

		// on window resize
		jQuery(window).on('resize', function(){
			stickyHeaderAnimate();		 
		});

	}).apply(this, [jQuery]);
    /* stickyHeaderAnimate script ended */
    

    $('.slick-animated-normal-slider').slick({
		dots: false,
		infinite: true,
		arrows:true,
		autoplay: true,
		speed: 800,
		//lazyLoad: 'progressive',
		fade: true,
		//cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		rtl: false,
		//nextArrow: '<i class="fa fa-arrow-right"></i>',
		//prevArrow: '<i class="fa fa-arrow-left"></i>',
		
	}).slickAnimation();




$('.payment-slider').slick({
	dots: false,
	infinite: true,
	arrows: false,
	autoplay: true,
	centerMode: false,
	speed: 1000,
	//lazyLoad: 'progressive',
	fade: false,
	//cssEase: 'linear',
	slidesToShow: 5,
	slidesToScroll: 1,
	rtl: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
	//appendArrows: ".arrow-wrap-for-skill"
	//nextArrow: '<i class="fa fa-arrow-right"></i>',
	//prevArrow: '<i class="fa fa-arrow-left"></i>',

});


$(".sideBarTrigger").click(function(e){
	getTriggerSlidebarName = $(this).attr("data-targetSideBar");
	$(".stickySideBar").removeClass("openedSidebar");
	$("*[data-sidebarName=" + getTriggerSlidebarName + "]").addClass("openedSidebar");
	e.stopPropagation();
});

$(".closeTriggerElement").click(function(){
	$(this).closest(".stickySideBar").removeClass("openedSidebar");
});


$(document).click(function (event) {
	if (!$(event.target).closest(".stickySideBar-inner").length) {
		$("body").find(".stickySideBar").removeClass("openedSidebar");
	}
});


/* window load script start */
jQuery(window).on("load", function (e) { 

    /* preloader script */
    jQuery("#preloader").fadeOut(); 

});
/* window load script ended */