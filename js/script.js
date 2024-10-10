// constant variables
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph")

// button
myButton.onclick = clickFunction;

// button function
function clickFunction() {
    myParagraph.innerHTML = "changed paragraph";
}