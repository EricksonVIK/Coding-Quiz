// Variables
// main page
var mainPage = document.querySelector("#landing");

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

// timerDiv.appendChild(timerClock);

// qUESTION BLOCK ELEMENTS
// aiming on sections
var questionSect = document.querySelector("#question");
var finalSect = document.querySelector("#finalpage");

// create 2 divs for text and question section
var questionNum = document.createElement("div");
var answerBlock = document.createElement("div");
answerBlock.className = ("answerBlock"); 

// create h1 - question text
var questionText = document.createElement("h1");
questionText.textContent = " This is a placeholder for question #1."

// create 2 div for answer block
// create choice div
var multiChoice = document.createElement("div");
multiChoice.className = ("questionActual");
// create response div
var answerResp = document.createElement("div");
answerResp.className = ("answerResp");

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

// create response p
var corrIncNote = document.createElement("p");
corrIncNote.textContent= ("Answer!");

// Final page elements
// Section creation
var doneBlock = document.createElement("section");

// done message div and h1
var doneMsgBlock = document.createElement("div");
var doneMsg = document.createElement("h1");

// score message div and h1
var scoreBlock=document.createElement("div");
var scoreMsg = document.createElement("h1");

// final submit div with input and save button
var scoreSub = document.createElement("div");
var scoreInp =  document.createElement("input");
var submitFinal = document.createElement("button"); 
var initialP = document.createElement("p");      


// make landing page disapear
function backgroundClear(){
    mainPage.style.height = "10px";
    mainPage.style.visibility="hidden";
};

function questionClear(){
    questionSect.style.height = "1px";
    questionSect.style.visibility="hidden";
};


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
            timerClock.innerHTML = "";
            // alert("Times Up!")
            clearInterval(timedInterval);
            // return
            finalPage()
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

startBtn.addEventListener("click", function (){
    function questionCreation(){

        backgroundClear();
    
        // append first 2 divs
        questionSect.appendChild(questionNum);
        questionSect.appendChild(answerBlock);

        // append h1 into question div
        questionNum.appendChild(questionText);
    
        // append answer and response to block
        answerBlock.appendChild(multiChoice);
        answerBlock.appendChild(answerResp);

        // append choices under multichoice div
        multiChoice.appendChild(choiceA);
        multiChoice.appendChild(choiceB);
        multiChoice.appendChild(choiceC);
        multiChoice.appendChild(choiceD);

        // append response p
        answerResp.appendChild(corrIncNote);
    };
    questionCreation()
})

// create final page

function finalPage(){
    // mainpage still clear
    backgroundClear();
    // question section clear
    questionClear();
    function createFinal(){
        // append section
        finalSect.appendChild(doneBlock);
        doneBlock.className=("doneBlock");
        // add class and append divs
        doneBlock.appendChild(doneMsgBlock);
        doneBlock.appendChild(scoreBlock);
        doneBlock.appendChild(scoreSub);
        // add text and append div child elements
        // div 1
        doneMsg.textContent= "All Done!"
        doneMsg.className =("doneMsg");
        doneMsgBlock.append(doneMsg);
        // div2
        scoreMsg.textContent= "Final Score is 'Placholder for final'";
        scoreMsg.className = ("scoreMsg");
        scoreBlock.appendChild(scoreMsg);
        // div 3
        scoreSub.className=("scoresave");
        initialP.className=("initials");
        initialP.textContent="Initials";
        scoreSub.appendChild(initialP);
        scoreInp.textContent = "Initials";
        scoreInp.className = ("scoreInp");
        scoreSub.appendChild(scoreInp);
        submitFinal.className = "submitBtn"
        submitFinal.innerHTML=("Save");
        scoreSub.appendChild(submitFinal);
    };
    createFinal();
};



// function to save scores, track high score, add initials to save
// button to go back to start/landing page to start over
