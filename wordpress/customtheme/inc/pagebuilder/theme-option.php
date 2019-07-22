<?php


/*------------------------------------------------------------------------------------------------------------*/

function integrateWithVCmap(){ 

    

    // static banner
    vc_map(array(

        'name'=>esc_html__('Static Banner','themebuilder'),// key => value
        'description'=>esc_html__('This is Static Banner', 'themebuilder'),
        'base'=>'static_banner_base',
        'category'=>'Custom Element',
        'icon'=>get_template_directory_uri().'/assets/images/vc-oddon-icon.png',
        'params'=>array(
            array(
               'param_name'=>'static_banner_title',
               'type'=>'textfield',
               'heading'=>esc_html__('Heading', 'themebuilder'),
               'value'=>'', 
            ),
            array(
               'param_name'=>'static_banner_title_color',
               'type'=>'colorpicker',
               'group' => esc_html__('Heading Option', 'themebuilder'),
               'heading'=>esc_html__('Heading Color', 'themebuilder'),
               'value'=>'', 
            ),
            array(
                'param_name'=>'static_banner_title_h_align',
                'type'=>'dropdown',
                'group' => esc_html__('Heading Option', 'themebuilder'),
                'heading'=>esc_html__('Heading alignment', 'themebuilder'),
                'value'=>array(
                    esc_html__('Left', 'themebuilder')=>'left',
                    esc_html__('Center', 'themebuilder')=>'center',
                    esc_html__('Right', 'themebuilder')=>'right',
                    esc_html__('Justify', 'themebuilder')=>'justify',
                ), 
            ),
            array(
               'param_name'=>'static_banner_description',
               'type'=>'textarea',
               'heading'=>esc_html__('Description', 'themebuilder'),
               'value'=>'', 
            ),
            array(
               'param_name'=>'static_banner_image',
               'type'=>'attach_image',
               'heading'=>esc_html__('Image', 'themebuilder'),
               'value'=>'', 
            ),
            array(
                'type' => 'css_editor',
                'heading' => esc_html__( 'Element Styleing', 'themebuilder' ),
                'param_name' => 'css',
                'group' =>esc_html__( 'Design options', 'themebuilder' ),
            ),
        ),

    ));

    // Image gallery
    /*vc_map(array(

    'name'=>esc_html__('Image Gallery','themebuilder'),// key => value
    'description'=>esc_html__('This is image gallery', 'themebuilder'),
    'base'=>'image_gallery_base',
    'category'=>'Custom Element',
    'icon'=>get_template_directory_uri().'/assets/images/vc-oddon-icon.png',
    'params'=>array(
                    array(
                        'param_name'=>'image_gallery_heading',
                        'type'=>'textfield',
                        'heading'=>esc_html__('Heading', 'themebuilder'),
                        'value'=>'', 
                    ),
                    array(
                        'param_name'=>'image_gallery_type',
                        'type'=>'dropdown',
                        'edit_field_class' => 'vc_col-sm-4',
                        'heading'=>esc_html__('Gallery Type', 'themebuilder'),
                        'value'=>array(
                            esc_html__('Normal Gallery', 'themebuilder')=>'normalGallery',
                            esc_html__('Masonary Gallery', 'themebuilder')=>'masonaryGallery',
                            esc_html__('Justify Gallery', 'themebuilder')=>'justifyGallery',
                        ), 
                    ),
                    array(
                        'type' => 'css_editor',
                        'heading' => esc_html__( 'Element Styleing', 'themebuilder' ),
                        'param_name' => 'css',
                        'group' =>esc_html__( 'Design options', 'themebuilder' ),
                    ),
                    array(
                        'param_name'=>'image_gallery_group',
                        'heading'=>'Image Items',
                        'type'=>'param_group',
                        'params'=>array(     
                        array(
                            'param_name'=>'image_gallery_title',
                            'type'=>'textfield',
                            'heading'=>esc_html__('Title', 'themebuilder'),
                            'value'=>'', 
                        ),
                        array(
                            'param_name'=>'image_gallery_image',
                            'type'=>'attach_image',
                            'heading'=>esc_html__('Image', 'themebuilder'),
                            'value'=>'', 
                        ),
                    ),
                ),
            ),
    ));*/




    // Three Image grid
    vc_map(array(

        'name'=>esc_html__('Three Image Grid','themebuilder'),// key => value
        'description'=>esc_html__('This is Three image grid', 'themebuilder'),
        'base'=>'three_image_grid_base',
        'category'=>'Custom Element',
        'icon'=>get_template_directory_uri().'/assets/images/vc-oddon-icon.png',
        'params'=>array(
            array(
               'param_name'=>'three_image_grid_image_1',
               'edit_field_class' => 'vc_col-sm-12',
               'type'=>'attach_image',
               'heading'=>esc_html__('', 'themebuilder'),
               'value'=>'', 
            ),
            array(
               'param_name'=>'three_image_grid_image_1_link',
               'edit_field_class' => 'vc_col-sm-9',
               'type'=>'textfield',
               'heading'=>esc_html__('URL', 'themebuilder'),
               'value'=>'',  
            ),
            array(
               'param_name'=>'three_image_grid_image_1_link_option',
               'edit_field_class' => 'vc_col-sm-3',
               'type'=>'dropdown',
               'heading'=>esc_html__('link Target', 'themebuilder'),
               'value'=>array(
                    esc_html__('Same Tab', 'themebuilder')=>'_self',
                    esc_html__('New Tab', 'themebuilder')=>'_blank',
                ),  
            ),
            array(
               'param_name'=>'three_image_grid_image_2',
               'edit_field_class' => 'vc_col-sm-12',
               'type'=>'attach_image',
               'heading'=>esc_html__('', 'themebuilder'),
               'value'=>'', 
            ),
            array(
               'param_name'=>'three_image_grid_image_2_link',
               'edit_field_class' => 'vc_col-sm-9',
               'type'=>'textfield',
               'heading'=>esc_html__('URL', 'themebuilder'),
               'value'=>'',  
            ),
            array(
               'param_name'=>'three_image_grid_image_2_link_option',
               'edit_field_class' => 'vc_col-sm-3',
               'type'=>'dropdown',
               'heading'=>esc_html__('link Target', 'themebuilder'),
               'value'=>array(
                    esc_html__('Same Tab', 'themebuilder')=>'_self',
                    esc_html__('New Tab', 'themebuilder')=>'_blank',
                ),  
            ),
            array(
               'param_name'=>'three_image_grid_image_3',
               'edit_field_class' => 'vc_col-sm-12',
               'type'=>'attach_image',
               'heading'=>esc_html__('', 'themebuilder'),
               'value'=>'', 
            ), 
            array(
               'param_name'=>'three_image_grid_image_3_link',
               'edit_field_class' => 'vc_col-sm-9',
               'type'=>'textfield',
               'heading'=>esc_html__('URL', 'themebuilder'),
               'value'=>'',  
            ),
            array(
               'param_name'=>'three_image_grid_image_3_link_option',
               'edit_field_class' => 'vc_col-sm-3',
               'type'=>'dropdown',
               'heading'=>esc_html__('link Target', 'themebuilder'),
               'value'=>array(
                    esc_html__('Same Tab', 'themebuilder')=>'_self',
                    esc_html__('New Tab', 'themebuilder')=>'_blank',
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

}
add_action('vc_before_init','integrateWithVCmap');
?>