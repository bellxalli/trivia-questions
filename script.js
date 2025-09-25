window.onload = function()
{
    const questions = [
        {
            question: "What is the biggest sauropod?",
            answers: [
                { text: "Argentinosaurus", correct: true },
                { text: "Blue Whale", correct: false },
                { text: "Giganotosaurus", correct: false }
            ]
        },
        {
            question: "What was the first implemented coding language?",
            answers: [
                { text: "Plankalkül", correct: true },
                { text: "Autocode", correct: false },
                { text: "Fortran", correct: false }
            ]
        },
        {
            question: "What is the biggest bug right now?",
            answers: [
                { text: "Giant Weta", correct: true },
                { text: "My coding", correct: false },
                { text: "The Common Cold", correct: false }
            ]
        },
        {
            question: "How many islands in the world?",
            answers: [
                { text: "670,000", correct: true },
                { text: "660,000", correct: false },
                { text: "50,000", correct: false }
            ]
        },
        {
            question: "When was the first video game created?",
            answers: [
                { text: "1958", correct: true },
                { text: "1972", correct: false },
                { text: "1996", correct: false }
            ]
        }        
    ]
    
    let score = 0;

    const nextButton = document.getElementById("nextButton");
    const scoreDisplay = document.getElementById("score");
    const beginButton = document.getElementById("beginButton");
    const questionArea = document.getElementById("questionArea");

    beginButton.onclick = () => 
    {
        beginButton.disabled = true;
        loadQuestion();
    }

    nextButton.onclick = () => 
    {
        nextButton.style.display = "none";
        loadQuestion();
    }

    function loadQuestion()
    {
        
        
        questionArea.innerHTML = ""; //clear area of prev question

        const randomNum = Math.floor(Math.random() * (questions.length-1));
        //use randomNum to select a question randomly from question array
            //could also add a shuffle function?
        const newQuestion = questions[randomNum];

        const question = document.createElement("h2");
        question.innerText = newQuestion.question;
        questionArea.appendChild(question);

        const shuffledAnswers = shuffle([...newQuestion.answers]);

        shuffledAnswers.forEach(element => {
            const button = document.createElement("button");
            button.innerText = element.text;
            button.className = "answer";

            button.onclick = () =>
            {
                if(element.correct === true)
                {
                    button.style.backgroundColor = "green";
                    alert("Correct!!!");
                    score++;
                    updateScore();
                }
                else
                {
                    button.style.backgroundColor = "red";
                    alert("Incorrect :(");
                }
                const allButtons = document.querySelectorAll(".answer");
                allButtons.forEach(e => e.disabled = true);
            }
            questionArea.appendChild(button);
            nextButton.style.display = "inline-block";

        });
    }

    function updateScore() 
    {
        scoreDisplay.innerText = `Current Score: ${score}`;
    }

    function shuffle(array) 
    {
        return array.sort(() => Math.random() - 0.5);
    }
   

}