$(document).ready(function(){
	
// activate Carousel
	$('#carouselMA').carousel();

	// activate Carousel buttons
	  $(".carousel-control-prev").click(function(){
	    $("#carouselMA").carousel("prev");
	  });
	  $(".carousel-control-next").click(function(){
	    $("#carouselMA").carousel("next");
	  });

});
