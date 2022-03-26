// object for questions variable
const questions = {
    title: ["Commonly used data types do NOT include:", "The condition in an if / else statement is enclosed with ____.", "Arrays in JavaScript can be used to store ______.", "String values must be enclosed within ____ when being assigned to a variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"],
    answerChoices: [["string", "booleans", "alerts", "numbers"], ["quotes", "curly brackets", "parenthesis", "square brackets"], ["numbers and strings", "other arrays", "booleans", "all of the above"], ["commas", "curly brackets", "quotes", "parenthesis"], ["JavaScript", "terminal/bash", "for loops", "console.log"]],
    correctAnswer: ["alerts", "curly brackets", "all of the above", "quotes", "console.log"]
};

let index = 0;
let time = 75;

var startEl = document.querySelector(".startPage");

// start game button displays 'off' starting page and starts timer timer
document.getElementById("startButton").addEventListener("click", startThings);
function startThings() {
    goAway();
    generateQuestion();
}

//display off startPage 
function goAway() {
    startEl.style.display = "none";
}

// function to generate the questions to display
function generateQuestion() {
    const questionEl = document.createElement('div');
    questionEl.textContent = questions.title[index];

    for (let i = 0; i < 4; i++) {
        const choice = document.createElement('button');
        choice.textContent = questions.answerChoices[index][i];
        choice.setAttribute("value", questions.answerChoices[index][i]);
        questionEl.appendChild(choice);
    }
    document.getElementById("container").appendChild(questionEl);

    questionEl.addEventListener("click", function (event) {
        event.preventDefault();

        const userchoice = event.target.value;
        if (userchoice === questions.correctAnswer[index]) {
            index++;
            if (index === questions.length) {
                quizEnd();
            }
            generateQuestion();
        } else {
            time -= 15;
        }
    });

    function quizEnd() {
        // remove divs 
        // append end screen
    }

    function storeResults() {
        localstorage.setItem("1", score)
    }
}
