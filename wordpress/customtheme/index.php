<?php
/**
Template name: Home Template Page
 */
?>

<?php get_header(); ?>
<?php // Start the loop.
	while ( have_posts() ) : the_post(); 
?>
<div class="bodyContarea">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <?php the_content(); ?>
            </div>
        </div>
    </div>
</div>
<?php endwhile; ?>
<?php get_footer(); ?>