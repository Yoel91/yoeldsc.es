$('#form1').submit(function ()  {
    
    var name, subject, email, message, dataString;
    name = $("input#name").val();
    email = $("input#email").val();
    subject = $("input#subject").val();
    message = $("textarea#message").val();
    dataString = 'name='+ name + '&email=' + email + '&subject=' + subject + '&message=' + message;
    
    $.ajax({
    type: "POST",
    url: "./send.php",
    data: dataString,
    success: function() {
    
      $('#contactForm').fadeOut(500, function() {
        				 
                $('#message-sent').fadeIn(800);

            });
    }
    });
    
    
    return false;
    
    });

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
    $('#message-sent').hide();
    
// function page
    $('#home-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#home-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(300, function() {
                				 
                idx.fadeIn(600);
                $(".current").removeClass("current");
                idx.addClass("current");
            });
    });
    
    $('#about-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#about-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(300, function() {				 
                abt.fadeIn(600);
                $(".current").removeClass("current");
                abt.addClass("current");
            });
    });
    
    $('#resume-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#resume-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(300, function() {						 
                resume.fadeIn(600);
                $(".current").removeClass("current");
                resume.addClass("current");
            });
    });
    
    $('#skill-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#skill-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(300, function() {						 
                skill.fadeIn(600);
                $(".current").removeClass("current");
                skill.addClass("current");
            });
    });
    
    $('#porto-btn').on('click', function(e) {
    $('.active').removeClass("active");
    $('#porto-btn').addClass("active");
    e.preventDefault();
	$(".current").fadeOut(300, function() {					 
                porto.fadeIn(600);
                $(".current").removeClass("current");
                porto.addClass("current");
            });
    });
    
    $('#contact-btn').on('click', function(e) {
    e.preventDefault();
    $('.active').removeClass("active");
    $('#contact-btn').addClass("active");
	$(".current").fadeOut(300, function() {						 
                contact.fadeIn(600);
                $(".current").removeClass("current");
                contact.addClass("current");
            });
    });
    
    $(function(){
        $('#homepage-slideshow h3:gt(0)').hide();
        setInterval(function(){
          $('#homepage-slideshow :first-child').fadeOut(500)
             .next('h3').fadeIn(100)
             .end().appendTo('#homepage-slideshow');}, 
          4000);
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

