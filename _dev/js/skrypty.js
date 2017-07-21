$(document).ready(function(){
	
	hash = window.location.hash;
	if(hash != '') {
	   	$('html, body').animate({
			scrollTop: $(hash).offset().top-50
		}, 500);
	}
	

	$('.jq-sec1').waypoint(function(direction){
		if(direction=="down") {
			$('nav.navbar').addClass('tlo');
		} else {
			$('nav.navbar').removeClass('tlo');
		}
	});

	// menu plus history state
	var menu = $('#navbar ul.nav li a');

	menu.on('click', function(e){
		var element = $(this).attr('href');

		//hash w adresie url
		if(history.pushState) {
	        history.pushState(null, null, element);
	    } else {
	        window.location.hash = element;
	    }
	    // hash w url end

		$('html, body').animate({
			scrollTop: $(element).offset().top-50
		}, 500);
		e.preventDefault();
	});

	window.onpopstate = function(evt) {
		hash = window.location.hash;
   		$('html, body').animate({
			scrollTop: $(hash).offset().top-50
		}, 500);
	};
	// menu plus history state end

	$('.jq-sec1').waypoint(function(direction){
		if(direction=="down") {
			$('.jq-about').addClass('animated slideInUp');
		} 
	}, { offset: '50%;'
	});





});