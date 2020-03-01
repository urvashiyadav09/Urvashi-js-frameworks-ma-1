$(document).ready(function(){

	$('#carouselMA').carousel();

	// Enable Carousel buttons
	  $(".carousel-control-prev").click(function(){
	    $("#carouselMA").carousel("prev");
	  });
	  $(".carousel-control-next").click(function(){
	    $("#carouselMA").carousel("next");
	  });

});
