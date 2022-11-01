//Create an array of objects for your questions

var questions = [
  {
    title: "Where do wild turkeys sleep?",
    choices: ["Underground", "In cages", "In trees"],
    answer: "In trees",
  },
  {
    title: "Which Founding Father preferred turkeys to bald eagles?",
    choices: ["Benjamin Franklin", "John Adams", "Thomas Jefferson"],
    answer: "Benjamin Franklin",
  },
  {
    title: "How fast can wild turkeys fly?",
    choices: ["15mph", "30mph", "55mph"],
    answer: "55mph",
  },
];

//Score counter should never be less than 0
var finalScore = 0;

//Make an element and a variable for the timer
var countdown = document.querySelector("#countdown");

function quizBegins() {}
