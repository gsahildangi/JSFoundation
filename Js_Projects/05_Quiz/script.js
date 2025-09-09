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
   
    nextBtn.addEventListener('click' , () => {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
           showQuestion();
        }else {
        resultContainer.classList.remove('hidden');
        questionContainer.classList.add('hidden') ;
        showResult();
        }
    })
               
    restartBtn.addEventListener('click' , () => {
        currentQuestionIndex = 0;
        score = 0;
       resultContainer.classList.add('hidden');
       startQuiz();

    })

     function startQuiz() {
       startBtn.classList.add('hidden');
       resultContainer.classList.add('hidden');
       questionContainer.classList.remove('hidden');
       showQuestion() // now we are calling a function and then this function will loop through all the questions.
     }      
     
     function showQuestion(){
        nextBtn.classList.add('hidden') // making sure that after clicking the start button once the question start comming before clicking the answer 
                                   // this next butto should be hidden then after selecting the answere we will show the next btn
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = ""; // to cleaar the previous question.
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            // li.addEventListener('click' , selectedAns(choice))// now this is a js problem now it will call te function right away
                              // and we want it to call it on click event so we face this in react also .
          //soln:
           li.addEventListener('click' , () => selectedAns(choice));
           choicesList.appendChild(li);

        })
     }

     function selectedAns(choice){
        //    console.log(choice);
        //    console.log(questions[currentQuestionIndex]);
        const correctAnswer = questions[currentQuestionIndex].answer ;
        if(choice === correctAnswer ) {
            score++;
        }
        nextBtn.classList.remove('hidden');
     }
       
    function showResult(){
        console.log(score);
        scoreDisplay.innerHTML = `${score} out of ${questions.length} `;
        
    } 
});