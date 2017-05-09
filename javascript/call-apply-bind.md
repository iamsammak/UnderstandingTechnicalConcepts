# Explain the difference between call, apply and bind in JavaScript

This is one of JavaScripts trickier bits

All three of these JavaScript methods allow you to change the value of ```this``` for a given function.

Code examples from: https://codeplanet.io/javascript-apply-vs-call-vs-bind/

### Call

[Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

The __call()__ method invokes the funciton and allows you to pass in arguments one by one.

```js
  var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
  var person2 = {firstName: 'Kelly', lastName: 'King'};

  function say(greeting) {
      console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }

  say.call(person1, 'Hello'); // Hello Jon Kuperman
  say.call(person2, 'Hello'); // Hello Kelly King
```

### Apply

[Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

The __apply()__ method invokes the function and allows you to pass in arguments as an array.

```js
  var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
  var person2 = {firstName: 'Kelly', lastName: 'King'};

  function say(greeting) {
      console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }

  say.apply(person1, ['Hello']); // Hello Jon Kuperman
  say.apply(person2, ['Hello']); // Hello Kelly King
```

### Bind

[Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

The __bind()__ method returns a new function, allowing you to pass in a this array and any number of arguments.

```js
  var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
  var person2 = {firstName: 'Kelly', lastName: 'King'};

  function say() {
      console.log('Hello ' + this.firstName + ' ' + this.lastName);
  }

  var sayHelloJon = say.bind(person1);
  var sayHelloKelly = say.bind(person2);

  sayHelloJon(); // Hello Jon Kuperman
  sayHelloKelly(); // Hello Kelly King
```

## When To Use Each
Call and apply are pretty interchangeable. Just decide whether it's easier to send in an array or a comma separated list of arguments.
  **C** all is for comma (separated list)
  **A** pply is for Array

Bind is a bit different. It returns a new function Call and Apply execute the current function immediately.

Bind is great for a lot of things. We can use it to curry functions like in the above example. We can take a simple hello function and turn it into a helloJon or helloKelly. We can also use it for events like onClick where we don't know when they'll be fired but we know what context we want them to have. (Used a lot inside constructor functions for React components)
