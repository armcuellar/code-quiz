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
var counter = 30;


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

    var countdown = function () {
        counter--;
        timerEl.textContent = counter;
        if (counter <= 0) {
            console.log("ran out of time")
            clearInterval(startTimer);
            timerEl.textContent = 0;
            console.log("Game Ended");
            clearMain();
        }
        else if (questionId >= questions.length) {
            clearInterval(startTimer);
            var score = timerEl.textContent;
            console.log("Game Ended");
            console.log("your score is");
            console.log(score);
            clearMain();
        };

    }
    var startTimer = setInterval(countdown, 500);
    questionHolder();

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
    choiceA.setAttribute("value", "choiceA");
    choiceA.className = "btn";
    questionContainerEl.appendChild(choiceA);

    var choiceB = document.createElement("button");
    choiceB.textContent = questions[i].choiceB;
    choiceB.setAttribute("value", "choiceB");
    choiceB.className = "btn";
    questionContainerEl.appendChild(choiceB);

    var choiceC = document.createElement("button");
    choiceC.textContent = questions[i].choiceC;
    choiceC.setAttribute("value", "choiceC");
    choiceC.className = "btn";
    questionContainerEl.appendChild(choiceC);

    var choiceD = document.createElement("button");
    choiceD.textContent = questions[i].choiceD;
    choiceD.setAttribute("value", "choiceD");
    choiceD.className = "btn";
    questionContainerEl.appendChild(choiceD);

    containerEl.appendChild(questionContainerEl);


    var questionDivEl = document.querySelector(".question-holder");

    questionDivEl.addEventListener("click", answerSelected);

}

var clearMain = function () {
    containerEl.innerHTML = "";
}

var answerSelected = function (event) {
    var targetEl = event.target;
    targetAttribute = targetEl.getAttribute("value");


    if (targetAttribute === questions[questionId].correctAnswer) {
        console.log("you clicked correct answer:");
        console.log(targetAttribute);
        console.log();
        questionId = questionId + 1;
    }
    else {
        console.log("wrong Answer");
        counter = counter - 10;
        questionId = questionId + 1;
    }

}


startButtonEl.addEventListener("click", startQuiz);

