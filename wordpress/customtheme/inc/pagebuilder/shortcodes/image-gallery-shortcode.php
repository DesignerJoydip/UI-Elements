<?php
// single image slider element start ---------------------------------------
$image_gallery_block_item_section_unique_id=1;
function vc_image_gallery_block_item_section($attr){

    global $image_gallery_block_item_section_unique_id, $theme_vc_short_dynamic_script;
    extract(
        shortcode_atts(array(
            'image_gallery_block_item_group'=>'',
            'single_image_block_image'=>'',
            'image_gallery_block_item_id' => '',
            'css' => '',
        ),$attr)
    );


    $image_gallery_block_item_section_unique_id  = !empty( $image_gallery_block_item_section_unique_id ) ? $image_gallery_block_item_section_unique_id : 1;
    $image_gallery_block_item_id         = ( $image_gallery_block_item_id ) ? $image_gallery_block_item_id : 'image-gallery-row';
    $image_gallery_block_item_id         .= '-' . $image_gallery_block_item_section_unique_id;
    $image_gallery_block_item_section_unique_id++;

    
    // Editor code
    $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ));

    //ob_start();
?>
<div class="image-gallery-section <?php echo esc_attr( $image_gallery_block_item_id ); ?> <?php echo esc_attr( $css_class ); ?>" id="<?php echo $image_gallery_block_item_id;  ?>">
<?php
$image_gallery_block_item_key = vc_param_group_parse_atts($image_gallery_block_item_group);
foreach($image_gallery_block_item_key as $image_gallery_block_item_value){
?>

<a href="<?php echo esc_html($image_gallery_block_item_value['single_image_block_image']); ?>" class="image-gallery-thumb popup-gallery"><img src="<?php echo esc_html($image_gallery_block_item_value['single_image_block_image']); ?>" alt="" title=""/></a>

<?php } ?>
</div>

<?php ob_start(); ?>
jQuery(document).ready(function () {
    jQuery('.popup-gallery').simpleLightbox();
});
<?php
$theme_vc_short_dynamic_script .= ob_get_contents();

ob_end_clean();
    //return ob_get_clean();
}
add_shortcode('image_gallery_block_item_base','vc_image_gallery_block_item_section');
// single image slider element ended ---------------------------------------