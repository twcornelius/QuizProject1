var countDown;
var timerInterval;
var arrayOfQuesitons= [];
const maxTime = 5 * 60; //time is in seconds
function setCountDownTimer() {
    countDownTimer = maxTime;
}
//when the person clicks the begin button the timer starts
//start time
 let timerInterval = setInterval(updateTimer, 1000);
 function updateTimer() {
    countDownTimer = countDownTimer - 1;
 }
//questions is asked
function SetupQuestions () {
let question1 = {
   id: "quest0",
   question: "To select elements with a specific class:",
   answer1: "write a semicolon (;) character, followed by the class"

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

function doQuestionForGame() {
    for(let i =0; i<arrayOfQuesitons.length; i++) {

    }

}

function showQuestion(questionindex) {
 let questionSection = document.getElementId('question');
 let  newQuestion =document.createElement('div');
 newQuestion.id = arrayOfQuesitons[questionindex].id;
 newQuestion.innerText = arrayOfQuesitons[questionindex].question;
 questionSection.appendChild(newQuestion);
 
}



//if question is incorrect time penalty
//if answer is correct show points and then go to the next question
//Once all questions have been answered give options
//once all questions have been answerd give options to save score
//If user chooses to save score show the scoreboard
