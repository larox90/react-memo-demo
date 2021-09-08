## React Memo Demo

For this demo we will have in the _App.js_ we will have a label called _counter_ and two buttons that will increase and decrease a counter, that is handled by `useState`, based on this when we click the any of those buttons the _App.js_ component will re render and it's children.

_Nav.js_ will not re render even that it's receiving props and callbacks (to understand with it's not re rendering read the comments into _App.js_ and _Nav.js_)

_RenderedChild.js_ will re render because it doesn't have memo (has the normal behavior)

