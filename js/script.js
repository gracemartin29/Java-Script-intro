// constant variables
const image1 = ("assests/Joel_in_The_Last_of_Us.png")
const image2 = ("assests/Ellie_in_The_Last_of_Us_Part_II.png")
const image3 = ("assests/Abby_in_The_Last_of_Us_Part_II.png")



const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph")
const characterImage = document.getElementById("character1");

//  let variables
let charcterCounter = 1;

// button function
function clickFunction() {

    // shows clicks in inspect --> console, used to check code is working
    console.log("the button has been clicked")

    myParagraph.innerHTML = "I am on charcter " + charcterCounter;

    // expanded version of line below: clickCounter = clickCounter + 1;
    charcterCounter += 1;

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

    characterImage.src = "assests/Ellie_in_The_Last_of_Us_Part_II.png";
}

// button
myButton.onclick = clickFunction;


