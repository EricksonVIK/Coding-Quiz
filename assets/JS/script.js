// Variables

// View high scores
var highScoreBtn = document.querySelector("#highScoreBtn");
highScoreBtn.addEventListener("click", displayHighScores);

var endScore = JSON.parse(localStorage.getItem("scores")) || [];


// main page
var mainPage = document.querySelector("#landing");

var timeLeft = 30;
var timedInterval;
var startBtn = document.querySelector("#goButton");
// var corrNote = document.createElement("button");
// corrNote.innerHTML = ""

var questionTracking = 0;

// selecting timer parent "div"
var timerDiv = document.getElementById("timer");
// creating timer "p"
var timerClock = document.createElement("p");
// add timer page
timerDiv.appendChild(timerClock);

// timerDiv.appendChild(timerClock);
// aiming on sections
var questionSect = document.querySelector("#question");
var finalSect = document.querySelector("#finalpage");

// QUESTION BLOCK ELEMENTS
// create 2 divs for text and question section
var questionNum = document.createElement("div");
var answerBlock = document.createElement("div");
answerBlock.className = ("answerBlock"); 

// create h1 - question text
var questionText = document.createElement("h1");

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
var choiceB = document.createElement("button");
choiceB.className = ("choiceB");
var choiceB = document.createElement("button");
choiceB.className = ("choiceB");
var choiceC = document.createElement("button");
choiceC.className = ("choiceC");
var choiceD = document.createElement("button");
choiceD.className = ("choiceD");
// create response p for question
var corrNote = document.createElement("p");
corrNote.className=("response");


// Final page elements
// Section creation
var doneBlock = document.createElement("section");
doneBlock.className=("doneBlock");

// done message div and h1
var doneMsgBlock = document.createElement("div");
var doneMsg = document.createElement("h1");
doneMsg.className =("doneMsg");

// score message div and h1
var scoreBlock=document.createElement("div");
var scoreMsg = document.createElement("h1");
scoreMsg.className = ("scoreMsg");

// final submit div with input and save button
var scoreSub = document.createElement("div");
var scoreInp =  document.createElement("input");
var submitFinal = document.createElement("button"); 
var initialP = document.createElement("p");      
scoreSub.className=("scoresave");
initialP.className=("initials");
scoreInp.className = ("scoreInp");
submitFinal.className = "submitBtn";

// high score page dom's
var scorePageFinal = document.querySelector("#scorepage");

// Create scorepage div
var highScoreBlock = document.createElement("div");
highScoreBlock.className = ("highscoreblock")

// Create highscoreblock divs x 3
var highScoreMsg = document.createElement("div");
highScoreMsg.className = ("highscoremsg")
var highScoreList = document.createElement("div");
highScoreList.className = ("highscorelist")
var highScoreBtns = document.createElement("div");
highScoreBtns.className = ("highScoreBtns");

// Create message hi
var highScore = document.createElement("h1");
highScore.className = ("highscore")

// Create Div (placeholder for high score recall) - Check taskmaster for code
// may be able to delete this dom with new foreach loop
// var highScores = document.createElement ("li");
// highScores.className = ("highscores")

// create 2 buttons - go back - clear high score
var goBackBtn = document.createElement("button");
goBackBtn.className = ("BackBtn");
var clearScoreBtn = document.createElement("button")




function backgroundClear(){
    mainPage.style.height = "1px";
    mainPage.style.visibility="hidden";
};

function questionClear(){
    questionSect.style.height = "1px";
    questionSect.style.visibility="hidden";
};

function finalPageClear(){
    finalSect.style.height = "1px";
    finalSect.style.visibility ="hidden";
}




