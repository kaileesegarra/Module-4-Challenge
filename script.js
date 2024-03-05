// Select start button
var startButtonE1 = document.querySelector('.startButton');
var quizContainer = document.querySelector('.quiz-container');
var questionElement = document.getElementById('question');
var answerButtons = document.querySelectorAll('.answer');
var timerDisplay = document.getElementById('timer');
var currentQuestion;
var currentQuestionIndex = 0;
var timer; 
var timerCount = 60; //60 seconds for the quiz
var score = 0; // A variable to track the score

var questions = [
    {
        question: "Which of the following is not considered a primitive type?",
        answers: ["Boolean", "Element", "String", "Number"],
        correctAnswer: "Object"    
    },
    {
        question: "What JavaScript keyword declares variables?",
        answers: ["id", "var", "char", "dec"],
        correctAnswer: "var"   
    }
];

//Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//Function to display question
function displayQuestion() {
    currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
// Shuffle answers
    var shuffledAnswers = shuffleArray(currentQuestion.answers.slice());
    
    for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = shuffledAnswers[i];
}



function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerDisplay.textContent = timerCount;

        // Tests if time runs out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            console.log("NO more time left! This is the end of quiz.");
            endGame();
            // End of quiz
        }
    }, 1000);
}

function startGame() {
    startTimer ();
    console.log("Quiz started:");
    startButtonE1.classList.add('hide');
    quizContainer.classList.remove('hide'); 
    timerDisplay.classList.remove('hidden');
    displayQuestion();
}
// Attach event listener to Start button element

startButtonE1.addEventListener("click", function() {
    startGame();
    //Call startGame function
    console.log("Start button clicked"); 
    // Testing event listener 
});
