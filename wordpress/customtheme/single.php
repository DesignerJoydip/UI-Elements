<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>
<?php // Start the loop.
	while ( have_posts() ) : the_post(); 
?>
<div class="bodyContarea innrpost">



<div class="contentarea">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
				Single php
					<?php the_content(); ?>
				</div>
			</div>
		</div>
	</div>

</div>
<?php endwhile; ?>
<?php get_footer(); ?>
