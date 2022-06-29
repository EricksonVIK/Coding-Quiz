// Variables
// pageContent - main body id page-content
// timerDiv - div in header - timer
// timerClock - p under div in header
// 

// selecting timer parent "div"
var timerDiv = document.getElementById("timer");
// creating timer "p"
var timerClock = document.createElement("p");
// add timer page
timerDiv.appendChild(timerClock);

timerDiv.appendChild(timerClock);

timerClock.textContent = (countdown());

// QUESTION Create Block
// select the section
var questionSect = document.querySelector("#question");

// create h1 question block
var questionNum = document.createElement("h1");
questionNum.textContent=(
    "This is where the question will end up"
    );

// create ordered  buttons for answers
var multiChoice = document.createElement("div");
multiChoice.className = ("questionActual");

var choiceA = document.createElement("button");
choiceA.className = ("choiceA");
choiceA.textContent = ("Option A");

var choiceB = document.createElement("button");
choiceB.className = ("choiceB");
choiceB.textContent = ("Option B");

var choiceC = document.createElement("button");
choiceC.className = ("choiceC");
choiceC.textContent = ("Option C");

var choiceD = document.createElement("button");
choiceD.className = ("choiceD");
choiceD.textContent = ("Option D");
questionSect.appendChild(questionNum);
questionSect.appendChild(multiChoice);
multiChoice.appendChild(choiceA);
multiChoice.appendChild(choiceB);
multiChoice.appendChild(choiceC);
multiChoice.appendChild(choiceD);
// add elements
// pageContent.appendChild(questionBlock);

var startButton = document.querySelector("#go-Button");
startButton.addEventListener("submit", countdown());
console.dir("startButton");

// timer function
function countdown(){

    var timeLeft=60;

    var timedInterval = setInterval(function (){
    if (timeLeft > 1 ){
        timerClock.textContent = timeLeft + " seconds remaining ";
        timeLeft --;
    } else if (timeLeft === 1) {
        timerClock.textContent = timeLeft + " second remaining ";
    } else {
        // go to final page
        timerClock.textContent = ""};
        clearInterval(timedInterval);
    }, 1000);

};

countdown();
// function display for appended questions?

// variable question 1, ...
// var questionSection = function questionAdd(){
//     //  function questionSection(){
//     //     // turn body into a variable
//         var pageContent = document.getElementById ("page-content");
//         var pageContent = document.createElement ("section");
//         var questionBlock = document.getElementById("question");
//         var questionNum = document.createElement ("h1");
//         pageContent.appendChild(questionBlock);
//         questionBlock.appendChild(questionNum);
//         console.log(pageContent);
//     // }

//     // questionSection();
// };

// questionAdd();