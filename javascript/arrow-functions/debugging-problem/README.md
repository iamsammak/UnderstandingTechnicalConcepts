#Debugging Question
This file was downloaded then renamed for gitignore reasons.
To work through the problem run 'npm install' and 'webpack --watch'.

It is a simple web app that asks you to solve a basic math problem. Upon entering the correct answer, a math fact will be displayed from the [Numbers API][numbers-api]

The app was broken. Inside the files you'll notice that I have commented out what was the bugs and replace the broken code with a working solution.

##How the app works:
1. At first, an AJAX request is made to the [Numbers API][numbers-api] to get a random fact about numbers. This random fact is set as the `innerHTML` in the `number-fact` div and kept hidden. Meanwhile, two random numbers and a random math operation are picked to be displayed.
2. The user inputs an answer, and if the answer is correct, then the number fact is displayed as a reward for the user.
3. If the answer is incorrect, then it instead renders "Wrong Answer. Try Again!" After 2 seconds, the "Wrong Answer" message is wiped away.
4. The app should not move onto a new problem unless the user manually refreshes the page.

**Bonus #1:** Render specific number facts that correspond to the correct answer. For example, if the correct answer to the math problem was 3, then it should render a number fact that relates to the number 3. Refer to the [Numbers API documentation][numbers-api].

**Bonus #2:** When rendering a number fact, also render a button that wipes the number fact display and then gets a new math problem whenever this button is clicked.

###General Issues
1. [Improper usage of fat arrow function][fat-arrow] (be sure both you and the interviewee eventually read this!).
2. Comparison `==` vs `===`.
3. Implicit vs explicit return.
4. Selecting elements before document is loaded.

<!-- Links -->
[numbers-api]: http://numbersapi.com/
[fat-arrow]: https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/
