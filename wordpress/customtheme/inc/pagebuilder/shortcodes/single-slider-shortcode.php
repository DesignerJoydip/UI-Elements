<?php
// single image slider element start ---------------------------------------
$single_slider_item_section_unique_id=1;
function vc_single_slider_item_section($attr){

    global $single_slider_item_section_unique_id, $theme_vc_short_dynamic_script;
    extract(
        shortcode_atts(array(
            'single_slider_item_title_color'=>'',
            'single_slider_item_description_color'=>'',
            'single_slider_item_title_size'=>'',
            'single_slider_item_group'=>'',
            'single_slider_item_title'=>' ',
            'single_slider_item_title_2'=>'',
            'single_slider_item_description_align'=>'',
            'single_slider_item_description'=>' ',
            'single_slider_item_image'=>'',
            'single_slider_item_button'=>'',
            'single_slider_item_button_link'=>'',
            'single_slider_item_button_link_target'=>'',
            'single_slider_overlay'=>'',
            'single_slider_overlay_color'=>'',
            'single_slider_overlay_color_opacity'=>'',
            'single_slider_item_id' => '',
            'css' => '',
        ),$attr)
    );


    $single_slider_item_section_unique_id  = !empty( $single_slider_item_section_unique_id ) ? $single_slider_item_section_unique_id : 1;
    $single_slider_item_id         = ( $single_slider_item_id ) ? $single_slider_item_id : 'single-owl-carousel-slider';
    $single_slider_item_id         .= '-' . $single_slider_item_section_unique_id;
    $single_slider_item_section_unique_id++;

    
    // Editor code
    $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ));

    //ob_start();
?>
<div class="owl-carousel single-slider-carousel <?php echo esc_attr( $single_slider_item_id ); ?> <?php echo esc_attr( $css_class ); ?>" id="<?php echo $single_slider_item_id;  ?>">
<?php
$single_slider_item_key = vc_param_group_parse_atts($single_slider_item_group);
foreach($single_slider_item_key as $single_slider_item_value){
?>
<div class="single_slider_item_wrapper">
    <div class="single_slider_item_image">
        <?php
         if(!empty($single_slider_item_value['single_slider_item_image'])){
            $single_slider_item_image_src = wp_get_attachment_image_src($single_slider_item_value['single_slider_item_image'], "full");
            if($single_slider_item_image_src){
                echo '<img src="'.esc_url($single_slider_item_image_src[0]).'" alt="">';
            }
        }
        ?>
    </div>
    <?php
    if($single_slider_item_value['single_slider_overlay']=='1'){
        echo '<div class="slideOverlay" style="opacity:'.esc_html($single_slider_item_value['single_slider_overlay_color_opacity']).'; background:'.esc_html($single_slider_item_value['single_slider_overlay_color']).'"></div>';
    }
    ?>
    <div class="sliderCaption" style="<?php
        if(!empty($single_slider_item_description_align)){
           echo 'text-align:'.$single_slider_item_description_align.';'; 
        } ?>">
        <div class="container"> 
        <h3 class="fadeOut" style="<?php
        if(!empty($single_slider_item_title_color)){
           echo 'color:'.$single_slider_item_title_color.';'; 
        } ?>
        <?php
        if(!empty($single_slider_item_title_size)){
           echo 'font-size:'.$single_slider_item_title_size.'; line-height:'.$single_slider_item_title_size.';'; 
        } ?>
        " ><?php
        if(!empty($single_slider_item_value['single_slider_item_title'])){
           echo esc_html($single_slider_item_value['single_slider_item_title']); 
        } ?></h3>
        <h3 class="fadeOut" style="<?php
        if(!empty($single_slider_item_title_color)){
           echo 'color:'.$single_slider_item_title_color.';'; 
        } ?>
        <?php
        if(!empty($single_slider_item_title_size)){
           echo 'font-size:'.$single_slider_item_title_size.'; line-height:'.$single_slider_item_title_size.';'; 
        } ?>
        " ><?php
        if(!empty($single_slider_item_value['single_slider_item_title_2'])){
           echo esc_html($single_slider_item_value['single_slider_item_title_2']); 
        } ?></h3>
        <p class="fadeOut" style="
        <?php
        if(!empty($single_slider_item_description_color)){
           echo 'color:'.$single_slider_item_description_color.';'; 
        } ?>
        "><?php
        if(!empty($single_slider_item_value['single_slider_item_description'])){
         echo esc_html($single_slider_item_value['single_slider_item_description']); 
        } ?></p>
        <?php
        if(!empty($single_slider_item_value['single_slider_item_button'])){
        ?>
        <a href="<?php if(!empty($single_slider_item_value['single_slider_item_button_link'])){ echo esc_html($single_slider_item_value['single_slider_item_button_link']); } ?>" class="btn btn-round btn-solid btn-width single_slider_button fadeOut" target="<?php if(!empty($single_slider_item_value['single_slider_item_button_link_target'])){ echo esc_html($single_slider_item_value['single_slider_item_button_link_target']); } ?>"><?php echo esc_html($single_slider_item_value['single_slider_item_button']); ?></a>
        <?php } ?>
        </div>
    </div>
</div>
<?php } ?>
</div>

<?php ob_start(); ?>
jQuery(document).ready(function () {
    jQuery('.<?php echo $single_slider_item_id; ?>').owlCarousel({
        /*animateOut: 'slideOutDown',
        animateIn: 'slideInUp',*/
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450,
        items: 1,
        margin: 0,
        stagePadding: 0,
        smartSpeed: 450,
        mouseDrag: true,
        touchDrag: true,
        nav:false,
        navText: ['<i class="fa fa-angle-left fa-2x fa-fw" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-2x fa-fw" aria-hidden="true"></i>'], //we will be
    });
});
<?php
$theme_vc_short_dynamic_script .= ob_get_contents();

ob_end_clean();
    //return ob_get_clean();
}
add_shortcode('single_slider_item_base','vc_single_slider_item_section');
// single image slider element ended ---------------------------------------