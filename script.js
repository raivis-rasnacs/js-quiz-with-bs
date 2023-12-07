jautajums1 = {
    "jautajums":"Kura ir pirmā nedēļas diena?",
    "atbA":"Otrdiena",
    "atbB":"Trešdiena",
    "atbC":"Pirmdiena",
    "pareizaAtb":"Pirmdiena"
}

jautajums2 = {
    "jautajums":"Kādā krāsā ir sniegs?",
    "atbA":"Baltā",
    "atbB":"Zaļā",
    "atbC":"Oranžā",
    "pareizaAtb":"Baltā"
}

jautajums3 = {
    "jautajums":"Cik dienas ir garajā gadā?",
    "atbA":360,
    "atbB":365,
    "atbC":366,
    "pareizaAtb":366
}

var questions = [jautajums1, jautajums2, jautajums3];

var questionCounter = 0;
var points = 0;

function nextQuestion() {
    document.getElementById("jautajums").innerHTML = questions[questionCounter]["jautajums"];

    document.getElementById("atbilde1").innerHTML = questions[questionCounter]["atbA"];
    document.getElementById("atbilde2").innerHTML = questions[questionCounter]["atbB"];
    document.getElementById("atbilde3").innerHTML = questions[questionCounter]["atbC"];
}

function checkAnswer(answer_text) {
    if (answer_text == questions[questionCounter]["pareizaAtb"]) {
        points++;
        if (questionCounter < questions.length - 1) {
            nextQuestion(questionCounter++);
        }
        else {
            showFinalResult();
        }
    }
    else {
        if (questionCounter < questions.length - 1) {
            nextQuestion(questionCounter++);
        }
        else {
            showFinalResult();
    }
}
}

function showFinalResult() {
    var buttons = document.getElementsByClassName("answer-button");
    for (var button of buttons) {
        button.disabled = true;
    }
    alert(`Pareizi atbildēji uz ${points} jautājumiem no ${questions.length}`);

    document.getElementById("newQuizButton").hidden = false;
}

function newQuiz(newQuizButton) {
    questionCounter = 0;
    nextQuestion();
    var buttons = document.getElementsByClassName("answer-button");
    for (var button of buttons) {
        button.disabled = false;
    }
    newQuizButton.hidden = true;
}

nextQuestion();