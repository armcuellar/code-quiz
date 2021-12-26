// create arrray with questions and answers
// set timer
// change main content with the questions
// once questions anwered move to next question
// when quiz finished go to score page
// after initals submitted go to high score page
// save initals and high score
// when timer hits 0 or all questions answered end quiz
// add style
var startButtonEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var containerEl = document.querySelector("#container")
var questionId = 0;


var questions = [
    {
        question: "question 1",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "choiceB"
    },
    {
        question: "question 2",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "choiceA"
    },
    {
        question: "question 3",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "choiceC"
    },
    {
        question: "questin 4",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAnswer: "choiceD"
    },
    {
        question: "question 5",
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

    var i = 0;
    // while (i < questions.length) {

    // questionHolder();
    //     i = nextQuestion;
    //     console.log(nextQuestion)
    questionHolder();
    // }

}
var questionHolder = function () {
    var i = questionId;

    clearMain();


    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "question-holder";

    var questionEl = document.createElement("h2");
    questionEl.textContent = questions[i].question;
    questionContainerEl.appendChild(questionEl);

    var choiceA = document.createElement("button");
    choiceA.textContent = questions[i].choiceA;
    // choiceA.setAttribute("value", "choiceA")
    questionContainerEl.appendChild(choiceA);

    var choiceB = document.createElement("button");
    choiceB.textContent = questions[i].choiceB;
    // choiceB.setAttribute("value", "choiceB")
    questionContainerEl.appendChild(choiceB);

    var choiceC = document.createElement("button");
    choiceC.textContent = questions[i].choiceC;
    questionContainerEl.appendChild(choiceC);

    var choiceD = document.createElement("button");
    choiceD.textContent = questions[i].choiceD;
    questionContainerEl.appendChild(choiceD);

    containerEl.appendChild(questionContainerEl);

    questionId = i + 1;

    // console.log(choiceA.value);

    console.log(questions[i].correctAnswer);

    var questionDivEl = document.querySelector(".question-holder")

    questionDivEl.addEventListener("click", questionHolder);

    // choiceA.addEventListener("click", questionHolder());

}

var clearMain = function () {
    containerEl.innerHTML = "";
}

startButtonEl.addEventListener("click", startQuiz);
// containerEl.addEventListener("click", questionHolder);
