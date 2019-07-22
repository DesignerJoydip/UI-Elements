<?php

class theme_vc_short_dynamic_script_Addons {

    public function __construct() {
        add_action( 'wp_footer', array( $this, 'vc_short_dynamic_script' ), 9999 );
    }

    public function vc_short_dynamic_script() {

        global $theme_vc_short_dynamic_script;

        
        if( !empty( $theme_vc_short_dynamic_script ) ) {
          ?>
            <script type="text/javascript"> (function($) { "use strict"; <?php echo $theme_vc_short_dynamic_script; ?> })(jQuery); </script>
          <?php 
        }
    }
}
$theme_vc_short_dynamic_script_Addons = new theme_vc_short_dynamic_script_Addons();

require_once(get_template_directory().'/inc/pagebuilder/shortcodes/single-slider-shortcode.php');
require_once(get_template_directory().'/inc/pagebuilder/shortcodes/single-image-block-shortcode.php');
require_once(get_template_directory().'/inc/pagebuilder/shortcodes/image-gallery-shortcode.php');