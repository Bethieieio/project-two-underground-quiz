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
 * Sets game score to zero
 * Sets game to question one
 */
function resetGame() {}

/**
 * Sends player to the next question
 */
function nextQuestion() {}
/**
 * Checks players answer
 * marks answer
 * shows correct answer if player's answer is incorrect
 */
function checkAnswer() {}

/**
 * Adds one point to players current score on DOM
 */
function incrementScore() {}

/**
 * ends the game
 * congratulates player for doing well
 * commiserates player if they did not do well
 */
function showResult() {}
