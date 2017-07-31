// if we have three layers to be parallax we need three speeds to move them seperately
	var speed_1 = 0.5; 
	var speed_2 = 0.3;
	var speed_3 = 0.1;
	var backgrounds = document.getElementsByClassName('header'); // take the elemets with the header tag

	

	window.onscroll = function(){ // when page is scrolled move each layer with seperate speeds
		
		var pageOffset = window.pageYOffset;
		
		var front_mountain = backgrounds[0];
		var val = "50%"+(pageYOffset*speed_1)+"px";
		
		front_mountain.style.backgroundPosition = val;
		var green_mountains = backgrounds[1];
		val = "50%"+(pageYOffset*speed_2)+"px";
		green_mountains.style.backgroundPosition = val;
		
		var background = backgrounds[2];
		val = "50%"+(pageYOffset*speed_3)+"px";
		background.style.backgroundPosition = val;

	}
