# Explain the difference between call, apply and bind in JavaScript

This is one of JavaScripts trickier bits

All three of these JavaScript methods allow you to change the value of ```this``` for a given function.

### Call

[Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

The __call()__ method invokes the funciton and allows you to pass in arguments one by one.

### Apply

[Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

The __apply()__ method invokes the function and allows you to pass in arguments as an array.

### Bind

[Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

The __bind()__ method returns a new function, allowing you to pass in a this array and any number of arguments.


## When To Use Each
Call and apply are pretty interchangeable. Just decide whether it's easier to send in an array or a comma separated list of arguments.
  **C**\ all is for comma (separated list)
  **A**\ pply is for Array

Bind is a bit different. It returns a new function Call and Apply execute the current function immediately.

Bind is great for a lot of things. We can use it to curry functions like in the above example. We can take a simple hello function and turn it into a helloJon or helloKelly. We can also use it for events like onClick where we don't know when they'll be fired but we know what context we want them to have. (Used a lot inside constructor functions for React components)
