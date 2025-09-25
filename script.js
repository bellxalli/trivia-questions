window.onload = function()
{
    const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false }
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Canberra", correct: true },
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Osmium", correct: false }
        ]
    },
    {
        question: "What year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1920", correct: false }
        ]
    },
    {
        question: "Which country invented pizza?",
        answers: [
            { text: "Italy", correct: true },
            { text: "France", correct: false },
            { text: "Greece", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "How many bones are in the human body?",
        answers: [
            { text: "206", correct: true },
            { text: "201", correct: false },
            { text: "210", correct: false }
        ]
    },
    {
        question: "Who is the author of 'Harry Potter'?",
        answers: [
            { text: "J.K. Rowling", correct: true },
            { text: "Suzanne Collins", correct: false },
            { text: "Stephen King", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Carbon Dioxide", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Won", correct: false },
            { text: "Renminbi", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false }
        ]
    },
    {
        question: "In what year did World War II end?",
        answers: [
            { text: "1945", correct: true },
            { text: "1940", correct: false },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "Which U.S. state is famous for Hollywood?",
        answers: [
            { text: "California", correct: true },
            { text: "New York", correct: false },
            { text: "Texas", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Diamond", correct: true },
            { text: "Steel", correct: false },
            { text: "Granite", correct: false }
        ]
    },
    {
        question: "How many planets are in our solar system?",
        answers: [
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "7", correct: false }
        ]
    },
    {
        question: "Who discovered gravity when an apple fell on his head?",
        answers: [
            { text: "Isaac Newton", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Galileo Galilei", correct: false }
        ]
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        answers: [
            { text: "Lion", correct: true },
            { text: "Tiger", correct: false },
            { text: "Elephant", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            { text: "Avocado", correct: true },
            { text: "Cucumber", correct: false },
            { text: "Zucchini", correct: false }
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [
            { text: "Saturn", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What language has the most native speakers worldwide?",
        answers: [
            { text: "Mandarin Chinese", correct: true },
            { text: "Spanish", correct: false },
            { text: "English", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Nile", correct: true },
            { text: "Amazon", correct: false },
            { text: "Yangtze", correct: false }
        ]
    },
    {
        question: "Which instrument has 88 keys?",
        answers: [
            { text: "Piano", correct: true },
            { text: "Harp", correct: false },
            { text: "Organ", correct: false }
        ]
    },
    {
        question: "What is the largest mammal?",
        answers: [
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "How many continents are there?",
        answers: [
            { text: "7", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false }
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