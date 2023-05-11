// this file is for code needed for
// input, quiz and truth game
// global variable for first name
// a variable that can be used in all functions
// first name
let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");
    // get the values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    // check the input
    if (fname === "" || lname === "") {
        alert("First and last name cannot be an empty string!");
        return;
    }
    // age check
    if (age === "" || age < 18) {
        alert("Invalid age! You must be 18 or older!")
        return;
    }
    // update output paragraph
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + "!";
}
// function to play the trivia game
function trivia1() {
    // get handle to answer paragraph
    let triviaAnswer = document.getElementById("trivia-answer");
    // get handles and values from radio selections
    let chocSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
    // give the results
    if (chocSelected) {
        triviaAnswer.innerHTML = fname + ", chocolate is wrong!";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", tuna is wrong!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", Bravo! You are right!";
    }
    else {
        triviaAnswer.innerHTML = "Uh oh. Something went wrong!!!";
    }


}
function findLie() {
    // get handle to answer paragraph
    let lieAnswer = document.getElementById("lie-answer");

    // get handles and values from radio selections
    let lie1Selected = document.getElementById("lie1").checked;
    let lie2Selected = document.getElementById("lie2").checked;
    let lie3Selected = document.getElementById("lie3").checked;

    // give the results, didnt spend much time on the actual truths and lies 
    if (lie1Selected) {
        lieAnswer.innerHTML = fname + ", 'I have climbed Mount Everest' is a truth!";
    }
    else if (lie2Selected) {
        lieAnswer.innerHTML = fname + ", Bravo! 'I have been to the moon' is indeed a lie!";
    }
    else if (lie3Selected) {
        lieAnswer.innerHTML = fname + ", 'I have swum with sharks' is also a truth!";
    }
    else {
        lieAnswer.innerHTML = "Uh oh. Something went wrong!!!";
    }
}



