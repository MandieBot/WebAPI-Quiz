//Create an array of objects for your questions

var questions = [
  {
    title: "What is the correct syntax when writing a function?",
    choices: ["function : sampleFunction()", "function sampleFunction()", "Func = sampleFunction()"],
    answer: "function sampleFunction()",
  },
  {
    title: "How does a For Loop start?",
    choices: ["for(i = 0; i <= 3; i++)", "for i++; i = 0", "for 1-5 = i"],
    answer: "for(i = 0; i <= 3; i++)",
  },
  {
    title: "Which one of the following is an array?",
    choices: ["var spices = 1:pepper, 2:basil, 3:turmeric", "var spices = { pepper, basil, turmeric }", "var spices = [pepper, basil, turmeric]"],
    answer: "var spices = [pepper, basil, turmeric]",
  },
];

//Declare global variables
var questionsDiv = document.getElementById("questionsDiv");

var submitButton = document.getElementById("submitButton");

var savedScores = JSON.parse(localStorage.getItem("score")) || [];
console.log("pageLoad savedScores", savedScores);

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
  // initialsForm.style.display = "none";
  loadQuestion();
  countdown();
});

//Declare global variable so it can be accessed in other functions
var timeInterval;

//Set the timer and clear it at quiz end
function countdown() {
  timeInterval = setInterval(function () {
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
  startBtn.classList.add("hide");

  var questionsDiv = document.querySelector("#question-choices");
  questionsDiv.textContent = "";

  var firstQ = document.getElementById("questions");

  var firstQTitle = document.getElementById("question-title");
  firstQTitle.textContent = questions[indexTracker].title;

  var firstQChoices = document.getElementById("question-choices");

  var choice1 = document.createElement("button");
  choice1.setAttribute("class", "btn");
  choice1.addEventListener("click", answerClick);
  choice1.textContent = questions[indexTracker].choices[0];
  firstQChoices.appendChild(choice1);

  var choice2 = document.createElement("button");
  choice2.setAttribute("class", "btn");
  choice2.addEventListener("click", answerClick);
  choice2.textContent = questions[indexTracker].choices[1];
  firstQChoices.appendChild(choice2);

  var choice3 = document.createElement("button");
  choice3.setAttribute("class", "btn");
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
    if (indexTracker === questions.length) {
      quizEnd();
    } else {
      loadQuestion();
    }
  } else {
    timeLeft -= 5;
    alert("Incorrect! Try Again!");
  }
}

//End the quiz
function quizEnd() {
  clearInterval(timeInterval);
  answerBtns.style.display = "none";
  questionsDiv.setAttribute("class", "hide");
  var scoreDiv = document.getElementById("scoreDiv");
  scoreDiv.removeAttribute("class");
  alert("Game Over - Your Score is: " + timeLeft);
  finalScore = timeLeft;
  console.log("Your Score is " + finalScore);
}

//Save initials and scores into local storage
function saveScore() {
  var score = timeLeft;
  var userInitials = document.getElementById("initials").value;
  var userScore = {
    score,
    userInitials,
  };

  savedScores.push(userScore);

  localStorage.setItem("scores", JSON.stringify(savedScores));
  console.log("quizEnd savedScores", savedScores);
}

//Display high scores
function displayScores() {
  var scoresArray = JSON.parse(localStorage.getItem("scores"));
  var scoreList = document.getElementById("scoreList");
  scoresArray.forEach((element) => {
    var scoreItem = document.createElement("li");
    scoreItem.textContent = element.userInitials + " - " + element.score;
    scoreList.append(scoreItem);
  });
}
submitButton.onclick = saveScore;
displayScores();
