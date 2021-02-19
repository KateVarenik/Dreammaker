 $(document).ready(function(){
 		// -------open-card

	 	$('.questions__question').click(function(event){
	 		$(this).toggleClass('active').next().slideToggle(300);
	 		$(this).parent().toggleClass('active');
	 	});

	 	// -------menu-burger

	 	$('.menu__burger').click(function(event){
	 		$('.menu__burger, .navbar__menu').toggleClass('active');
	 		$('body').toggleClass('lock');
	 	});

	 	$('.footer__title').click(function(event){
	 		$(this).toggleClass('active').next().slideToggle(300);
	 	});

	 	var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 1000,
			speedAsDuration: true
		});

	 });

