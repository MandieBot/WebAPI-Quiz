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

//Make an element and a variable for the timer
var countdown = document.querySelector("#countdown");

//Create functionality of the start button
var startBtn = document.getElementById("start");

var indexTracker = 0;

startBtn.addEventListener("click", function () {
  var headerEl = document.getElementById("header");
  headerEl.style.display = "none";
  firstQ();
});

//Run the first question
function firstQ() {
  var firstQ = document.getElementById("questions");
  var firstQTitle = document.getElementById("question-title");
  firstQTitle.textContent = questions[indexTracker].title;
  var firstQChoices = document.getElementById("question-choices");

  //   firstQChoices.textContent = questions[0].choices;
  var choice1 = document.createElement("button");
  choice1.addEventListener("click", answerClick);
  choice1.textContent = questions[indexTracker].choices[0];
  firstQChoices.appendChild(choice1);
  //   console.log(questions[0]);
  var choice2 = document.createElement("button");
  choice2.addEventListener("click", answerClick);
  choice2.textContent = questions[indexTracker].choices[1];
  firstQChoices.appendChild(choice2);
  var choice3 = document.createElement("button");
  choice3.addEventListener("click", answerClick);
  choice3.textContent = questions[indexTracker].choices[2];
  firstQChoices.appendChild(choice3);
}
function answerClick(event) {
  var val = event.target.textContent;
  if (val === questions[indexTracker].answer) {
    console.log(val);
    
  }
}
//Run the second question
function secondQ() {
  var secondQ = document.getElementById("questions");
  var secondQTitle = document.getElementById("question-title");
  secondQTitle.textContent = questions[indexTracker].title;
  var secondQChoices = document.getElementById("question-choices");
  var choiceA = document.createElement("button");
  choiceA.textContent = questions[indexTracker].choices[0];
  secondQChoices.appendChild(choiceA);
  var choiceB = document.createElement("button");
  choiceB.textContent = questions[indexTracker].choices[1];
  secondQChoices.appendChild(choiceB);
  var choiceC = document.createElement("button");
  choiceC.textContent = questions[indexTracker].choices[2];
  secondQChoices.appendChild(choiceC);
}

//Run the third question
function thirdQ() {
  var thirdQ = document.getElementById("questions");
  var thirdQtitle = document.getElementById("question-title");
  thirdQtitle.textContent = questions[2].title;
  var thirdQChoices = document.getElementById("question - choices");
  var choiceI = document.createElement("button");
  choiceI.textContent = questions[2].choices[0];
  thirdQChoices.appendChild(choiceI);
  var choiceII = document.createElement("button");
  choiceII.textContent = questions[2].choices[1];
  thirdQChoices.appendChild(choiceII);
  var choiceIII = document.createElement("button");
  choiceIII.textContent = questions[2].choices[2];
  thirdQChoices.appendChild(choiceIII);
}
