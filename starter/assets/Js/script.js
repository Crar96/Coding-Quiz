//DomContentLoaded function makes sure that the JavaScript executes only after the document is loaded.

// Variable declerations allows interaction with HTML elements using JavaScript (HTML elements are all assigned an ID in this case)
document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("start");
  const questionTitle = document.getElementById("question-title");
  const startScreen = document.getElementById("start-screen");
  const timeSpan = document.getElementById("time");
  const submitButton = document.getElementById("submit");
  const enterInitials = document.getElementById("initials");
  const questionsBox = document.getElementById("questions");
  const endScreen = document.getElementById("end-screen");
  const finalScore = document.getElementById("final-score");
  const feedbackBox = document.getElementById("feedback");

// variables storing the current state of the quiz including the score and timer.
  let currentQuestion = 0;
  let score = 0;
  let timer;

// Array containing questions and anwsers
const questions = [
  { question: "Which event is specific to the keyboard?", anwsers: ["onkeydown", "onkeypush", "oninputreceived", "onkeybinput"], correct: 0},
  { question: "how do you call a function?", anwsers: ["result myFunction()", "call myFunction()", "result = myFunction()", "result = myFunction()"], correct: 2},
  { question: "What is the correct place to insert JavaScript?", anwsers: ["The head section","The body section","both the head and body sections are correct"], correct: 2},
  { question: "How does a for loop start?", anwsers: ["for (i <= 5; i++)","for i = 1 to 5","for (i = 0; i < = 5), for (i = 0; i < = 5; i++)"], correct: 2},
];

//event listners that initialize the quiz on click of the start button and save the score when the user clicks submit for an anwser.
startButton.addEventListener("click", initializeQuiz);
submitButton.addEventListener("click", saveScore); 

// function that hides the start screen and displays the first question when the startButton is clicked

function initializeQuiz() {
  startScreen.style.display = "none";
  questionsBox.style.display = "block";
  displayQuestion(currentQuestion);
  startTimer();
}

// function that displays the questions and anwser choices will generating a button for each anwser choice. The text content is set to the current question and the onclick attribute calls the checkAnswer() function when an anwser is clicked.

function displayQuestion(i) {
  const currentQuestion = questions[i];
  questionTitle.textContent = currentQuestion.question;
  choicesBox.innerHTML = currentQuestion.anwsers.map((anwser, i) =>
  '<button onclick="checkAnswer(${i})">${anwser}</button>').join("");
}

