let data = {};
let questionNo = 0;


// API
const easyQuiz = "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple";
const mediumQuiz ="https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple";
const hardQuiz ="https://opentdb.com/api.php?amount=5&category=15&difficulty=hard&type=multiple";

//Difficulty buttons
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
let apiAddress;

// Quiz Area
const question = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer-text");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
let correctAnswer;
const next = document.getElementById("next");
let answerSelected;