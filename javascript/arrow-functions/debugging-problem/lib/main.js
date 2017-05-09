import { getNumberFact } from './feedback';
import { mathProblem, evaluateAnswer } from './math-problem';

document.addEventListener('DOMContentLoaded', () => {
  // Get a Number Fact and set its number-fact innerHTML while keeping it hidden
  // getNumberFact();
  // moving getNumberFact() inside renderFeedback to be fired upon success

  // I could move all the "document.getElementById" inside here
  // instead of moving the bundle.js file below the body tag

  // add evaluateAnswer callback to the form
  const mathForm = document.getElementById('math-form');
  mathForm.addEventListener('submit', evaluateAnswer);
  // this fat arrow error in mathProblem obj points "this" back to the const mathForm
  // because the function evaluateAnswer was excuted on the addEventListener on mathForm
});
