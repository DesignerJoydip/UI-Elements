<?php
// image gallery
vc_map(array(
    'name'=>esc_html__('Image Gallery', 'themebuilder'),// key => value
    'description'=>esc_html__('This is image gallery', 'themebuilder'),
    'base'=>'image_gallery_block_base',
    'category'=>'Custom Element',
    'icon'=>get_template_directory_uri().'/inc/pagebuilder/images/vc_single_image-block_icon.png',
    'params'=>array(
        array(
            'param_name'=>'image_gallery_block_item_group',
            'heading'=>'Image Gallery Items',
            'group' =>esc_html__( 'Gallery Items', 'themebuilder' ),
            'type'=>'param_group',
            'params'=>array(
        array(
            'param_name'=>'single_image_block_image',
            'type'=>'attach_image',
            'heading'=>esc_html__('Image', 'themebuilder'),
            //'group' => esc_html__( 'Styling', 'themebuilder' ),
            'value'=>'',
            'edit_field_class' => 'vc_col-sm-12',
        ),
        
    ),
    ),
    array(
        'type' => 'css_editor',
        'heading' => esc_html__( 'Element Styleing', 'themebuilder' ),
        'param_name' => 'css',
        'group' =>esc_html__( 'Design options', 'themebuilder' ),
    ),
),
));