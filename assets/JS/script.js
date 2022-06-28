// selecting timer parent "div"
var timerDiv = document.getElementById('timer');
// creating timer "p"
var timerClock = document.createElement("p");
timerClock.textContent = (countdown());
// adding the timer clock to the div
timerDiv.appendChild(timerClock);

var startButton = document.querySelector("#go-Button");

// why are these console logs null?
console.log(startButton);
console.dir(startButton);
startButton.addEventListener("click", countdown());


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

// countdown();
// function display for appended questions?

// variable question 1, ...