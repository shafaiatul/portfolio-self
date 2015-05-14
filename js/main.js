
(function($) {
	
	//when hover over the div with class portfolio-item,
	//Find the caption and change its css top property value from 
	//its original value -260px to 0
	$('.portfolio-item').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).find('.caption').stop().animate({top : '0px'}, {duration : 1000, easing : 'easeOutBounce'});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).find('.caption').stop().animate({top : '-260px'}, {duration : 1000, easing : 'easeOutBack'});
	});





	var height = $(window).height();

    $('#header').css('height', height);
	   

    //Scrollspy plugin
    $('body').scrollspy({ target: '.navbar-spy'});

})(this.jQuery);

