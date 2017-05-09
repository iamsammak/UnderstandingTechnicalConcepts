const storeNumberFact = (event) => {
  const response = event.currentTarget;
  if (response.status === 200) {
    const numberFact = document.getElementById('number-fact');
    // debugger
    numberFact.innerHTML = response.responseText;
  } else {
    console.log('Error getting the number fact');
  }
}

// Bonus #1 added
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
const getNumberFact = (correctAnswer) => {
  const req = new XMLHttpRequest();
  // req.open('GET', 'http://numbersapi.com/random/trivia', true);
  req.open('GET', `http://numbersapi.com/${correctAnswer}`, true);
  req.onreadystatechange = storeNumberFact;
  req.send();
};

// before bonus #1:
// const renderFeedback = (answerIsCorrect) => {
// added another parameter for bonus #1
const renderFeedback = (answerIsCorrect, correctAnswer) => {
  const correctFeedback = document.getElementById('correct-answer');
  const wrongFeedback = document.getElementById('wrong-answer');
  if (answerIsCorrect) {
    correctFeedback.style.display = "block";
    wrongFeedback.style.display = "none";
    // run getNumberFact if answer is correct
    getNumberFact(correctAnswer);
  } else {
    correctFeedback.style.display = "none";
    wrongFeedback.style.display = "block";
    setTimeout(() => {
      wrongFeedback.style.display = "none";
    }, 2000);
  }
};

export { renderFeedback, getNumberFact };
