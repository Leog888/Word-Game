// Variables here 
var scoreText = document.getElementById("scoreText");
var submit = document.getElementById("save");
var user = document.getElementById("username");
var recentScore = localStorage.getItem("recentScore");
var highscore = JSON.parse(localStorage.getItem("highscore"));
if (localStorage.getItem("highscore") == null) {
    highscore = []
}
// ScoreText here 
scoreText.innerText = "Your Score: " + recentScore

// function to save score 
function saveScore(){
    var score = {
        name: user.value,
        score: recentScore,
    }
    console.log(saveScore) // console.log --saveScore

    highscore.push(score);

    highscore.sort(function compare (a, b){
        return b.score - a.score
    })

    highscore.splice(5)
    localStorage.setItem("highscore", JSON.stringify(highscore))
}