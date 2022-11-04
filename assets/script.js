//Create an array of objects for your questions

var questions = [
  {
    title: "Where do wild turkeys sleep?",
    choices: ["Underground", "On grass", "In trees"],
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

//Record the seconds remaining in countdown
var timeLeft = 30;

//Make an element and a variable for the timer
var countdownEl = document.getElementById("countdown");

//Create functionality of the answer buttons
var answerBtns = document.getElementById("question-choices");

//Create functionality of the start button
var startBtn = document.getElementById("start");

//Create functionality of the View Scores button
var scoreBtn = document.getElementById("view-scores");

//Store the initials input from the form
var initialsForm = document.getElementById("textBox");

//Roll through each index of the questions array
var indexTracker = 0;

//Allow the quiz to begin upon clicking start button
startBtn.addEventListener("click", function () {
  var headerEl = document.getElementById("header");
  headerEl.style.display = "none";
  scoreBtn.style.display = "none";
  initialsForm.style.display = "none";
  loadQuestion();
  countdown();
});

//Set the timer and clear it at quiz end
function countdown() {
  var timeInterval = setInterval(function () {
    countdownEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      quizEnd();
    }
  }, 1000);
}

//Run the quiz
function loadQuestion() {
  var questionsDiv = document.querySelector("#question-choices");
  questionsDiv.textContent = "";

  var firstQ = document.getElementById("questions");

  var firstQTitle = document.getElementById("question-title");
  firstQTitle.textContent = questions[indexTracker].title;

  var firstQChoices = document.getElementById("question-choices");

  var choice1 = document.createElement("button");
  choice1.addEventListener("click", answerClick);
  choice1.textContent = questions[indexTracker].choices[0];
  firstQChoices.appendChild(choice1);

  var choice2 = document.createElement("button");
  choice2.addEventListener("click", answerClick);
  choice2.textContent = questions[indexTracker].choices[1];
  firstQChoices.appendChild(choice2);

  var choice3 = document.createElement("button");
  choice3.addEventListener("click", answerClick);
  choice3.textContent = questions[indexTracker].choices[2];
  firstQChoices.appendChild(choice3);
}
//Logs correct/incorrect answer before moving onto next question
function answerClick(event) {
  var val = event.target.textContent;
  if (val === questions[indexTracker].answer) {
    alert("Correct!");
    indexTracker++;
    if (indexTracker == questions.length) {
      quizEnd();
    } else {
      loadQuestion();
    }
  } else {
    timeLeft -= 5;
    alert("Incorrect! Try Again!");
  }
}

//End the quiz - record score and initials in local storage
function quizEnd() {
  answerBtns.style.display = "none";
  alert("Game Over - Your Score is: " + timeLeft);
  finalScore = timeLeft;
  console.log("Your Score is " + finalScore);
  var score = timeLeft;
  var userInitials = document.getElementById("initials");
  localStorage.setItem("score", timeLeft);
  localStorage.setItem("userInitials", initials);
  localStorage.getItem("score");
  localStorage.getItem("userInitials");
}
