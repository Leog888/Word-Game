var qestionText = document.getElementById('question');
var scoreText = document.getElementById('score');
var choiceText1 = document.getElementById('choice1'); //repeat to have 4 options to answer 
var choiceText2 = document.getElementById('choice2');
var choiceText3 = document.getElementById('choice3');
var choiceText4 = document.getElementById('choice4');
var choiceEvent1 = document.getElementById("choice-container1"); // have a container for each answer of choices 
var choiceEvent2 = document.getElementById("choice-container2");
var choiceEvent3 = document.getElementById("choice-container3");
var choiceEvent4 = document.getElementById("choice-container4");

// create quiz questions here: 
var questionArray = [
	{
		qestion:"What does HTML stand for?",

		choice1: "Hyperlinks and Text Make-up Language",

		choice2: "HyperText Markup Language",
		
		choice3: "HyperTension Machine Learning",

		choice4: "How To Make Lunch",

		answer: "HyperText Markup Language",
	},

	{
		question: "What does CSS stand for?",

		choice1: "Cascading Sheet Style",

		choice2: "College Social Service",

		choice3: "Creative Styling Sheets",

		choice4: "Cascading Style Sheets",

		answer: "Cascading Style Sheets",
	},
	{
		question: "Which of these is not a flex-container property?",
        
		choice1: "align-items",
        
		choice2: "align-content",
        
		choice3: "text-align",
        
		choice4: "flex-wrap",
        
		answer: "text-align",
	},
	{
		question: "Which method combines two strings and returns a new string?",
        
		choice1: "append()",
        
		choice2: "attach()",
        
		choice3: "join()",
        
		choice4: "concat()",
        
		answer: "concat()",
	},
	{
		question: "From inside to outside, the correct order is:",
        
		choice1: "content, margin, border, padding",
        
		choice2: "margin, padding, border, content",
        
		choice3: "content, padding, border, margin",
        
		choice4: "content, padding, margin, border",
        
		answer: "content, padding, border, margin",
	},
	{
		question: "Which of these is not a flex-container property?",
        
		choice1: "align-items",
        
		choice2: "align-content",
        
		choice3: "text-align",
        
		choice4: "flex-wrap",
        
		answer: "text-align",
	},
	{
		question: "Which of these is not a falsy value",
		
		choice1: "0",
        
		choice2: "-0",
        
		choice3: "null",
        
		choice4: "none",
        
		answer: "none",
	},
	{
		question: "Which of these is not a truthy value",
        
		choice1: "1",
        
		choice2: "false",
        
		choice3: "none",
        
		choice4: "NaN",
        
		answer: "NaN",
	},
	{
		question: "Math.random() will generate a random __ within __",

        choice1: "integer, 1-10",
        
		choice2: "decimal, 0-1",
        
		choice3: "fraction, 0-1",
        
		choice4: "bug, your code",
        
		answer: "decimal, 0-1",
	}
]
// function to start game
function startGame () {
	// Sets pool to choose from -- 
	var questionPool = questionArray

	// Setting inital score 
	var score = 0 
	scoreText.innerText = "Score: " + score

	// Set timer 
	var indexQ = 0
	var remainTime = 60 

	function timer () {
		setInterval(function () {
			if(remainTime > 0){
				remainTime.innerText = "Time Left: " + remainTime + ".s"
			}
			else {
				checkFinish ()
			} 
		}, 1000)
	}

}