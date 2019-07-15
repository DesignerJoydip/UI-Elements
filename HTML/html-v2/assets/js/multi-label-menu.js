resizeFix = function () {
    var nav_class = 'primary-menu';
    var navbar_name = '';
    var nav_open_style_class = ''; //give blank for normal open OR animated open type class: flyout_left, flyout_right
    $('.'+ nav_class).each(function(){
        $(this).find('li').each(function () {
            $(this).has('ul').addClass('submenu');
        });
    
    if ($(window).width() >= 992) {
        //console.log("desktop");
        $(this).removeClass('mobile-view');
        $(this).each(function () {
            $(this).find('li').hover(
                function () {
                    $(this).children('ul').stop().delay(300).slideDown(300);
                },
                function () {
                    $('ul', this).stop().slideUp(100);
                }
            );
        });


    } else {
        //console.log("mobile");
        $(this).addClass('mobile-view');

        var mobile_menu_heading_element = $(this).find(".mobile-navbar").length;
        if(mobile_menu_heading_element == 0){
            $(this).prepend('<div class="mobile-navbar">'+navbar_name+' <span class="burgermenu-icon"></span></div>');
        }

        if(nav_open_style_class != ''){
            var animated_menu_class = $(this).find('.mobilemenu_ul.'+nav_open_style_class).length;
            $(this).parent().parent().find('.mobilemenu_ul').addClass(nav_open_style_class);
            if(mobile_menu_heading_element == 0){
                $(this).find('.mobilemenu_ul').prepend('<li class="primary_menu_mobile_hdng">Menu <span class="menuclose-icon"></span></li>');
            }
            $(this).find(".burgermenu-icon").click(function(){
                $(this).parent().parent().find('.mobilemenu_ul').toggleClass('ul_opened');
                $(this).closest('.primary-menu').toggleClass('menu_opened');
            });
            $(this).find(".menuclose-icon").click(function(){
                $(this).closest('.mobilemenu_ul').toggleClass('ul_opened');
                $(this).closest('.primary-menu').toggleClass('menu_opened');
            });
        }else{
            $(this).find(".burgermenu-icon").click(function(){
                $(this).toggleClass('opened');
                $(this).parent().parent().find('.mobilemenu_ul').slideToggle(400);
            });
        }

        $(this).find('li').each(function () {
            if($(this).has('ul').length){
                var sub_dropdown = $(this).find(".sub-dropdown").length;
                if(sub_dropdown == 0){
                    $(this).prepend('<span class="sub-dropdown"></span>');
                    $(this).find(".sub-dropdown").on("click", function(event) {
                        $(this).toggleClass('expanded');
                        $(this).parent().toggleClass("submenu_expanded");
                        $(this).closest("li").children("ul").slideToggle(400);
                    });
                }
            }
        });
    }

}); 
}, resizeFix(), $(window).on("resize", resizeFix)