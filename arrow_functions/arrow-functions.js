// https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/

// 1.Defining methods on an object
// what "this" is defined on.

// 1a. Object literal
var calculate = {
  array: [1, 2, 3],
  sum: () => {
    console.log(this === window); // => true
    return this.array.reduce((result, item => result + item));
  }
};
console.log(this === window); // -> true
// Throws "TypeError: Cannot read property 'reduce' of undefined"
calculate.sum();

// correct version below
// making sum a regular function, this on invocation of calculate.sum()
//  is the calculate object not window
var calculate = {
  array: [1, 2, 3],
  sum() {
    console.log(this === calculate); // => true
    return this.array.reduce((result, item) => result + item);
  }
};
calculate.sum(); // => 6

// 1b.Object prototype
// careful when defining methods on a prototype object
// use .bind(this) in the constructor or the below example
function MyCat(name) {
  this.catName = name;
}
MyCat.prototype.sayCatName = () => {
  console.log(this === window); // => true
  return this.catName;
};
var cat = new MyCat('Mew');
cat.sayCatName(); // => undefined

// with old school function expression
function MyCat(name) {
  this.catName = name;
}
MyCat.prototype.sayCatName = function() {
  console.log(this === cat); // => true
  return this.catName;
};
var cat = new MyCat('Mew');
cat.sayCatName(); // => 'Mew'



// 2. Callback functions with dynamic context
// can't make arrow function bind 'this' dynamic

var button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log(this === window); // => true
  this.innerHTML = 'Clicked button';
});

// old school function
var button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log(this === button); // => true
  this.innerHTML = 'Clicked button';
});


// 3. Invoking constructors
var Message = (text) => {
  this.text = text;
};
// Throws "TypeError: Message is not a constructor"
var helloMessage = new Message('Hello World!');

// old school function
var Message = function(text) {
  this.text = text;
};
var helloMessage = new Message('Hello World!');
console.log(helloMessage.text); // => 'Hello World!'


// 4. Too short syntax can be confusing for others on first look
let multiply = (a, b) => b === undefined ? b => a * b : a * b;
let double = multiply(2);
double(3);      // => 6
multiply(2, 3); // => 6

// make it more readable
function multiply(a, b) {
  if (b === undefined) {
    return function(b) {
      console.log(`inside: a: ${a}, b: ${b}`);
      return a * b;
    }
  }
  console.log(`outside: a: ${a}, b: ${b}`);
  return a * b;
}
let double = multiply(2);
double(3);      // => 6
multiply(2, 3); // => 6


// 5.Conclusion
// Without doubt the arrow function is a great addition.
// When used correctly it brings simplicity in places
// where earlier you had to use .bind()
// or trying to catch the context.
// It also makes the code lighter.



// https://www.sitepoint.com/currying-in-functional-javascript/
// Review on Currying
const greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

const greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

// OR use the original curried function directly
greetCurried("Hi there")("Howard"); //"Hi there, Howard"


var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};

var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi"); // => "Hello, Heidi."

var greetGoodbye = curryIt(greeter, "Goodbye", ", ");
greetGoodbye(".", "Joe"); // => "Goodbye, Joe."
