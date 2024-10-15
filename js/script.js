// image array
const images = ["assets/Last_of_Us/Joel_Miller_Inconsistently_Heinous_2.WEBP.webp",
    "assets/Last_of_Us/Ellie_in_The_Last_of_Us_Part_II.png",
    "assets/Last_of_Us/DinaPart2.webp",
    "assets/Last_of_Us/Tommy_Seattle_Profile.webp",
    "assets/Last_of_Us/Jesse-TLOU.webp",
    "assets/Last_of_Us/TLOU2-Maria-portrait.webp"]

// defines HTML constants
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("selected-character");

//  let variables
let charcterCounter = 1;

// button function 1

/**
 * update charcter counter and display next charcter
 * sets counter back to one when three is passed
 * @returns when charcter is chosen
 */

function clickFunction() {

    // shows clicks in inspect --> console, used to check code is working
    console.log("the button has been clicked")

    myParagraph.innerHTML = "I am on charcter " + charcterCounter;

    // update charcter counter
    charcterCounter += 1;

    // resets charcterCounter after all images have been viewed
    if (charcterCounter > images.length) {
        charcterCounter = 1;
    }

    // sets images bases on charcterCounter
    characterImage.src = images[charcterCounter-1];
}

myButton.onclick = clickFunction;