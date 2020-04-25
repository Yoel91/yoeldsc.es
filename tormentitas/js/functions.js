var players=[];
$(document).ready(function(){  
        $.getJSON("res/players.json", function(result){
            $.each(result, function(index, player){
                players=result.players;
            });
        });   
});



function updatePlayerForm()
{
    var nPlayers = document.querySelector('input[name = "nplayerRadio"]:checked').value;
    
    var myNode = document.getElementById("playerNamesForm");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    
    for (i = 0; i < nPlayers; i++) {
        console.log("Numero de jugadores es:" + nPlayers);
        var selectPlayer = document.createElement("SELECT");
        selectPlayer.setAttribute("class", "playerName zoomIn animated");
        selectPlayer.setAttribute("name", "Player "+i)
        myNode.appendChild(selectPlayer);
        
        for (j = 0; j < players.length; j++) {
            console.log("Entrada Nº" + j );
            var optionPlayer= document.createElement("option");
            optionPlayer.setAttribute("value", players[j]);
            var optionText=document.createTextNode(players[j]);
            optionPlayer.appendChild(optionText);
            selectPlayer.appendChild(optionPlayer);
        }
       
        
        
        
    } 
    
    var linebreak = document.createElement('br');
    myNode.appendChild(linebreak);
    
     var submitButton = document.createElement("INPUT");
     submitButton.setAttribute("type", "button");
     submitButton.setAttribute("value", "Mezclar equipos");
     submitButton.setAttribute ("class", "btn btn-mix btn-lg btn-enviar zoomIn animated");
     submitButton.setAttribute( "onClick", "javascript: mixTeams();" );
     myNode.appendChild(submitButton);
}

function mixTeams()
{
    $('#mixer-form').addClass("zoomOut animated");
    $('#mixer-form').addClass("mixer-hidden");
    $('#mixer-result').removeClass("mixer-hidden");
    $('#mixer-result').addClass("zoomIn animated");
    
    var nPlayers = document.querySelector('input[name = "nplayerRadio"]:checked').value;
    var allPlayersNames = new Array();
    
    for (playerNameInput = 0; playerNameInput < nPlayers; playerNameInput++){
         allPlayersNames.push( document.getElementsByClassName("playerName")[playerNameInput].value.concat("<br>"));
    }
    
    allPlayersNames= shuffle(allPlayersNames);
    
    document.getElementById("team1").innerHTML = allPlayersNames.slice(0,nPlayers/2).join("");
    document.getElementById("team2").innerHTML = allPlayersNames.slice(nPlayers/2,nPlayers+1).join("");
}

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
    return array
}

