<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>
<?php // Start the loop.
	while ( have_posts() ) : the_post(); 
?>
<div class="bodyContarea innrpage">

	<!-- <div class="featuredBanner">
		<?php
			// if ( has_post_thumbnail() ) {
			// 	echo $featured_image = get_the_post_thumbnail();
			// }else{
			// 	echo '<img src="'.get_template_directory_uri().'/assets/images/body-bg-2.png" alt="">';
			// }
		?>
		<div class="featuredContntArea">
			<div>
				<h3><?php //the_title(); ?></h3>
			</div>
		</div>
	</div> -->

	<div class="contentarea">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<?php the_content(); ?>
				</div>
			</div>
		</div>
	</div>


</div>
<?php endwhile; ?>
<?php get_footer(); ?>
