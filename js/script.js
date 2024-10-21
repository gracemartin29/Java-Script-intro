// drag and drop constants
const complements = document.getElementsByClassName("complement");
const dropZone = document.getElementById("character-img");

let offsetX = 0;
let offsetY = 0;

let draggedImage = undefined;

// image array
const images = ["assets/Last_of_Us/Joel_Miller_Inconsistently_Heinous_2.WEBP.webp",
    "assets/Last_of_Us/Ellie_in_The_Last_of_Us_Part_II.png",
    "assets/Last_of_Us/DinaPart2.webp",
    "assets/Last_of_Us/Tommy_Seattle_Profile.webp",
    "assets/Last_of_Us/Jesse-TLOU.webp",
    "assets/Last_of_Us/TLOU2-Maria-portrait.webp"]

// defines HTML constants
const imageButton = document.getElementById("image-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");
const submitButton = document.getElementById("submit-button");
const characterName = document.getElementById("character-name")

//  let variables
let characterCounter = 1;

// image button function

/**
 * update character counter and display next character
 * sets counter back to one when three is passed
 * @returns when character is chosen
 */

function characterChangeFunction() {

    // shows clicks in inspect --> console, used to check code is working
    console.log("the button has been clicked")

    myParagraph.innerHTML = "I am on character " + characterCounter;

    // update character counter
    characterCounter += 1;

    // resets characterCounter after all images have been viewed
    if (characterCounter > images.length) {
        characterCounter = 1;
    }

    // sets images bases on characterCounter
    characterImage.src = images[characterCounter - 1];
}

imageButton.onclick = characterChangeFunction;

// submit button function
function submitFunction() {
    myParagraph.innerHTML = characterName.value;
}

submitButton.onclick = submitFunction;

// drag and drop functions
function onDrop(event) {
    draggedImage.style.left = event.clientX - offsetX + "px";
    draggedImage.style.top = event.clientY - offsetY + "px";
}

function onDragOver(event) {
    event.preventDefault();
}

function onDragStart(event) {
    draggedImage = event.target;

    const style = window.getComputedStyle(draggedImage);

    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY - parseInt(style.top);
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;

// selects complements individually
for (let complement of complements) {
    complement.ondragstart = onDragStart;
    complement.ondragover = onDragOver;
    complement.ondrop = onDrop;
}