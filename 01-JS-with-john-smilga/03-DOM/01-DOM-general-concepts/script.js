// DOM GENERAL CONCEPTS
// - same as css, we select an element/elements that u want to affect.
// - decide what effect we want to apply to the selection.

// What is document -------------------------------------------------------------------------------------------
// - when we attach our js file with html, we get access to window object
// - the window obj has many properties and methods, among which there is document property
// - document property is a gaint object itself consisting of various properties and methods

// - the element selection returns a node object / node list (array like obj) (in case of querSelAll)
const btn = document.querySelector(".btn");
console.log(btn);
console.log(btn.style); // we get a node list of all the style propeties names

// node object -------------------------------------------------------------------------------------------------
// - represents single node in the DOM tree
// - common properties - nodeValue, nodeName, nodeType
// - common methods - removeChils(), appendChild()
console.log(btn.nodeName); // BUTTON

// node list ----------------------------------------------------------------------------------------------------
// - collection of nodes, array-like obbject that contains list of nodes
// - returned by methods like querySelectorAll() or properties like childNodes
// - They do not have all the methods and properties of regular arrays.
// - but they can be iterated using loops/converted into an array using Array.from() or the spread operator...
// - Has properties like length to get the number of nodes and can be iterated, but it does not have all the methods of regular arrays.

// Summary ------------------------------------------------------------------------------------------------------
// Node obj - single entity,
// NodeList - collection of nodes that can be looped through/accessed by index.
const btns = document.querySelectorAll(".btn");
console.log(btns); // NodeList(2) [button.btn, button.btn]

// WINDOW AND DOCUMENT ------------------------------------------------------------------------------------------
// - window object - provided by browser api, represents current tab
// - document obj  - within window obj we have document(node object), represents html doc

// when we need to see the props and methods of the node object, we use dir
console.dir(document);
console.dir(window);

// getElementById() ---------------------------------------------------------------------------------------------
// - allows us to select the elements based on their id

// getElementsBytagName('tag name'); ----------------------------------------------------------------------------
// - allows us to select elements based on their tag names
// - returns a HTMLCollection (array-like-objects)
// - HTMLCollection - index, length but not array methods like forEach
const el = document.getElementsByTagName("button");
console.log(el); // HTMLCollection(2) [button.btn, button.btn]

// change the color of the btn  
// el.style.color = "red"; // ERROR: Cannot set properties of undefined (setting 'color')
el[0].style.color = "red"; // correct way

// querySelectorAll() ------------------------------------------------------------------------------------------
// - used to select the elements by their classnames, id directly
// - returns a nodeList (array-like-obj), collection of nodes
// - can run forEach
// - turn them into array - spread op
// - after that we can use array prop and methods

const items = document.querySelectorAll("li");
console.log(items); // NodeList

const betterItems = [...items];
console.log(betterItems); // [li,li,li]

// getElementsByClassName() -------------------------------------------------------------------------------------
// - returns HTMLCollection
// - we cannot use forEach on them

// querySelector('any css') - selects single el
// querSelectorAll('any css') - selects all

// SUMMARY
// getElementById() - returns single el, if no el - "null"
// getElementsByTagName() -  HTMLCollection
// getElementsByClassName() -  HTMLCollection
// querySelector() -  single item
// querySelectorAll() -  Node List --> converted to arrays using [...]
