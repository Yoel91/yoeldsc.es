 function setbackground()
{

    var index = Math.round(Math.random() * 4);

    var ColorValue = "FFFFFF"; // default color - white (index = 0)

    if(index == 1)
        ColorValue = "f5e8bb"; 
    if(index == 2)
        ColorValue = "90aa9d"; 
    if(index == 3)
        ColorValue = "c67967"; 
    if(index == 4)
        ColorValue = "a7cc65"; 
 
   document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}