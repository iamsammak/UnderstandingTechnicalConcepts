# Handling DOM with Plain Old JavaScript

## Creating a Tag
```js
  let h1 = document.createElement('h1');
```

#### Set Attributes
```js
  h1.setAttribute("id", "main-color");
  h1.setAttribute("class", "demo-class");
```

#### Style it
```js
  h1.style.position = "absolute";
  h1.style.width = "100vw";
  h1.style.height = "100vh";
  h1.style.backgroundColor = "orange";
```

#### Remove an Element
The traditional (man of steel) way

For this example lets say we have the following HTML element
```HTML
  <div id="myDiv">test</div>
```
run the following JavaScript lines to remove it
```js
  var elem = document.getElementById("myDiv");
  elem.parentNode.removeChild(elem);
```

Using jQuery
```js
  $('#myDiv').remove();
```

The NEW way: using [remove()](https://www.w3schools.com/jsref/met_select_remove.asp)
```js
  var elem = document.getElementById("myDiv");
  elem.remove();
```

### Other ways
```js
document.body.style.background = "#f3f3f3 url('img_tree.png') no-repeat right top";
```
