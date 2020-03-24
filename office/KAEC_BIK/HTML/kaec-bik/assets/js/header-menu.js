header_menu = function(){
    console.log('ddd');


    var nav_class = 'header-main-menu';
    $('.' + nav_class).each(function () {
        $(this).find('li').each(function () {
            $(this).has('ul').addClass('submenu');
        });

        if ($(window).width() >= 992) {

            $(this).removeClass('mobile-view');

        }else{
            $(this).addClass('mobile-view');
            var mobile_menu_heading_element = $(this).find(".mobile-navbar").length;
            if (mobile_menu_heading_element == 0) {
                $(this).prepend('<div class="mobile-navbar"><span class="burgermenu-icon"></span></div>');
            }
            $(this).find(".burgermenu-icon").click(function () {
                $(this).toggleClass('opened');
                $(this).parent().parent().find('.head-menulist').slideToggle(400);
            });
            $(this).find('li').each(function () {
                if ($(this).has('ul').length) {
                    var sub_dropdown = $(this).find(".sub-dropdown").length;
                    if (sub_dropdown == 0) {
                        $(this).prepend('<span class="sub-dropdown"></span>');
                        $(this).find(".sub-dropdown").on("click", function () {
                            $(this).toggleClass('expanded');
                            $(this).closest("li").children("ul").slideToggle();
                        });
                    }
                }
            });
        }

    });

    
}

$(window).on("resize", header_menu);

$(window).on("load", header_menu);