// Variables
// pageContent - main body id page-content
// timerDiv - div in header - timer
// timerClock - p under div in header
var mainPage = document.querySelector("#landing");
console.log(mainPage);

var timeLeft = 5;
var timedInterval;
var startBtn = document.querySelector("#goButton");
var corrIncNote = document.createElement("button");
corrIncNote.innerHTML = "Answer!"

// selecting timer parent "div"
var timerDiv = document.getElementById("timer");
// creating timer "p"
var timerClock = document.createElement("p");
// add timer page
timerDiv.appendChild(timerClock);

timerDiv.appendChild(timerClock);

// timerClock.textContent = (countdown());
startBtn.addEventListener("click", function (){
    
    timedInterval = setInterval(function (){
        if (timeLeft > 1 ){
            timerClock.innerHTML = timeLeft + " seconds remaining ";
        } else if (timeLeft === 1) {
            timerClock.innerHTML = timeLeft + " second remaining ";
        } else {
            // go to final page
            console.log('hit')
            timerClock.innerHTML = "Time's Up!"
            clearInterval(timedInterval);
            return
        };
        timeLeft --;
    }, 1000);

});

// function to click high score box - prompt to call the saved data in alert or prompt


// QUESTION Create Block
var questionIndex = [];

// questionsArr[questionIndex]

var questionsArr = [
    {
        question: "Question#1?",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "a" 
    },
    {
        question: "Question#2?",
        answers: ["e", "f", "g", "h"],
        correctAnswer: "b" 
    },
    {
        question: "Question#3?",
        answers: ["i", "j", "k", "l"],
        correctAnswer: "c" 
    },
    {
        question: "Question#4?",
        answers: ["m", "n", "o", "p"],
        correctAnswer: "d" 
    },
    {
        question: "Question#5?",
        answers: ["q", "r", "s", "t"],
        correctAnswer: "a" 
    },
];

// function for answering correct
//  add point to score, give a correct propmpt, chime sound (if possible)
// move to next question (function for each question?)

// function for answering incorrect
//  gong sound ( if possible), incorrect prompt, move to next question, subtract time from timer


// question #1
// select the section
// add data attribute to question
// 
startBtn.addEventListener("click", function (){

    // make landing page disapear
    function backgroundClear(){
        mainPage.style.height = "10px";
        mainPage.style.visibility="hidden";
    };
    backgroundClear();
    // aiming on section
    var questionSect = document.querySelector("#question");

    // create 2 divs for text and question section
    var questionNum = document.createElement("div");
    var answerBlock = document.createElement("div");
    answerBlock.className = ("answerBlock"); 

    // append first 2 divs
    questionSect.appendChild(questionNum);
    questionSect.appendChild(answerBlock);

    // create h1 - question text
    var questionText = document.createElement("h1");
    questionText.textContent = " This is a placeholder for question #1."

    // append h1 into question div
    questionNum.appendChild(questionText);

    // create 2 div for answer block
    // create choice div
    var multiChoice = document.createElement("div");
    multiChoice.className = ("questionActual");
    // create response div
    var answerResp = document.createElement("div");
    answerResp.className = ("answerResp");
    
    // append answer and response to block
    answerBlock.appendChild(multiChoice);
    answerBlock.appendChild(answerResp);

    // create buttons for choice
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
    
    // append choices under multichoice div
    multiChoice.appendChild(choiceA);
    multiChoice.appendChild(choiceB);
    multiChoice.appendChild(choiceC);
    multiChoice.appendChild(choiceD);

    // create response p
    var corrIncNote = document.createElement("p");
    corrIncNote.textContent= ("Answer!");

    // append response p
    answerResp.appendChild(corrIncNote);
});



// function to save scores, track high score, add initials to save
// button to go back to start/landing page to start over
