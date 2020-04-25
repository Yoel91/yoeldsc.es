$(document).ready(function(){
    
    // page var
    var idx = $('#s-homepage');
    var abt = $('#s-sobremi');
    var resume = $('#s-experiencia');
    var skill = $('#s-habilidades');
    var porto = $('#s-portfolio');
    var contact = $('#s-contacto');
    
    resume.hide();
    abt.hide();
    skill.hide();
    porto.hide();
    contact.hide();
    
// function page
    $('#home-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#home-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(1200, function() {					 
                idx.fadeIn(2000);
                $(".current").removeClass("current");
                idx.addClass("current");
            });
    });
    
    $('#about-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#about-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(1200, function() {				 
                abt.fadeIn(2000);
                $(".current").removeClass("current");
                abt.addClass("current");
            });
    });
    
    $('#resume-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#resume-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(1200, function() {						 
                resume.fadeIn(2000);
                $(".current").removeClass("current");
                resume.addClass("current");
            });
    });
    
    $('#skill-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#skill-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(1200, function() {						 
                skill.fadeIn(2000);
                $(".current").removeClass("current");
                skill.addClass("current");
            });
    });
    
    $('#porto-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#porto-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(1200, function() {					 
                porto.fadeIn(3000);
                $(".current").removeClass("current");
                porto.addClass("current");
            });
    });
    
    $('#contact-btn').on('click', function(e) {
    e.preventDefault();
    $('.active').removeClass("active");
    $('#contact-btn').addClass("active");
	$(".current").fadeOut(1200, function() {						 
                contact.fadeIn(2000);
                $(".current").removeClass("current");
                contact.addClass("current");
            });
    });
});

var owl = $("#owl-cursos");
   owl.owlCarousel({
   items : 1,
    itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   autoPlay : 5000,
    loop: true,
   stopOnHover : true
});