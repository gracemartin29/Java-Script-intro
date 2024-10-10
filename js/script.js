// defines image sources for charcter choice
// last of us
const image1 = ("assets/Last_of_Us/Joel_Miller_Inconsistently_Heinous_2.WEBP.webp");
const image2 = ("assets/Last_of_Us/Ellie_in_The_Last_of_Us_Part_II.png");
const image3 = ("assets/Last_of_Us/DinaPart2.webp");
const image4 = ("assets/Last_of_Us/Tommy_Seattle_Profile.webp");
const image5 = ("assets/Last_of_Us/Jesse-TLOU.webp");
const image6 = ("assets/Last_of_Us/TLOU2-Maria-portrait.webp");

// detroit become human
const image7 = ("assets/Detriot_Become_Human/Connor_JP_site.webp");
const image8 = ("assets/Detriot_Become_Human/Kara_JP_site.webp");
const image9 = ("assets/Detriot_Become_Human/Markus_JP_site.webp");

// defines HTML constants
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("selected-character");

//  let variables
let charcterCounter = 2;

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

    // finds images depending on charcter counter
    if (charcterCounter > 6) {
        charcterCounter = 1;
    }

    if (charcterCounter === 1) {
        characterImage.src = image6;
        return;
    }

    if (charcterCounter === 2) {
        characterImage.src = image1;
        return;
    }

    if (charcterCounter === 3) {
        characterImage.src = image2;
        return;
    }

    if (charcterCounter === 4) {
        characterImage.src = image3;
        return;
    }

    if (charcterCounter === 5) {
        characterImage.src = image4;
        return;
    }

    if (charcterCounter === 6) {
        characterImage.src = image5;
        return;
    }

}

myButton.onclick = clickFunction;