// timerClock.textContent = (countdown());
startBtn.addEventListener("click", function (){
    
    timedInterval = setInterval(function (){
        if (timeLeft > 1 ){
            timerClock.innerHTML = timeLeft + " seconds remaining ";
        } else if (timeLeft === 1) {
            timerClock.innerHTML = timeLeft + " second remaining ";
        } else {
            // go to final page
            // console.log('hit')
            timerClock.innerHTML = "";
            alert("Times Up!")
            clearInterval(timedInterval);
            // return
            finalPage()
        };
        timeLeft --;
    }, 1000);

});
var numberCorrect =0;
var numberIncorrect =0;
 var finalScore=0;
var buzz = new Audio("./assets/sounds/zapsplat_multimedia_game_show_buzzer_002_27374.mp3");
var ding = new Audio("./assets/sounds/zapsplat_multimedia_correct_ping_tone_001_68778.mp3")

// var correctRes = document.(".response").textContent=("Correct!");
// var incorrectRes = document.querySelector(".response").textContent=("Incorrect!");

// function corrResponse (){
//     // document.querySelector(".response").hidden = false;
//     // document.querySelector(".response").style.visibilty = "visible";
//     document.querySelector(".response").innerHTML =("Correct");
// };

// function to click high score box - prompt to call the saved data in alert or prompt
function buttonCheck (){
    console.log(this.textContent);
    if (this.textContent === questionsArr[questionTracking].correctAnswer){
        numberCorrect += 10;
        ding.play();
        // console.log(numberCorrect);
        // var correctResponse = document.createElement("p");
        // correctResponse.textContent=("Correct!")
        // answerResp.appenChild(correctResponse);
        document.querySelector(".response").textContent="Correct!"
    } else {
        numberIncorrect ++;
        buzz.play();
        // subtract 5 seconds for incorrect answer
        timeLeft = timeLeft -= 5;
        // console.log(timeLeft)
        document.querySelector(".response").textContent="Incorrect!"

    }
    questionTracking += 1
    if (questionTracking<= 4){
        questionCreation();
    } else {
        // saveScores();
        finalPage();
    }
    var finalScore= (numberCorrect+timeLeft);
    console.log("this is finalScore", finalScore);
}

// QUESTION Create Block
// var questionIndex = [];

// questionsArr[questionIndex]

var questionsArr = [
    {
        question: "Boolean Data is a ______ type of data?",
        answers: [
            "True or False", 
            "Undefined", 
            "Textual Data", 
            "None of the Above"],
        correctAnswer: "True or False" 
    },
    {
        question: "How do you create a comment in code?",
        answers: ["CTRL+D", "{}", "$$", "CTRL+/"],
        correctAnswer: "CTRL+/" 
    },
    {
        question: "In Visual Studio, CTR + J will ____?",
        answers: ["Open Editor", "Close Editor", "Open a Terminal", "Switch File Screens"],
        correctAnswer: "Open a Terminal" 
    },
    {
        question: "How do you create a folder with git?",
        answers: ["ls", "git branch", "touch", "mkdir"],
        correctAnswer: "mkdir" 
    },
    {
        question: "Which one below is not an example of a comparison operator?",
        answers: ["!=", "||", ">", "==="],
        correctAnswer: "||" 
    },
];



// question #1
// select the section
// add data attribute to question

startBtn.addEventListener("click", questionCreation)

function questionCreation(){

    backgroundClear();


    document.getElementById("question").innerHTML=""

    //create h1 - question text
    questionText.textContent = questionsArr[questionTracking].question;


    //create text and assign buttons
    choiceA.textContent = questionsArr[questionTracking].answers[0];

    choiceB.textContent = questionsArr[questionTracking].answers[1];

    choiceC.textContent = questionsArr[questionTracking].answers[2];

    choiceD.textContent = questionsArr[questionTracking].answers[3];

    // create response p -- put outside of the function for buttonCheck to see
    // corrNote.style.visibility="hidden";

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
    document.querySelector(".choiceA").addEventListener("click", buttonCheck)
    document.querySelector(".choiceB").addEventListener("click", buttonCheck)
    document.querySelector(".choiceC").addEventListener("click", buttonCheck)
    document.querySelector(".choiceD").addEventListener("click", buttonCheck)

    // append response p
    answerResp.appendChild(corrNote);

};

