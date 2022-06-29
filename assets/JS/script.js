// Variables
// pageContent - main body id page-content
// timerDiv - div in header - timer
// timerClock - p under div in header
// 

var timeLeft = 5;
var timedInterval;
var startBtn = document.querySelector("#goButton");

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

// QUESTION Create Block
var questionIndex = 0;

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
        question: "some question here?",
        answers: ["m", "n", "o", "p"],
        correctAnswer: "d" 
    },
    {
        question: "some question here?",
        answers: ["q", "r", "s", "t"],
        correctAnswer: "a" 
    }
]



// question #1
// select the section
var questionSect = document.querySelector("#question");

// create h1 question block
var questionNum = document.createElement("h1");
questionNum.textContent=
    questionsArr.index= 0;


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



var questionIndex = 0;

// questionsArr[questionIndex]

var questionsArr = [
    {
        question: "some question here?",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "a" 
    },
    {
        question: "some question here?",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "a" 
    },
    {
        question: "some question here?",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "a" 
    }
]


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