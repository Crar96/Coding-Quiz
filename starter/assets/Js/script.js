//DomContentLoaded function makes sure that the JavaScript executes only after the document is loaded.

// Variable declerations allows interaction with HTML elements using JavaScript (HTML elements are all assigned an ID in this case)
document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("start");
  const questionTitle = document.getElementById("question-title");
  const startScreen = document.getElementById("start-screen");
  const timeSpan = document.getElementById("time");
  const choicesBox = document.getElementById("choices");
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
  { question: "how do you call a function?", anwsers: ["result myFunction()", "call myFunction()", "result.myFunction()", "result = myFunction()"], correct: 3},
  { question: "What is the correct place to insert JavaScript?", anwsers: ["The head section","The body section","both the head and body sections are correct"], correct: 2},
  { question: "How does a for loop start?", anwsers: ["for (i <= 5; i++)","for i = 1 to 5","for (i = 0; i < = 5), for (i = 0; i < = 5; i++)"], correct: 2},
];

  // function to check if the anwser to the question is correct and updates the score by 1 if it is correct. If the anwser is not correct it subtracts 5 seconds from the time. If there are no more questions remaining then the quiz is ended.

function checkAnswer(selectedIndex) {
  const currentQ = questions[currentQuestion];
  if (selectedIndex === currentQ.correct) {
    score++;
  } else {
    timer -= 5;
  }

  currentQuestion++; 

  if (currentQuestion < questions.length) {
    displayQuestion(currentQuestion);
  } else {
    endQuiz();
  }
}

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
  const currentQ = questions[i];
  questionTitle.textContent = currentQ.question;

  choicesBox.innerHTML = "";
  
  currentQ.anwsers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", function() {
      checkAnswer(index);
    });
    choicesBox.appendChild(button);
  });
}

// sets the timer duration and sets the countdown interval to 1 second. If timer reaches 0 then the quiz ends.

function startTimer() {
  timer = 60;
  updateTimer();
  setInterval(function () {
    timer--;
    updateTimer();

  if (timer <= 0) {
    endQuiz();
    }
  }, 1000);
}

// function to update and remove the questions when the timer gets to 0 and display the final score for the test.

function updateTimer () {
  timeSpan.textContent = timer;
}

function endQuiz() {
  questionsBox.style.display = "none";
  endScreen.style.display = "block";
  finalScore.textContent = score;
}


// function to save score to the console log and add it to local stora

function saveScore () {
  const initials = enterInitials.value;
  alert(`Score saved for ${initials}: ${score}`);
}
});
