<?php
// single image slider element start ---------------------------------------
$single_image_block_section_unique_id=1;
function vc_single_image_block_section($attr){

    global $single_image_block_section_unique_id, $theme_vc_short_dynamic_script;
    extract(
        shortcode_atts(array(
            'single_image_block_item_group'=>'',
            'single_image_block_title'=>'',
            'single_image_block_title_color'=>'',
            'single_image_block_image'=>'',
            'single_image_block_overlay'=>'',
            'single_image_block_overlay_color'=>' ',
            'single_image_block_overlay_color_opacity'=>'',
            'single_image_block_button'=>'',
            'single_image_block_button_link'=>' ',
            'single_image_block_button_target'=>'',
            'single_image_block_id' => '',
            'css' => '',
        ),$attr)
    );


    $single_image_block_section_unique_id  = !empty( $single_image_block_section_unique_id ) ? $single_image_block_section_unique_id : 1;
    $single_image_block_id         = ( $single_image_block_id ) ? $single_image_block_id : 'single-image-block-item';
    $single_image_block_id         .= '-' . $single_image_block_section_unique_id;
    $single_image_block_section_unique_id++;

    
    // Editor code
    $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ));

    //ob_start();
?>
<?php
/*if(!empty($single_image_block_title_size)){
           echo 'font-size:'.$single_image_block_title_size.'; line-height:'.$single_image_block_title_size.';'; 
        }*/
?>
<?php
$single_image_block_item_key = vc_param_group_parse_atts($single_image_block_item_group);
foreach($single_image_block_item_key as $single_image_block_item_value){
?>
<div class="wpb_column vc_column_container vc_col-sm-4">
    <div class="vc_column-inner">
        sdasdasdasd
    </div>
</div>
<?php } ?>
<?php ob_start(); ?>

<?php
$theme_vc_short_dynamic_script .= ob_get_contents();

ob_end_clean();
    //return ob_get_clean();
}
add_shortcode('single_image_block_base','vc_single_image_block_section');
// single image slider element ended ---------------------------------------