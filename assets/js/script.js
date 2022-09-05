const form = document.getElementById("quiz");
const question = document.getElementById("question");
const gameArea = document.getElementById("game-area");
const scoreElement = document.getElementById("score");
const startArea = document.getElementById("start-area");
const resultArea = document.getElementById("result-area");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const submitButton = document.getElementById("submit-button");
const resultTextElement = document.getElementById("result-text");
const currentQuestionNumber = document.getElementById("question-number");

let questions = [
//   {
//     question:
//       "Out of these tube lines, which one is has all its stations underground?",
//     answers: ["Hammersmith and City", "Picadilly", "Victoria", "Central"],
//     correctAnswer: 2,
//   },
//   {
//     question: "Which station has the most car parking spaces at 599 spaces?",
//     answers: ["Epping", "Cockfosters", "Windledon", "Amersham"],
//     correctAnswer: 0,
//   },
//   {
//     question: "Which station is the deepest below ground level 55.8 metres?",
//     answers: ["Angel", "Hampstead", "Elephant and Castle", "Black Horse Road"],
//     correctAnswer: 1,
//   },
//   {
//     question: "How many tube stations are there?",
//     answers: ["270", "271", "272", "273"],
//     correctAnswer: 2,
//   },
//   {
//     question: "Which one of the following was never a station?",
//     answers: ["British Museum", "Lords", "Tower of London", "London Eye"],
//     correctAnswer: 3,
//   },
//   {
//     question: "Which is the least used station on the underground?",
//     answers: ["Mill Hill East", "Roding Valley", "Harlsden", "Alperton"],
//     correctAnswer: 1,
//   },
//   {
//     question:
//       "What train stock runs on the Waterloo and City and Central Lines?",
//     answers: ["1995 stock", "1996 stock", "1992 stock", "2009 stock"],
//     correctAnswer: 2,
//   },
//   {
//     question: "Which year was the Oyster card introduced?",
//     answers: ["2003", "2004", "2004", "2006"],
//     correctAnswer: 0,
//   },
//   {
//     question:
//       "Which underground station would you travel to, to get to the London Stadium?",
//     answers: ["East Ham", "Upton Park", "St James' Park", "Stratford"],
//     correctAnswer: 3,
//   },
//   {
//     question:
//       "Which station is the only station to be named after a football club?",
//     answers: ["Watford", "West Ham", "Arsenal", "Tottenham Court Road"],
//     correctAnswer: 2,
//   },
//   {
//     question:
//       "Which stations are the shortest distance between any station at 260m?",
//     answers: [
//       "Theydon Bois and Debden",
//       "Leicester Square and Covent Garden",
//       "Warick Avenue and Maida Vale",
//       "Kilburn and West Hampstead",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     question:
//       "On the Victoria line, which is the only station that does not have an interchange?",
//     answers: ["Seven Sisters", "Warren Street", "Vauxhall", "Pimlico"],
//     correctAnswer: 3,
//   },
//   {
//     question:
//       "Which station is the least used on the circle and Hammersmith and City lines?",
//     answers: ["Westbourne Park", "Royal Oak", "Goldhawk Road", "Wood Lane"],
//     correctAnswer: 2,
//   },
  {
    question:
      "What is the average train speed, including stopping at stations?",
    answers: ["20 mph", "25 mph", "30 mph", "35 mph"],
    correctAnswer: 0,
  },
  {
    question:
      "Which station is the busiest with on average 100.3 million passengers per year?",
    answers: ["Kings Cross St Pancreas", "Waterloo", "Marylebone", "Bank"],
    correctAnswer: 1,
  },
];
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let selectedAnswer = formData.get("answer");

    if (!selectedAnswer) {
      alert("Please select an answer");
      return;
    }

    checkAnswer(selectedAnswer);
    if (currentQuestionIndex >= questions.length - 1) {
      showResult();
      return;
    }
  });
  resetButton.addEventListener("click", function () {
    resetGame();
  });
  startButton.addEventListener("click", function () {
    startGame();
  });
});

/**
 * start game
 */
function startGame() {
  startArea.classList.remove("active");
  gameArea.classList.remove("hidden");

  resetGame();
}

/**
 * Sets game score to zero
 */
function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestionByIndex(0);
  scoreElement.innerText = score;

  resultArea.classList.remove("active");
  gameArea.classList.remove("hidden");

  submitButton.classList.remove("hidden")
}

/**
 * Sends player to the next question
 */
function nextQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex !== questions.length)
  showQuestionByIndex(currentQuestionIndex);

  form.reset();
}
/**
 * check players answer 
 * @param selectedAnswer: The answer that the user selected to be checked if correct
 */
function checkAnswer(selectedAnswer) {
  let questionObject = questions[currentQuestionIndex];

  if (parseInt(selectedAnswer) === questionObject.correctAnswer + 1) {
    score += 1;

    scoreElement.innerText = score;

    Swal.fire({
      title: "Correct!",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
      heightAuto: false,
    }).then(() => {
      nextQuestion();
    });
  } else {
    Swal.fire({
      title: "Incorrect!",
      icon: "error",
      showConfirmButton: false,
      timer: 2000,
      heightAuto: false,
    }).then(() => {
      nextQuestion();
    });
  }
}

/**
 * ends game and shows players score
 */
function showResult() {
  let resultText;
  if (score < 6) {
    resultText = "Oh Dear! Try again, you can do it!";
  } else if (score < 12) {
    resultText = "Good Effort! Can you beat your score?";
  } else {
    resultText = "EXCELLENT! you're an underground whiz!";
  }

  resultTextElement.innerText = resultText;
  resultArea.classList.add("active");
  gameArea.classList.add("hidden");

  submitButton.classList.add("hidden")
}

/**
 * show question and answers by index
 * 
 * @param questionIndex: index of the question array to be shown
 */
function showQuestionByIndex(questionIndex) {
  let questionObject = questions[questionIndex];
  question.innerText = questionObject.question;

  currentQuestionNumber.innerText = questionIndex + 1;

  questionObject.answers.forEach(function (answer, index) {
    document.getElementById(`answer-text-${index}`).innerText = answer;
  });
}
