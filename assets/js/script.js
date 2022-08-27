const startButton = document.getElementById('start-button')
const gameArea = document.getElementById('game-area')
const startArea = document.getElementById('start-area')

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
    const resetButton = document.getElementById('reset-button')

  // when answer is sent it runs this
  form.addEventListener("submit", function (event) {
    // prevents page from refreshing, when submit button is clicked.
    event.preventDefault();
    //selects answer player has selected
    let formData = new FormData(event.target);
    let selectedAnswer = formData.get("answer");

    if (!selectedAnswer) {
        alert('Please select an answer')
        return
    }

    checkAnswer(selectedAnswer)
    if (currentQuestionIndex >= questions.length - 1) {
        showResult()
        return
    } 
    
  });
  resetButton.addEventListener('click', function () {
      resetGame()
  })
  startButton.addEventListener('click', function () {
      startGame()
  })
})

/**
 * start button is clicked
 * start button disapears
 * first question is displayed
 */
function startGame() {
    startArea.classList.remove('active')
    gameArea.classList.remove('hidden')


    resetGame()
}

/**
 * Sets game score to zero
 * Sets game to question one
 * displays first question
 */
function resetGame() {
    currentQuestionIndex = 0
    score = 0
    showQuestionByIndex(0)   
    document.getElementById('score').innerText = score 

    document.getElementById('result-area').classList.remove('active')
    document.getElementById('game-area').classList.remove('hidden')
}

/**
 * Sends player to the next question
 * inputs are emptied
 */
function nextQuestion() {
    currentQuestionIndex +=1
    showQuestionByIndex(currentQuestionIndex)
}
/**
 * happens when submit button is clicked
 * Checks players answer
 * score +1 if question is answered correctly
 * shows correct answer if player's answer is incorrect
 */
function checkAnswer(selectedAnswer) {
    let questionObject = questions[currentQuestionIndex]


    if (parseInt(selectedAnswer) === (questionObject.correctAnswer +1 )) {
        score += 1

        document.getElementById('score').innerText = score

        Swal.fire({
            title: 'Correct!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            }).then(() => {
            nextQuestion();
            });
    } else {
         Swal.fire({
            title: 'Incorrect!',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000,
        }).then(() => {
            nextQuestion();
        });
    }

}

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
function showResult() {
    let resultText
    if (score < 6) {
        resultText = "Oh Dear! Try again, you can do it!"
    } else if (score < 12) {
        resultText = "Good Effort! Can you beat your score?"
    } else {
        resultText = "EXCELLENT! you're an underground whiz!"
    }

    document.getElementById('result-text').innerText = resultText
    document.getElementById('result-area').classList.add('active')
    document.getElementById('game-area').classList.add('hidden')

}

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
