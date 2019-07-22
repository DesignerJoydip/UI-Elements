<?php
// single image slider
vc_map(array(
    'name'=>esc_html__('Single Image Block', 'themebuilder'),// key => value
    'description'=>esc_html__('This is single image block', 'themebuilder'),
    'base'=>'single_image_block_base',
    'category'=>'Custom Element',
    'icon'=>get_template_directory_uri().'/inc/pagebuilder/images/vc_single_image-block_icon.png',
    'params'=>array(
        array(
            'param_name'=>'single_image_block_item_group',
            'heading'=>'Single Image Slider Items',
            'group' =>esc_html__( 'Slide Items', 'themebuilder' ),
            'type'=>'param_group',
            'params'=>array(
        array(
            'param_name'=>'single_image_block_title',
            'type'=>'textfield',
            'heading'=>esc_html__('Heading', 'themebuilder'),
            //'group' => esc_html__( 'Styling', 'themebuilder' ),
            'value'=>'',
            'edit_field_class' => 'vc_col-sm-12',
        ),
        array(
            'param_name'=>'single_image_block_title_color',
            'type'=>'colorpicker',
            'heading'=>esc_html__('Heading Color', 'themebuilder'),
            //'group' => esc_html__( 'Styling', 'themebuilder' ),
            'value'=>'',
            'edit_field_class' => 'vc_col-sm-12',
        ),
        array(
            'param_name'=>'single_image_block_image',
            'type'=>'attach_image',
            'heading'=>esc_html__('Image', 'themebuilder'),
            //'group' => esc_html__( 'Styling', 'themebuilder' ),
            'value'=>'',
            'edit_field_class' => 'vc_col-sm-12',
        ),
        array(
            'param_name'=>'single_image_block_overlay',
            'type'=>'dropdown',
            'heading'=>esc_html__('Block Overlay', 'themebuilder'),
            //'group' => esc_html__( 'Styling', 'themebuilder' ),
                'value'=>array(
                    esc_html__('Hide', 'themebuilder')=>'0',
                    esc_html__('Show', 'themebuilder')=>'1',
                ), 
            'edit_field_class' => 'vc_col-sm-12',
        ),
        array(
            'param_name'=>'single_image_block_overlay_color',
            'type'=>'dropdown',
            'heading'=>esc_html__('Overlay Color', 'themebuilder'),
            'type'=>'colorpicker',
            'dependency'=>array(
                'element'=>'single_image_block_overlay',
                'value'=>'1',
            ),
        ),
        array(
            'param_name'=>'single_image_block_overlay_color_opacity',
            'type'=>'dropdown',
            'heading'=>esc_html__('Overlay Color Opacity', 'themebulider'),
            'type'=>'dropdown',
            'dependency'=>array(
                'element'=>'single_image_block_overlay',
                'value'=>'1',
            ),
            'value'=>array(
                esc_html__('1', 'themebuilder')=>'1',
                esc_html__('0.9', 'themebuilder')=>'0.9',
                esc_html__('0.8', 'themebuilder')=>'0.8',
                esc_html__('0.7', 'themebuilder')=>'0.7',
                esc_html__('0.6', 'themebuilder')=>'0.6',
                esc_html__('0.5', 'themebuilder')=>'0.5',
                esc_html__('0.4', 'themebuilder')=>'0.4',
                esc_html__('0.3', 'themebuilder')=>'0.3',
                esc_html__('0.2', 'themebuilder')=>'0.2',
                esc_html__('0.1', 'themebuilder')=>'0.1',
            ),
        ),
        array(
            'param_name'=>'single_image_block_button',
            'type'=>'textfield',
            'heading'=>esc_html__('Button Title', 'themebuilder'),
            //'group' => esc_html__( 'Styling', 'themebuilder' ),
            'value'=>'',
            'edit_field_class' => 'vc_col-sm-12',
        ),
        array(
            'param_name'=>'single_image_block_button_link',
            'type'=>'textfield',
            'heading'=>esc_html__('Button Link', 'themebuilder'),
            //'group' => esc_html__( 'Styling', 'themebuilder' ),
            'value'=>'',
            'edit_field_class' => 'vc_col-sm-12',
        ),
        array(
            'param_name'=>'single_image_block_button_target',
            'type'=>'dropdown',
            'heading'=>esc_html__('Button Target', 'themebuilder'),
            //'group' => esc_html__( 'Styling', 'themebuilder' ),
            'value'=>array(
                esc_html__('Select', 'themebuilder')=>'',
                esc_html__('Self', 'themebuilder')=>'_self',
                esc_html__('Parent', 'themebuilder')=>'_parent',
                esc_html__('Blank', 'themebuilder')=>'_blank',
            ),
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