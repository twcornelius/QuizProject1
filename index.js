var countDown;
var timerInterval;
var arrayOfQuesitons= [];
var gameScore =0;
const timePenalty = 30; //time in seconds
const maxTime = 5 * 60; //time is in seconds
function setCountDownTimer() {
    countDownTimer = maxTime;
    console.log("countDownTImer: ", countDownTimer);
}
//when the person clicks the begin button the timer starts
//start time
function startTimer() {
timerInterval = setInterval(updateTimer, 1000);
console.log("startTimer: ", timerInterval);

}
 function updateTimer() {
     console.log("updateTimer: begun");
    countDownTimer--;
    console.log("updateTimer: countDownTimer");
    showTimer();
 }

 function presentTimer() {
     let currentTime =document.getElementById('timer');
     currentTime.innerText = CountDownTimer;
     console.log("presentTimer: currentTime", currentTime);
 }
 
 function showScoreBoard () {
     let scoreBoard =document.getElementById('score-board');
     console.log("showScoreBoard: scoreBoard", scoreBoard);
     //scoreBoard.classList.toggle('hide', false);
     scoreBoard.classList.remove ('hide');

 }

 function showScore() {
     let currentScore =document.getElementById('Score');
     currentScore.innerText =gameScore;
     console.log("showScore: currentScore", currentScore);

 }

 function hideGreeting() {
    let greeting =document.getElementById('greeting');
    console.log("hideGreeeting: greeting", greeting);
    //scoreBoard.classList.toggle('hide', false);
    greeting.classList.add ('hide');
 
 }
//questions is asked
function SetupQuestions () {
    console.log("SetupQuestions started");
let question1 = {
   id: "quest0",
   question: "To select elements with a specific class:",
   answer1: "write a semicolon (;) character, followed by the class",
   answer2: "write a period (.) character, followed by the class name.",
   answer3: "write a period (.) character",
   correctAnswer

};

let question2 = {
    id: "quest1",
    question: "In CSS, a color can be specified by using a predic:",
    answer1: "yes",
    answer2: "No",
    answer3:null,
    answer4:null,
    correctAnswer: 1


};

arrayOfQuesitons.push(question1);
arrayOfQuesitons.push(question2);

console.log("SetupQuestions arrayOfQuestions: ", arrayOfQuestions);

}

function getQuestion(questionId) {
    console.log('getQuestion questionId', questionId);
    let found = false;

    for(let i =0; i<arrayOfQuesitons.length; i++) {
    if(questionId == arrayOfQuesitons[i].id) {
        PrepareQuestionandAnswers(i);
    }

    }

}

function PrepareQuestionandAnswers(questionindex) {
    console.log('prepareQuestionAndAnswer');
 let questionSection = document.getElementId('questions');
 let  newQuestion =document.createElement('div');
 newQuestion.id = arrayOfQuesitons[questionindex].id;
 newQuestion.innerText = arrayOfQuesitons[questionindex].question;
 newQuestion.classList.add('question');
 
 let qSpan = document.createElement('span');
 qSpan.innerText = arrayOfQuesitons[questionIndex].question;
 newQuestion.appendChild(qSpan)


 if(arrayOfQuesitons[questionindex].answer1)  {
     let answer= document.createElement('div');

     rdoBtn.id = `${arrayOfQuesitons[questionIndex].id}_answer1`;
     rdoBtn.setAttribute('type', 'radio');
     rdoBtn.value =1
     rdoBtn.classList.add('answer');
     rdoBtn.classList.add9(`{$arrayOfQuesitons[questionIndex].id}`);
     rdoBtn.name =arrayOfQuesitons[questionIndex].id;
     
     label.innerText -



     answer.innerText = arrayOfQuestions[questionIndex].answer1;
     answer.classList.add('answer');
     answer.id = `${arrayOfQuesitons[questionindex].id}_answer1`;
     questionSection.appendChild(answer);

 }
 
if(arrayOfQuesitons[questionindex].answer2)  {
    let answer= document.createElement('div');
    answer.innerText = arrayOfQuestions[questionIndex].answer2;
    answer.classList.add('answer');
    answer.id = `${arrayOfQuesitons[questionindex].id}_answer2`;
    questionSection.appendChild(answer);

    console.log('prepareQuestionAndAnswers answer', answer);
}


 
 
 questionSection.appendChild(newQuestion);
 
}



//if question is incorrect time penalty
//if answer is correct show points and then go to the next question
//Once all questions have been answered give options
//once all questions have been answerd give options to save score
//If user chooses to save score show the scoreboard


function doGame() {
    setCountDownTimer();
    startTimer();
    hideGreeting();
    SetupQuestions
    showScoreBoard();
    presentTimer();
    getQuestion('quest0');
     }

     console.log('prepareQuestionAndAnswers newQuestion', newQuestion
     )