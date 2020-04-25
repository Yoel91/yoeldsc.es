

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("portfolioFilters");
console.log (btnContainer);
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("fil-cat");
    for (i = 0; i < current.length; i++) {
        if(current[i].classList.contains('selected')){
            current[i].classList.toggle('selected');  
        }
    }

    this.className += " selected";
    selectedClass = $(this).attr("data-rel");
    var portfolioList=document.getElementsByClassName("tile");
    for (var i = 0; i < portfolioList.length; i++){
         if(portfolioList[i].classList.contains(selectedClass)){
            setTimeout(function(item){
                item.classList.remove('animated','zoomOut');
                item.style.display = "block"; 
                item.classList.add('animated','zoomIn');
            }, 350, portfolioList[i]); 
            

        }else{

            portfolioList[i].classList.remove('animated','zoomIn');
            portfolioList[i].classList.add('animated','zoomOut');
            setTimeout(function(item){
                item.style.display = "none";
            }, 250, portfolioList[i]); 

        }
    }
      
  });
}

var owl = $("#owl-ctsol");
   owl.owlCarousel({
   items : 1,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   autoPlay : 2000,
   loop: true,
   dots:true, 
   stopOnHover : true
});
    
var owl = $("#owl-tlp");
   owl.owlCarousel({
   items : 1,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   autoPlay : 2000,
   loop: true,
   dots:true, 
   stopOnHover : true
});
    
var owl = $("#owl-celimar");
   owl.owlCarousel({
   items : 1,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   autoPlay : 2000,
   loop: true,
   dots:true, 
   stopOnHover : true
});
    
var owl = $("#owl-ptfa");
    owl.owlCarousel({
   items : 1,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   autoPlay : 2000,
   loop: true,
   dots:true, 
   stopOnHover : true
});
var owl = $("#owl-lemon");
   owl.owlCarousel({
   items : 1,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   autoPlay : 2000,
   loop: true,
   dots:true, 
   stopOnHover : true
});
var owl = $("#owl-tfg");
    owl.owlCarousel({
   items : 1,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   autoPlay : 2000,
   loop: true,
   dots:true, 
   stopOnHover : true
});
    
var owl = $("#owl-cpcd");
   owl.owlCarousel({
   items : 1,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   autoPlay : 2000,
   loop: true,
   dots:true, 
   stopOnHover : true
});


