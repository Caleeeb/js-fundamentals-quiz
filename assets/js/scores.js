function getResults() {
    let scores = JSON.parse(localStorage.getItem('highScore'));
    console.log(JSON.stringify(scores));
    let initialEl = document.createElement("li");
    initialEl.textContent = "Student: " + scores.initials;
    let scoreEl = document.createElement("li");
    scoreEl.textContent = "Time: " + scores.time;
    document.getElementById("hsList").append(initialEl);
    document.getElementById("hsList").append(scoreEl);
}
getResults();