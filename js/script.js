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
const characterImage = document.getElementById("selected-character");
const nameButton = document.getElementById("name-button");
const characterName = document.getElementById("character-name")

//  let variables
let characterCounter = 1;

// image button function

/**
 * update character counter and display next character
 * sets counter back to one when three is passed
 * @returns when character is chosen
 */

function clickFunction() {

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
    characterImage.src = images[characterCounter-1];
}

imageButton.onclick = clickFunction;

// character name button function
function submitFunction() {
    myParagraph.innerHTML = characterName.value;
}

nameButton.onclick = submitFunction;