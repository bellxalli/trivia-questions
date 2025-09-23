window.onload = function()
{
    const beginButton = document.getElementById("beginButton");
    beginButton.onclick = () =>
    {
        let randomNum = Math.floor(Math.random() * 4) + 1;
        //use randomNum to select a question randomly from question array
    }


    const questions = [
        {
            question: "What is the biggest sauropod?",
            answerA: "Argentinosaurus",
            answerB: "Blue Whale",
            answerC: "Gignanototsarus"
        },
        {
            question: "What was the first implemented coding language?",
            answerA: "Plankalkül",
            answerB: "Autocode",
            answerC: "Fortran"
        },
        {
            question: "What is the biggest bug right now?",
            answerA: "My Coding",
            answerB: "Giant Weta",
            answerC: "The Common Cold"
        },
        {
            question: "How many islands in the world?",
            answerA: "670,000",
            answerB: "660,000",
            answerC: "50,000"
        },
        {
            question: "When was the first video game created?",
            answerA: "1958",
            answerB: "1972",
            answerC: "1966"
        }        
    ]
    

}