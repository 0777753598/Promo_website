// if we have three layers to be parallax we need three speeds to move them seperately
	//desable the loader when page loads
		window.onload = function(e){
			$("#loader")[0].style.background = "transparent";
			$("#loader").addClass("fadeOut");
			show_more_less();

		}


	function show_more_less(){
		var showChar = 100;
		var moretoShow = "...";
		var more = "Learn More";
		var less = "Got it";

		$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + moretoShow+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;</span>';

			$(this).html(html);	}

	});
	}	


	var chat = document.getElementById('innerWrapper');
	console.log(chat);


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

		console.log(val);

	}

// $(document).ready(function(){
//     	$("#main_heading").effect("bounce",{times:3},2000);
//     	$("#main_heading").mouseover(function(){
//     		 $("#main_heading").effect("bounce",{times:2,distance:10,direction:"left"},1000);
//     	});
//     })    ;
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name='+this.hash.slice(1)+']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });