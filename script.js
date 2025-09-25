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
    
    const beginButton = document.getElementById("beginButton");
    const questionArea = document.getElementById("questionArea");

    beginButton.onclick = () =>
    {
        questionArea.innerHTML = ""; //clear area of prev question

        let randomNum = Math.floor(Math.random() * (questions.length-1));
        //use randomNum to select a question randomly from question array
            //could also add a shuffle function?

        const question = document.createElement("h2");
        question.innerHTML = questions[randomNum].question

        const answerCorrect = document.createElement("button");
        answerCorrect.className = "correct";
        answerCorrect.innerHTML = questions[randomNum].answerCorrect

        const answer1 = document.createElement("button");
        answer1.className = "incorrect";
        answer1.innerHTML = questions[randomNum].answer1

        const answer2 = document.createElement("button");
        answer2.className = "incorrect";
        answer2.innerHTML = questions[randomNum].answer2

        questionArea.appendChild(question);
        questionArea.appendChild(answer1);
        questionArea.appendChild(answer2);
        questionArea.appendChild(answerCorrect);

        // check if answer is correct from onlcick
        // use another function?
    }





    

}