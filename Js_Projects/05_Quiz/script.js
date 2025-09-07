document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById("start-btn");
    const restartBtn = document.getElementById("restart-btn");
    const nextBtn = document.getElementById("next-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who Wrote 'Hamlet'?",
            choices: [
                "Charles Dickens",
                "Jane Austen",
                "William Shakespeare",
                "Mark Twain",
            ],
            answer: "William Shakespeare"

        }

    ];

     let currentQuestionIndex = 0;
     let score = 0;
     
    startBtn.addEventListener('click' , startQuiz) // Here usually we define the functanilaty right there but in this 
                                          //case we are saying that on click of startBtn execute this function. 
   
     function startQuiz() {
       startBtn.classList.add('hidden');
       resultContainer.classList.add('hidden');
       questionContainer.classList.remove('hidden');
       showQuestion() // now we are calling a function and then this function will loop through all the questions.
     }      
     
     function showQuestion(){
        nextBtn.classList.add('hidden') // making sure that after clicking the start button once the question start comming before clicking the answer 
                                   // this next butto should be hidden then after selecting the answere we will show the next btn
        
     

     }

});