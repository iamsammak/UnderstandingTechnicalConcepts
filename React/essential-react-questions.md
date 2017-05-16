## Essential React.js Interview Questions

(taken from [codementor](https://www.codementor.io/reactjs/tutorial/5-essential-reactjs-interview-questions))

### 1. What is React?

  *React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.*


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
  - Reach works with the Virtual DOM and not the DOM directly

  ![react-DOM](./images/react-virtual-dom.png)

  Quick input about AngularJS
  - Two-way binding:
    Any data-related changes affecting the model are immediately propagated to the matching view(s), and that any changes made in the view(s) (say, by the user) are immediately reflected in the underlying model. When the app data changes, so does the UI, and conversely.
  - Dirty checking is carried out after *any* operation is performed within Angular's score ($digest cycle) which leads to slower performance as the amount of binding increases
  - Steep learning curve
    Modules, controllers, directives, scopes, templating, linking functions, filters dependency injection

  Great comparision by Pete Hunt (Facebook/Instagram) on [AngularJS vs React](https://www.quora.com/profile/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look)


+ Other potential questions to consider
  - If React only focuses on a small part of building UI components, can you explain some pitfalls one might encounter when developing a large application?
  - If you were rewriting an AngularJS application in React, how much code could you expect to re-use?


### 2. What happens during the lifecycle of a React component?

#### High-level component lifecycle
At the highest level, React components have lifecycle events that fall into three general categories:

1. Initialization
2. State/Property Updates
3. Destruction

Every React component defines these events as a mechanism for managing its properties, state, and rendered output. Some of these events only happen once, others happen more frequently; understanding these three general categories should help you clearly visualize when certain logic needs to be applied.

For example, a component may need to add event listeners to the DOM when it first mounts. However, it should probably remove those event listeners when the component unmounts from the DOM so that irrelevant processing does not occur.
```js
class MyComponent extends React.Component {
    // when the component is added to the DOM...
    componentDidMount() {
        window.addEventListener(‘resize’, this.onResizeHandler);
    }

    // when the component is removed from the DOM...
    componentWillUnmount() {
        window.removeEventListener(‘resize’, this.onResizeHandler);
    }

    onResizeHandler() {
        console.log(‘The window has been resized!’);
    }
}
```

#### Low-level component lifecycle
![specific component lifecycles](./images/component-lifecycle.png)

Within these three general buckets exist a number of specific lifecycle hooks — essentially abstract methods — that can be utilized by any React component to more accurately manage updates. Understanding how and when these hooks fire is key to building stable components and will enable you to control the rendering process (improving performance).

Take a look at the diagram above. The events under “Initialization” only happen when a component is first initialized or added to the DOM. Similarly, the events under “Destruction” only happen once (when the component is removed from the DOM). However, the events under “Update” happen every time the properties or state of the component change.

For example, components will automatically re-render themselves any time their properties or state change. However, in some cases a component might not need to update — so preventing the component from re-rendering might improve the performance of our application.

```js
class MyComponent extends React.Component {

    // only re-render if the ID has changed!
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.id === this.props.id;
    }
}
```
**For more specific details**, go through [React docs on component lifecycle](https://facebook.github.io/react/docs/react-component.html)


### 3. JSX

Facebook introduced a new dialect of JavaScript called JSX that embeds raw HTML templates inside JavaScript code
    JSX code by itself cannot be read by the browser
    It must be transpiled into traditional JS using tools like Babel and webpack


Review the React docs on [JSX Gotchas](https://facebook.github.io/react/docs/jsx-in-depth.html)

### 4. Virtual DOM Questions
What is React's virtual DOM and why is it used? How does the diffing algorithm work?

Virtual DOM is a simpler and faster abstraction of the HTML DOM. You may think that its more expensive to manage two DOMs, but being able to traverse and perform operations on the virtual DOM saves React from having to have costly interactions with the real one, only updating it when it absolutely needs to.

#### Virtual DOM
React keeps two copes of a virtual DOM (the original and updated versions). These two virtual DOM trees are passed into a React function that diffs them a stream of DOM operations are returned (generally these operations involve setting a property on an element)

![react-virtual-dom](http://www.funnyant.com/wp-content/uploads/2014/07/reactjs-virtual-dom.png)

```
Consider a DOM made of thousands of divs. Remember, we are modern web developers, our app is very SPA! We have lots of methods that handle events - clicks, submits, type-ins… A typical jQuery-like event handler looks like this:

find every node interested on an event
update it if necessary
Which has two problems:

It’s hard to manage. Imagine that you have to tweak an event handler. If you lost the context, you have to dive really deep into the code to even know what’s going on. Both time-consuming and bug-risky.

It’s inefficient. Do we really need to do all this findings manually? Maybe we can be smarter and tell in advance which nodes are to-be-updated?

Once again, React comes with a helping hand. The solution to problem 1 is declarativeness. Instead of low-level techniques like traversing the DOM tree manually, you simple declare how a component should look like. React does the low-level job for you - the HTML DOM API methods are called under the hood. React doesn’t want you to worry about it - eventually, the component will look like it should.

```

#### ReactComponents
Whenever a ReactComponent is changing the state, we want to make as little changes to "real" DOM as possible. So the ReactComponent is converted into a React Element which is then inserted to the virtual DOM via the diff algorithm.

<!-- Links -->
