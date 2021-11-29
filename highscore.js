// variables here
var scorelist = document.getElementById("scorelist");
var highscores = JSON.parse(localStorage.getItem("highscore"));

if (highscores != null){
    for (i = 0; i<highscores.length; i++){
        var listItem = document.createElement("li")
        listItem.innerText = highscores[i].name + ":" + highscores[i].score
        scorelist.appendChild(listItem);
    };
}

// Clear highscoren function
function clearscore() {
    var listItemRemove = document.getElementById("li")
    console.log(listItemRemove);

    for (i = 0; i<listItemRemove.length; i++){
        scorelist.removeChild(listItemRemove[0]);

    };
    localStorage.clear();
}