import { renderFeedback } from './feedback';

const getRandNum = () => {
  // Bug #2
  // Math.floor((Math.random() * 10 ) + 1);

  // need to explicitly return
  let num = Math.floor((Math.random() * 10) + 1);
  return num;
}

const getRandSymbol = () => {
  const randNum = Math.random();
  if (randNum < 0.33) {
    return "+";
  } else if (randNum >= 0.33 && randNum < 0.66) {
    return "-";
  } else {
    return "*";
  }
};

const mathProblem = {
  firstNum: getRandNum(),
  secondNum: getRandNum(),
  operationSymbol: getRandSymbol(),
  // Bug #3
  // answer: () => {
  //   eval(`${this.firstNum} ${this.operationSymbol} ${this.secondNum}`);
  // },

  // this was undefined, and we need to explicitly return eval below
  answer() {
    return eval(`${this.firstNum} ${this.operationSymbol} ${this.secondNum}`);
  }
};

// Use the mathProblem obj to display the problem for the user
const firstDisplayNum = document.getElementById('first-num');
// debugger
firstDisplayNum.innerHTML = mathProblem.firstNum;
const displaySymbol = document.getElementById('operation');
displaySymbol.innerHTML = mathProblem.operationSymbol;
const secondDisplayNum = document.getElementById('second-num');
secondDisplayNum.innerHTML = mathProblem.secondNum;

const evaluateAnswer = (event) => {
  event.preventDefault();
  // debugger

  const userAnswer = event.currentTarget.children[5].value;
  // Bug #4
  // renderFeedback(userAnswer === mathProblem.answer());

  // example of Error
  // current Error
  // userAnswer = "9"
  // mathProblem.answer() = 9
  // therefore "9" === 9 // => false
  // BUT "9" == 9 // => true
  // triple ===, no type conversion is done, so types must be equal too
  // double ==, will compare for equality after necessary type conversions are done
  // both are equally quick

  // before Bonus #1
  // renderFeedback(answerIsCorrect);

  // Bonus #1 implementation included below
  const correctAnswer = mathProblem.answer();
  const answerIsCorrect = userAnswer == correctAnswer;
  renderFeedback(answerIsCorrect, correctAnswer);

}

export { mathProblem, evaluateAnswer };
