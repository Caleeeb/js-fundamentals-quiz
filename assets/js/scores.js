function getResults() {
    let scores = JSON.parse(localstorage.get('1)'));
    scores.cort(function (a, b) {
        return b - a;
    })
}

scores.forEach(function (score) {
    element = createElement("li")
    element.textContent = score.toString();
    parentElement.append(element);
})
