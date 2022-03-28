// this function gets the high score information from local storage
function getResults() {
    let scores = JSON.parse(localStorage.getItem('highScore'));
    console.log(JSON.stringify(scores));
    let initialEl = document.createElement("li");
    initialEl.textContent = "Student: " + scores.initials;
    let scoreEl = document.createElement("li");
    scoreEl.textContent = "Score: " + scores.time;
    document.getElementById("hsList").append(initialEl);
    document.getElementById("hsList").append(scoreEl);
}
// run results function
getResults();