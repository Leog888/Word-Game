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

		choice1: "",

		choice2: "",

		choice3: "",

		choice4: "",

		answer: "",
	},
]