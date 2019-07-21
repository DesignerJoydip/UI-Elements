<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <?php wp_head(); ?>
</head>

<body class="<?php body_class(); ?>">

<div id="preloader"></div>

    <!-- header open -->
    <header class="wow fadeInDown">
        <div class="topSectn">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col col-xl-5 col-lg-6 col-md-12 flex justify-content-end">
                    <?php dynamic_sidebar('header-social-1'); ?>
                    </div>
                </div>
            </div>
        </div><!-- top section closed -->
        <div class="btmSectn">
            <div class="container">
                <div class="row item-vcenter flexnowrap">
                    <div class="header-left-area">
                        <?php
                        if( get_custom_logo() ) {the_custom_logo(); } else {
                        ?>
                            <h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                        <?php } ?>
                    </div>
                    <div class="header-mid-rgt-area flex">
                        <div class="header-middle-area">
                            <?php 
                            wp_nav_menu( array(
                                'theme_location' => 'header',
                                'depth'          => 2,
                                'container'      => 'nav', // menu area wrap element
                                'container_class'   => 'primary-menu',// menu area wrap class
                                'container_id'      => '', // menu area wrap ID
                                'menu_class'     => '',// menu ul class
                                'fallback_cb'       => false,
                                )
                            );
                            ?>
                        </div>
                        <div class="header-right-area">
                        <a href="#" class="btn btn-round btn-solid btn-width wow fadeIn">VIDEO</a>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- bottom section closed -->
    </header>
    <!-- header closed -->




		