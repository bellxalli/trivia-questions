window.onload = function()
{
    const questions = [
        {
            question: "What is the biggest sauropod?",
            answerCorrect: "Argentinosaurus",
            answer1: "Blue Whale",
            answer2: "Gignanototsarus"
        },
        {
            question: "What was the first implemented coding language?",
            answerCorrect: "Plankalkül",
            answer1: "Autocode",
            answer2: "Fortran"
        },
        {
            question: "What is the biggest bug right now?",
            answer1: "My Coding",
            answerCorrect: "Giant Weta",
            answer2: "The Common Cold"
        },
        {
            question: "How many islands in the world?",
            answerCorrect: "670,000",
            answer1: "660,000",
            answer1: "50,000"
        },
        {
            question: "When was the first video game created?",
            answerCorrect: "1958",
            answer1: "1972",
            answer2: "1966"
        }        
    ]
    
    const beginButton = document.getElementById("beginButton");
    beginButton.onclick = () =>
    {
        let randomNum = Math.floor(Math.random() * (questions.length-1)) + 1;
        //use randomNum to select a question randomly from question array

        const questionArea = document.querySelector("#questionArea");
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