// object for questions variable
const questions = {
    title: ["Commonly used data types do NOT include:", "The condition in an if / else statement is enclosed with ____.", "Arrays in JavaScript can be used to store ______.", "String values must be enclosed within ____ when being assigned to a variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"],
    answerChoices: [["string", "booleans", "alerts", "numbers"], ["quotes", "curly brackets", "parenthesis", "square brackets"], ["numbers and strings", "other arrays", "booleans", "all of the above"], ["commas", "curly brackets", "quotes", "parenthesis"], ["JavaScript", "terminal/bash", "for loops", "console.log"]],
    correctAnswer: ["alerts", "curly brackets", "all of the above", "quotes", "console.log"]
};
// setting some base variables
let index = 0;
let time = 75;
// query selecting html elements for later DOM manipulation
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector(".startPage");

// start timer function 
function startTimer() {
    if (time >= 0) {
        timerEl.textContent = "Time: " + time;
        time = time - 1;
        myTimeout = setTimeout(startTimer, 1000);
    }
    if (time <= 0) {
        quizEnd();
    }
}

// stop timer
function stopTimer() {
    clearTimeout(myTimeout);
}


// start game button displays 'off' starting page and starts timer timer
document.getElementById("startButton").addEventListener("click", startThings);
function startThings() {
    goAway();
    generateQuestion();
    startTimer();
}

// display off startPage 
function goAway() {
    startEl.style.display = "none";
}

// function to generate the questions to display
function generateQuestion() {
    const questionEl = document.createElement('div');
    questionEl.className = "questions";
    questionEl.innerHTML = "<h1 class='title'>" + questions.title[index] + "</h1>";

    for (let i = 0; i < 4; i++) {
        const choiceEl = document.createElement('button');
        choiceEl.textContent = questions.answerChoices[index][i];
        choiceEl.setAttribute("value", questions.answerChoices[index][i]);
        questionEl.appendChild(choiceEl);
    }
    document.getElementById("container").appendChild(questionEl);

    questionEl.addEventListener("click", function (event) {
        event.preventDefault();

        const userchoice = event.target.value;
        if (userchoice === questions.correctAnswer[index]) {
            index++;
            if (index === questions.title.length) {
                //stop timer
                stopTimer();
                // remove questionEl 
                questionEl.style.display = "none";
                // bring up final page
                quizEnd();
                return;
            }
            document.getElementById("container").removeChild(questionEl);
            generateQuestion();
        } else {
            time -= 10;
        }
    });
}

function quizEnd(questionEl) {
    // append end screen
    if (time <= 0) {
        time = 0;
    }
    else {
        time = time + 1;
    }
    timerEl.textContent = "Time: " + time;
    let containerEl = document.getElementById("container");
    containerEl.innerHTML = "";
    const endEl = document.createElement("div");
    endEl.innerHTML = "<h1 class='title'> All done! <h1>" + "<p>Your final score is: </p>" + time + "<p>Enter your initials:</p>" + "<input id='userName' type='text'></input>" + "<button id='submitButton'>Submit</button>";
    document.getElementById("container").appendChild(endEl);
    document.getElementById('submitButton').addEventListener("click", (event) => { storeResults(event) });
}

function storeResults(event) {
    event.preventDefault();
    let initials = document.getElementById('userName').value;
    let score = {
        time,
        initials,
    }
    console.log(time);
    localStorage.setItem("highScore", JSON.stringify(score));
    document.location.reload()
}