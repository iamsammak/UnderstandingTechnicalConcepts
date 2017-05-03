## Essential React.js Interview Questions

### 1. What is React?

```
React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.
```

Key points:
+ React builds UI components
+ Predominantly the "V" (View) in MVC
  - Therefore has no opinions on the other pieces of your technology stack and can be seamlessly integrated into any application

#### How is React different?

+ Under what circumstances would you choose React over (AngularJS, etc)?
  - easy to learn, natural to use
  - easier to swap for something better in the future
  - React uses Flux, where data flow is unidirectional
  - React has a pure JS approach.
    When used with the JSX library, allows you to define the HTML view in the js file itself

  Quick input about AngularJS
  - Two-way binding:
    Any data-related changes affecting the model are immediately propagated to the matching view(s), and that any changes made in the view(s) (say, by the user) are immediately reflected in the underlying model. When the app data changes, so does the UI, and conversely.


+ If React only focuses on a small part of building UI components, can you explain some pitfalls one might encounter when developing a large application?
+ If you were rewriting an AngularJS application in React, how much code could you expect to re-use?
