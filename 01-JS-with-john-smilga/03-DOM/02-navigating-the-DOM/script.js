// NAVIGATING THE DOM - CHILDREN ------------------------------------------------------------------------------
const result = document.querySelector(".result");

// childNodes
// - returns all the childNodes including whitespaces(which is treated as a textnode)
// - returns NodeList
console.log(result.childNodes); // NodeList(9) [text, li, text, li, text, li, text, li, text]

// children
// - returns the child elements of an object
// - returns HTMLCollection
console.log(result.children); // HTMLCollection(4) [li, li, li, li]

// firstChild
// - returns the first child element including whitespaces (treated as textnode)
console.log(result.firstChild); // #text

// lastChild
// - returns the last child element including whitespaces (treated as textnode)
console.log(result.lastChild); // #text

// Note
// childNodes -> children
// firstChild -> firstElementChild
// lastChild  -> lastElementChild

// NAVIGATING THE DOM - PARENTS ---------------------------------------------------------------------------------
const heading2 = document.querySelector("h2");

// parentElement
console.log(heading2.parentElement); // second (div)
console.log(heading2.parentElement.parentElement); // first (div)

// NAVIGATING THE DOM - SIBLINGS --------------------------------------------------------------------------------
const firstItem = document.querySelector(".first-item");
const lastItem = document.querySelector(".last-item");

// nextSibling
// - returns the next sibling including whitespace (treated as text)
console.log(firstItem.nextSibling); // #text
console.log(firstItem.nextSibling.nextSibling); // <li>item2</li>

// nextElementSibling
// - returns the next element sibling (does not include whitespace)
console.log(firstItem.nextElementSibling); // <li>..</li>

// previousSibling
// - returns prev sibling, includes whitespace (considered as text)
console.log(lastItem.previousSibling); // #text

// previousElementSibling
// - returns previous sibling el (does not include whitespace)
console.log(lastItem.previousElementSibling); // <li>...</li>

// THE DIFFERENCE B/T nodeValue AND textContent -----------------------------------------------------------------
// nodeValue
const specialHeading = document.getElementById("special");
console.log(specialHeading.nodeValue); // null
console.log(specialHeading.childNodes[0].nodeValue); // this is a special text

// textContent
console.log(specialHeading.textContent); // this is a special text

// getAttribute() -----------------------------------------------------------------------------------------------
// - getAttribute() gives us the attribute of the el, takes the attribute name as an arg
const firstSentence = document.querySelector(".first-sentence");
console.log(firstSentence.getAttribute("class")); // first-sentence (class name)

// setAttribute() -----------------------------------------------------------------------------------------------
let link = document.querySelector("a");
console.log(link);
link.setAttribute("href", "https://www.google.com/");

// className property -------------------------------------------------------------------------------------------
// - used to check/set the classNames of the element
// - if no classname is provided for the el, you get blank whitespace printed in the console
console.log(firstSentence.className); // first-sentence

// - set the names of multiple classes of the element
firstSentence.className = "newFirstSentence";

// classList property -------------------------------------------------------------------------------------------
// - mostly used to add/remove/toggle classes to the elements dynamically (means we can add them later)
console.log(firstSentence.classList); // DOMTokenList ['first-sentence', value: 'first-sentence']

// add multiple classes using classList
firstSentence.classList.add("lastNewClass", "lastclass");
console.log(firstSentence.classList); //  ['newFirstSentence', 'lastNewClass', 'lastclass']

