<?php
function integrateWithVCmap(){

    require_once(get_template_directory().'/inc/pagebuilder/map/single-slider-map.php');
    require_once(get_template_directory().'/inc/pagebuilder/map/single-image-block-map.php');
    require_once(get_template_directory().'/inc/pagebuilder/map/image-gallery-map.php');


}
 add_action('vc_before_init','integrateWithVCmap');