// constant variables
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph")

//  let variables
let clickCounter = 0;

// button function
function clickFunction() {

    // expanded version of line below: clickCounter = clickCounter + 1;
    clickCounter += 1;

    myParagraph.innerHTML = "I have been clicked " + clickCounter + " times(s)";
}

// button
myButton.onclick = clickFunction;