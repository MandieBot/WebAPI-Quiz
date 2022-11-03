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

var timeLeft = 30;

//Make an element and a variable for the timer
var countdownEl = document.getElementById("countdown");

//Create functionality of the start button
var startBtn = document.getElementById("start");

var indexTracker = 0;

// var button1 = document.getElementById("answer-buttons");
// var button2 = document.getElementById("answer-buttons");
// var button3 = document.getElementById("answer-buttons");

startBtn.addEventListener("click", function () {
  var headerEl = document.getElementById("header");
  headerEl.style.display = "none";
  loadQuestion();
});
function countdown() {
  var timeInterval = setInterval(function () {
    countdownEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      // TO DO: THIS IS WHERE THE QUIZEND FUNCTION WILL GO
    }
  }, 1000);
}
//Run the first question
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
  countdown();
}
function answerClick(event) {
  var val = event.target.textContent;
  if (val === questions[indexTracker].answer) {
    alert("Correct!");
    indexTracker++;
    secondQ();
    // console.log(val);
    console.log(indexTracker);
  } else {
    timeLeft -= 5;
    alert("Incorrect! Try Again!");
    console.log("Wrong Answer");
  }
}
//Run the second question
function secondQ() {
  var questionsDiv = document.querySelector("#question-choices");
  questionsDiv.textContent = "";

  var secondQ = document.getElementById("questions");

  var secondQTitle = document.getElementById("question-title");
  secondQTitle.textContent = questions[indexTracker].title;

  var secondQChoices = document.getElementById("question-choices");

  var choiceA = document.createElement("button");
  choiceA.addEventListener("click", answerClick);
  choiceA.textContent = questions[indexTracker].choices[0];
  secondQChoices.appendChild(choiceA);

  var choiceB = document.createElement("button");
  choiceB.addEventListener("click", answerClick);
  choiceB.textContent = questions[indexTracker].choices[1];
  secondQChoices.appendChild(choiceB);

  var choiceC = document.createElement("button");
  choiceC.addEventListener("click", answerClick);
  choiceC.textContent = questions[indexTracker].choices[2];
  secondQChoices.appendChild(choiceC);
}

//Run the third question
function thirdQ() {
  var thirdQ = document.getElementById("questions");
  var thirdQtitle = document.getElementById("question-title");
  thirdQtitle.textContent = questions[indexTracker].title;
  var thirdQChoices = document.getElementById("question - choices");
  var choiceI = document.createElement("button");
  choiceI.textContent = questions[indexTracker].choices[0];
  thirdQChoices.appendChild(choiceI);
  var choiceII = document.createElement("button");
  choiceII.textContent = questions[indexTracker].choices[1];
  thirdQChoices.appendChild(choiceII);
  var choiceIII = document.createElement("button");
  choiceIII.textContent = questions[indexTracker].choices[2];
  thirdQChoices.appendChild(choiceIII);
}
