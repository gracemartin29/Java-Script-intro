// defines image sources for charcter choice
const image1 = ("assests/Joel_in_The_Last_of_Us.png")
const image2 = ("assests/Ellie_in_The_Last_of_Us_Part_II.png")
const image3 = ("assests/Abby_in_The_Last_of_Us_Part_II.png")

// defines HTML constants
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph")
const characterImage = document.getElementById("character1");

//  let variables
let charcterCounter = 1;

// button function

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
    if(charcterCounter > 3){
        charcterCounter =1;
    }

    if (charcterCounter === 1) {
        characterImage.src = image1;
        return;
    }

    if (charcterCounter === 2) {
        characterImage.src = image2;
        return;
    }

    if (charcterCounter === 3) {
        characterImage.src = image3;
        return;
    }

}

// button
myButton.onclick = clickFunction;


