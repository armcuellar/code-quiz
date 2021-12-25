// create arrray with questions and answers
// set timer
// change main content with the questions
// once questions anwered move to next question
// when quiz finished go to score page
// after initals submitted go to high score page
// save initals and high score
// when timer hits 0 or all questions answered end quiz
var startButtonEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var questions = [
    {
        question: "something",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "choiceB"
    },
    {
        question: "something",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "choiceA"
    },
    {
        question: "something",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "choiceC"
    },
    {
        question: "something",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "choiceD"
    },
    {
        question: "something",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "choiceC"
    }
];


var startQuiz = function () {

    // counter is how much seconds it will take to complete questions
    var counter = 30;
    // this is the countdown function for timer
    var countdown = function () {
        counter--;
        timerEl.textContent = counter;
        if (counter === 0) {
            console.log("ran out of time")
            clearInterval(startTimer)
        };

    }
    var startTimer = setInterval(countdown, 500);
}

startButtonEl.addEventListener("click", startQuiz)
