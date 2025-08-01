function checkAnswer(){
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value
    if(userAnswer === correctAnswer){
        const feedback = document.getElementById("feedback");
        feedback.textContent = "Correct! Well done.";
    }
    elif(userAnswer !== correctAnswer){
        feedback.textContent = "That's incorrect. Try again!";
    };
};
