// Vocabulary Builder

// __ create a built-in vocabulary list to quiz on
    // can be pretty short
// __ game w/inputs - keep as much of the orig game as poss
// __ randomisation - rather than for loops
// __ local storage - for user-inputted vocabulary


// test - html file connected to js file?
console.log("I'm connected!");

// test - create an HTML element to append
// let el = document.createElement("h1");
// el.innerHTML = "from English to French";

// create function show to append HTML elements to the end of the DOM
function show (currentElement) {
    document.body.appendChild(currentElement);
}
// test function show
// show(el);

// create function to append vocabulary items to vocabulary list area
function addToListArea (currentElement) {
    document.getElementById("list-area").appendChild(currentElement);
}

// add event listener - when #Add clicked, run createAndShow
document.getElementById("Add").addEventListener("click", createAndShow);
let vocabulary = []; // array of objects
function createAndShow(){
    let inputEN = document.getElementById('EN').value;
    let inputFR = document.getElementById('FR').value;
    vocabulary.push({ // push objects to array
        EN: inputEN,
        FR: inputFR
    });
    document.getElementById('EN').value = ''; // clear input field
    document.getElementById('FR').value = ''; // clear input field
    // console.log(vocabulary); // initial testing
    showVocabList();
}

// separate function, in case i don't always want to show the list
function showVocabList(){
    document.getElementById("list-area").innerHTML = ""; // prevents list printing repeatedly each time a term is added
    for (let i = 0; i < vocabulary.length; i++) {
        let pair = document.createElement("p");
        pair.innerHTML = `${i + 1}: <span>EN: ${vocabulary[i].EN}</span><span>FR: ${vocabulary[i].FR}</span>`;
        // console.log(pair); // initial testing
        // show(pair); // appends to body, not to div
        addToListArea(pair);
    }
}


// // // //

var rightAnswers = 0;

var wrongAnswers = 0;

var ExitLoop = false;

var LastQuestionResults = "";

 

for (i = 0; i < arrayENtoFR.length; i++) {

    var inputBox = prompt(LastQuestionResults + "What is the French word for " + arrayENtoFR[i][0] + "?");

    if ((inputBox === null) || (inputBox === "")) {

        LastQuestionResults = "";

        ExitLoop = true;

        break;

    }

    else if ((inputBox.toLowerCase() === arrayENtoFR[i][1].toLowerCase()) || (inputBox.toLowerCase() === arrayENtoFR[i][2].toLowerCase()) || (inputBox.toLowerCase() === arrayENtoFR[i][3].toLowerCase())) {

        rightAnswers++;

        LastQuestionResults = "Correct!" + "\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.\n\n"

//        alert("Correct!" + "\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct");

    }

    else {

        wrongAnswers++;

        if (arrayENtoFR[i][3] !== "")

            LastQuestionResults = "Sorry, the correct answer is " + arrayENtoFR[i][1] + " or " + arrayENtoFR[i][2] + " or " + arrayENtoFR[i][3] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.\n\n";

//            alert("Sorry, the correct answer is " + arrayENtoFR[i][1] + " or " + arrayENtoFR[i][2] + " or " + arrayENtoFR[i][3] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.");

        else if (arrayENtoFR[i][2] !== "")

            LastQuestionResults = "Sorry, the correct answer is " + arrayENtoFR[i][1] + " or " + arrayENtoFR[i][2] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.\n\n";

//            alert("Sorry, the correct answer is " + arrayENtoFR[i][1] + " or " + arrayENtoFR[i][2] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.");

        else

            LastQuestionResults = "Sorry, the correct answer is " + arrayENtoFR[i][1] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.\n\n";

//            alert("Sorry, the correct answer is " + arrayENtoFR[i][1] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.");

    }

}

 

if (ExitLoop == false)

{

    for (i = 0; i < arrayFRtoEN.length; i++) {

        var inputBox = prompt(LastQuestionResults + "What is the English word for " + arrayFRtoEN[i][0] + "?");

        if ((inputBox === null) || (inputBox === "")) {

            LastQuestionResults = "";

            break;

        }

        else if ((inputBox.toLowerCase() === arrayFRtoEN[i][1].toLowerCase()) || (inputBox.toLowerCase() === arrayFRtoEN[i][2].toLowerCase()) || (inputBox.toLowerCase() === arrayFRtoEN[i][3].toLowerCase())) {

            rightAnswers++;

            LastQuestionResults = "Correct!" + "\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.\n\n";

//            alert("Correct!" + "\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.");

        }

        else {

            wrongAnswers++;

            if (arrayFRtoEN[i][3] !== "")

                LastQuestionResults = "Sorry, the correct answer is " + arrayFRtoEN[i][1] + " or " + arrayFRtoEN[i][2] + " or " + arrayFRtoEN[i][3] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.\n\n";

//              alert("Sorry, the correct answer is " + arrayFRtoEN[i][1] + " or " + arrayFRtoEN[i][2] + " or " + arrayFRtoEN[i][3] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.");

            else if (arrayENtoFR[i][2] !== "")

                LastQuestionResults = "Sorry, the correct answer is " + arrayFRtoEN[i][1] + " or " + arrayFRtoEN[i][2] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.\n\n";

//              alert("Sorry, the correct answer is " + arrayFRtoEN[i][1] + " or " + arrayFRtoEN[i][2] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.");

            else

                LastQuestionResults = "Sorry, the correct answer is " + arrayFRtoEN[i][1] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.\n\n";

//              alert("Sorry, the correct answer is " + arrayFRtoEN[i][1] + ".\n" + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.");

        }

    }

}

 

alert(LastQuestionResults + "You finished with " + rightAnswers + " out of " + (rightAnswers + wrongAnswers) + " correct.");