<?php
function init_template(){
add_theme_support('post-thumbnails');
add_theme_support('title-tag');

}

add_action('after_setup_theme','init_template')

function assets(){

  // STYLES
  wp_register_style('montserrat','fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,300&display=swap',''.'1.0','all')

    wp_register_style('fontawesome','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css','','6.1.1','all');

  wp_enqueue_style( 'style',get_stylesheet_uri( ),array('montserrat','fontawesome'),'1.0','all')

// JAVASCRIPT

wp_enqueue_script('fontawesome','https://kit.fontawesome.com/83d6559691.js','','6.1.1',true);

wp_enqueue_script('bundle',get_template_directory_uri( ).'./bundle.js','','1.0',true)






}

add_action('wp_enqueue_scripts', 'assets')



?>