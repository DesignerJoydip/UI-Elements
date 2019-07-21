<?php
// support title tag
add_theme_support( 'title-tag' );

// support Enqueue Scripts -----------------------------
function theme_enqueue_scripts(){

  wp_enqueue_style( 'fontawasome', get_template_directory_uri().'/assets/fonts/font-awesome/font-awesome.css', array(), '1.0' );
  wp_enqueue_style( 'opensans_Poiret', 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Poiret+One&display=swap', array(), '1.0' );
  wp_enqueue_style( 'opensans_con', 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&display=swap', array(), '1.0' );
  wp_enqueue_style( 'bootstrap', get_template_directory_uri().'/assets/css/bootstrap.min.css', array(), '3.3.7' );
  wp_enqueue_style( 'owl-carousel', get_template_directory_uri().'/assets/css/owl.carousel.min.css', array(), '3.3.7' );
  wp_enqueue_style( 'image-lightbox', get_template_directory_uri().'/assets/css/image-lightbox.min.css', array(), '3.3.7' );
  wp_enqueue_style( 'animate', get_template_directory_uri().'/assets/css/animate.css', array(), '3.3.7' );
  wp_enqueue_style( 'vc-style', get_template_directory_uri().'/assets/css/vc-style.css', array(), '3.3.7' );
	wp_enqueue_style( 'custom-css', get_template_directory_uri().'/assets/css/custom.css', array(), '3.3.7' );


	// Theme stylesheet.
	wp_enqueue_style( 'style', get_stylesheet_uri() );

	// Theme main jquery.
  wp_enqueue_script( 'jquery' );
  wp_enqueue_script( 'owl-carousel-js', get_template_directory_uri() . '/assets/js/owl.carousel.min.js', array(), '3.3.7', true );
  wp_enqueue_script( 'wowjs', get_template_directory_uri() . '/assets/js/wow.min.js', array(), '3.3.7', true );
  wp_enqueue_script( 'multi-label-menu-js', get_template_directory_uri() . '/assets/js/multi-label-menu.js', array(), '3.3.7', true );
  wp_enqueue_script( 'image-lightbox-js', get_template_directory_uri() . '/assets/js/image-lightbox.js', array(), '3.3.7', true );
  wp_enqueue_script( 'scriptjs', get_template_directory_uri() . '/assets/js/script.js', array(), '3.3.7', true );

}
add_action('wp_enqueue_scripts','theme_enqueue_scripts');

//-----------------------------------------------------


// support logo ---------------------------------
function theme_logo_setup() {
    
    add_theme_support( 'custom-logo' );

}
add_action( 'after_setup_theme', 'theme_logo_setup' );
//-----------------------------------------------------



// for show menu item ---------------------------------
function theme_theme_setup() {
  register_nav_menus( array( 
    'header' => 'Header menu', 
    'footer' => 'Footer menu' 
  ) );
 }
add_action( 'after_setup_theme', 'theme_theme_setup' );
//-----------------------------------------------------

function theme_post_thumbnails() {
    add_theme_support( 'post-thumbnails' );
}

add_action( 'after_setup_theme', 'theme_post_thumbnails' );


/*--------------------------------------------------------------------
Widget function
---------------------------------------------------------------------*/
function theme_widgets_init() {
  register_sidebar( array(
    'name'          => __( 'Header Social Links' ),
    'id'            => 'header-social-1',
    'description'   => __( 'Add widgets here to appear in your sidebar.' ),
    'before_widget' => '<div id="%1$s" class="widget quickServiceBox">',
    'after_widget'  => '</div>',
    'before_title'  => '<h3 class="footerHeading">',
    'after_title'   => '</h3>',
  ) );
   register_sidebar( array(
    'name'          => __( 'Footer social' ),
    'id'            => 'footer-social-1',
    'description'   => __( 'Add widgets here to appear in your sidebar.' ),
    //'before_widget' => '<div id="%1$s" class="widget quickServiceBox">',
    //'after_widget'  => '</div>',
    'before_title'  => '<h3 class="footerHeading">',
    'after_title'   => '</h3>',
  ) );
  register_sidebar( array(
    'name'          => __( 'Footer Copyright' ),
    'id'            => 'footer-copy-1',
    'description'   => __( 'Add widgets here to appear in your sidebar.' ),
    //'before_widget' => '<div id="%1$s" class="widget quickServiceBox">',
    //'after_widget'  => '</div>',
    'before_title'  => '<h3 class="footerHeading">',
    'after_title'   => '</h3>',
  ) );
}
add_action( 'widgets_init', 'theme_widgets_init' );

/*
require_once(get_template_directory().'/inc/walker.php');

require_once(get_template_directory().'/inc/megamenuwalker.php');
*/

/*
require_once(get_template_directory().'/theme-option.php');
require_once(get_template_directory().'/theme-elements.php');
*/

require_once(get_template_directory().'/inc/pagebuilder/vc_map.php');
require_once(get_template_directory().'/inc/pagebuilder/vc_shortcode.php');





