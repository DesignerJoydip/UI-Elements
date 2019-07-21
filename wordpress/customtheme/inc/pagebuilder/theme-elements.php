<?php

class themebuilder_Addons {

    public function __construct() {
        add_action( 'wp_footer', array( $this, 'themebuilder_addons_slider_script' ), 9999 );
    }

    public function themebuilder_addons_slider_script() {

        global $themebuilder_slider_script;

        
        if( !empty( $themebuilder_slider_script ) ) {
          ?>
            <script type="text/javascript"> (function($) { "use strict"; <?php echo $themebuilder_slider_script; ?> })(jQuery); </script>
          <?php 
        }
    }
}
$themebuilder_Addons = new themebuilder_Addons();









// Static Banner element start ---------------------------------------
function vc_static_banner($attr){
    extract(
        shortcode_atts(array(
            'static_banner_title'=>'Banner Title',
            'static_banner_title_h_align' => 'left',
            'static_banner_title_color'=>'#ff0000',
            'static_banner_description'=>'Banner description goes here....',
            'static_banner_image'=> get_template_directory_uri().'/assets/images/vc-oddon-icon.png" alt="">',
            'css' => '',
        ),$attr)
    );
    // Editor code
    $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ));

    ob_start();

    
    
?>
<div class="vc_static_banner <?php echo esc_attr( $css_class ); ?>">
    <?php
    $static_banner_image_src = wp_get_attachment_image_src($static_banner_image, "full");
    if($static_banner_image_src){
        echo '<img src="'.esc_url($static_banner_image_src[0]).'" alt="">';
    }else{
        echo '<img src="'.get_template_directory_uri().'/assets/images/vc-oddon-icon.png" alt="">';
    }
    ?>
    <div class="static_banner_caption">
    <?php 
        echo '<h1 style="color:'.$static_banner_title_color.'; text-align:'.$static_banner_title_h_align.';">'.esc_html($static_banner_title).'</h1>';
    ?>
        <p><?php echo esc_html($static_banner_description); ?></p>
    </div>
</div>
<?php
    return ob_get_clean();
}
add_shortcode('static_banner_base','vc_static_banner');
// Static Banner element ended ---------------------------------------



// Three Image Grid element start ---------------------------------------
$three_image_grid_image_unique_id=1;
function vc_three_image_grid($attr){

    global $three_image_grid_image_unique_id, $themebuilder_slider_script;
    extract(
        shortcode_atts(array(
            'three_image_grid_image_1'=>'',
            'three_image_grid_image_1_link' => '',
            'three_image_grid_image_1_link_option'=>'',
            'three_image_grid_image_2'=>'',
            'three_image_grid_image_2_link' => '',
            'three_image_grid_image_2_link_option'=>'',
            'three_image_grid_image_3'=>'',
            'three_image_grid_image_3_link' => '',
            'three_image_grid_image_3_link_option'=>'',
            'three_image_grid_image_id' => '',
            'css' => '',
        ),$attr)
    );
    // Editor code
    $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ));
    

    $three_image_grid_image_unique_id  = !empty( $three_image_grid_image_unique_id ) ? $three_image_grid_image_unique_id : 1;
    $three_image_grid_image_id         = ( $three_image_grid_image_id ) ? $three_image_grid_image_id : 'threeImagegrid';
    $three_image_grid_image_id         .= '-' . $three_image_grid_image_unique_id;
    $three_image_grid_image_unique_id++;
    
?>

<div class="Index-gallery-inner clear <?php echo esc_attr( $css_class ); ?>" id="<?php echo $three_image_grid_image_id;  ?>">

    <div class="Index-gallery-item">
        <div class="Index-gallery-item-inner">
            <a <?php if(!empty($three_image_grid_image_1_link)){ echo 'href="'.esc_html($three_image_grid_image_1_link).'"'; } ?> target="<?php if(!empty($three_image_grid_image_1_link_option)){ echo esc_html($three_image_grid_image_1_link_option); } ?>" class="Index-gallery-item-image">
             <?php
                $three_image_grid_image_1_src = wp_get_attachment_image_src($three_image_grid_image_1, "full");
                if($three_image_grid_image_1_src){
                    echo '<img src="'.esc_url($three_image_grid_image_1_src[0]).'" alt="">';
                }else{
                    //echo '<img src="'.get_template_directory_uri().'/assets/images/vc-oddon-icon.png" alt="">';
                }
            ?>
            </a>
        </div>
    </div>

    <div class="Index-gallery-item">
        <div class="Index-gallery-item-inner">
            <a <?php if(!empty($three_image_grid_image_2_link)){ echo 'href="'.esc_html($three_image_grid_image_2_link).'"'; } ?> target="<?php if(!empty($three_image_grid_image_2_link_option)){ echo esc_html($three_image_grid_image_2_link_option); } ?>" class="Index-gallery-item-image">
                <?php
                    $three_image_grid_image_2_src = wp_get_attachment_image_src($three_image_grid_image_2, "full");
                    if($three_image_grid_image_2_src){
                        echo '<img src="'.esc_url($three_image_grid_image_2_src[0]).'" alt="">';
                    }else{
                        //echo '<img src="'.get_template_directory_uri().'/assets/images/vc-oddon-icon.png" alt="">';
                    }
                ?>
            </a>
        </div>
    </div>


    <div class="Index-gallery-item">
        <div class="Index-gallery-item-inner">
            <a <?php if(!empty($three_image_grid_image_3_link)){ echo 'href="'.esc_html($three_image_grid_image_3_link).'"'; } ?> target="<?php if(!empty($three_image_grid_image_3_link_option)){ echo esc_html($three_image_grid_image_3_link_option); } ?>" class="Index-gallery-item-image">
                <?php
                    $three_image_grid_image_3_src = wp_get_attachment_image_src($three_image_grid_image_3, "full");
                    if($three_image_grid_image_3_src){
                        echo '<img src="'.esc_url($three_image_grid_image_3_src[0]).'" alt="">';
                    }else{
                        //echo '<img src="'.get_template_directory_uri().'/assets/images/vc-oddon-icon.png" alt="">';
                    }
                ?>
            </a>
        </div>
    </div>

</div>



<?php ob_start(); ?>
function eq_imageBox() {
	jQuery('.Index-gallery-item').each(function () {
		//console.log($(this).width());
		var padd = 15;
		var bwidth = jQuery(this).width();
		jQuery(this).css("height", bwidth + "px");
		jQuery(this > "img").css("height", bwidth);
	});
}
jQuery(document).ready(function () { eq_imageBox(); });
jQuery(window).resize(function () { eq_imageBox(); });
<?php
$themebuilder_slider_script .= ob_get_contents();

ob_end_clean();
    //return ob_get_clean();
}
add_shortcode('three_image_grid_base','vc_three_image_grid');
// Three Image Grid element ended ---------------------------------------

?>