// create final page

function finalPage(){
    // mainpage still clear
    backgroundClear();
    // question section clear
    questionClear();
    // check if clearing the parenthesis removes timer
    document.getElementById("timer").display="none";
    clearInterval(timedInterval);
    function createFinal(){
        // append section
        finalSect.appendChild(doneBlock);
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
        scoreMsg.textContent= "Final Score is " + (numberCorrect+timeLeft);
        // scoreMsg.className = ("scoreMsg");
        scoreBlock.appendChild(scoreMsg);
        // div 3
        // scoreSub.className=("scoresave");
        // initialP.className=("initials");
        initialP.textContent="Initials";
        scoreSub.appendChild(initialP);
        scoreInp.textContent = "Initials";
        // scoreInp.className = ("scoreInp");
        scoreSub.appendChild(scoreInp);
        // submitFinal.className = "submitBtn"
        submitFinal.innerHTML=("Save");
        scoreSub.appendChild(submitFinal);

    };
    createFinal();
    document.querySelector("#timer").visibility="hidden"
    submitFinal.addEventListener("click", saveScores);

};
// attempting to add the alert for high score
if (finalScore.score > endScore.score){
    localStorage.setItem("highscore", score.score);
    localStorage.setItem("name", score.name);
    alert(score.name + " now has a new high score " + score.name + " ! ");
};

function createScorePage(){
    backgroundClear();
    questionClear();
    finalPageClear();
    // if (finalScore.score > endScore.score){
    //     localStorage.setItem("highscore", score.score);
    //     localStorage.setItem("name", score.name);
    //     alert(score.name + " now has a new high score " + score.name + " ! ");
    // };
    // append Parent div highScoreBlock
    scorePageFinal.appendChild(highScoreBlock);

    // append the 3 divs into parent block
    highScoreBlock.appendChild(highScoreMsg);
    highScoreBlock.appendChild(highScoreList);
    highScoreBlock.appendChild(highScoreBtns);

    // append h1 into highscoremsg
    highScore.textContent="HIGH SCORES";

    // append the buttons into highScoreBtns
    goBackBtn.textContent ="GoBack";
    highScoreBtns.appendChild(goBackBtn);
    clearScoreBtn.textContent = "Clear High Scores";
    highScoreBtns.appendChild(clearScoreBtn);
}

// clears local storage
clearScoreBtn.addEventListener("click", clearData);

function clearData() {
    window.localStorage.clear();
}
// create high score page
submitFinal.addEventListener("click", createScorePage);

// reload page function/start over
goBackBtn.addEventListener("click", function (){
    location.reload();
});


// possible saved score function
var saveScores = function(){

    var answersArr = JSON.parse(localStorage.getItem('scores')) || [];

    answersArr.push({
        name: scoreInp.value.trim(),
        score: numberCorrect+timeLeft,
    });

    localStorage.setItem("scores", JSON.stringify(answersArr));
};
// possible load score function
var loadScores = function(){
    var savedScores = JSON.parse(localStorage.getItem("scores")) || [];
    if (savedScores === null){
        var savedScores = [];
        return false;
    }
};



// retrieve and create high score list from local storage
function displayHighScores(){
    // retrieve from local storage
    var endScores = JSON.parse(localStorage.getItem("scores")) || [];
    // descending list
    endScores.sort(function(a,b){
        return b.score-a.score;
    });
    endScores.forEach(function(score){
        var scoreList=document.createElement("li");
        scoreList.innerHTML=score.name + "  ---  " + score.score;

        highScoreList.appendChild(scoreList);
    });
    // createScorePage();
    // alerts displays the array, but no longer adds to score page
    alert(JSON.stringify(endScores.name + " ---- " + endScores.score));
};

