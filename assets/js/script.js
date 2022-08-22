//global variables
//score
//list of questions
//answers
//list of asked questions

let questions = [
    {
        question: "Out of these tube lines, which one is has all its stations underground?",
        answers: [
            "Hammersmith and City",
            "Picadilly", 
            "Victoria", 
            "Central",  
        ],
        correctAnswer: 2,
    },
    {
        question: "Which station has the most car parking spaces at 599 spaces?",
        answers: [
            "Epping",
            "Cockfosters",
            "Windledon",
            "Amersham",
        ],
        correctAnswer: 0,
    },
    {
        question: "Which station is the deepest below ground level 55.8 metres?",
        answers: [
            "Angel",
            "Hampstead",
            "Elephant and Castle",
            "Black Horse Road",
        ],
        correctAnswer: 1,
    },
]
let currentQuestionIndex = 0
let score = 0


document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("quiz");

  // when answer is sent it runs this
  form.addEventListener("submit", function (event) {
    // prevents page from refreshing, when submit button is clicked.
    event.preventDefault();
    //selects answer player has selected
    let formData = new FormData(event.target);
    let selectedAnswer = formData.get("answer");
  });
});

/**
 * start button is clicked
 * start button disapears
 * first question is displayed
 */
function startGame() {}

/**
 * Sets game score to zero
 * Sets game to question one
 * displays first question
 */
function resetGame() {
    currentQuestionIndex = 0
    score = 0

}

/**
 * Sends player to the next question
 * inputs are emptied
 */
function nextQuestion() {}
/**
 * happens when submit button is clicked
 * Checks players answer
 * score +1 if question is answered correctly
 * shows correct answer if player's answer is incorrect
 */
function checkAnswer() {}

/**
 * Adds one point to players current score on DOM
 */
function incrementScore() {}

/**
 * as soon as last question is answered
 * ends the game
 * congratulates player for doing well
 * commiserates player if they did not do well
 */
function showResult() {}

/**
 * show question and answers by index
 * get question object by index
 * display questions and answers in HTML 
 */
function showQuestionByIndex(questionIndex) {
    let questionObject = questions[questionIndex]
    document.getElementById('question').innerText = questionObject.question

    questionObject.answers.forEach(function (answer, index) {
        document.getElementById(`answer-text-${index}`).innerText = answer
    })

}
