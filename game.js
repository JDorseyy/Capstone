

function playGuessingGame() {
    let userChoice;
    let correctAnswer;
    correctAnswer = "purple";
    
    userChoice = prompt("Enter a color.");

    if( correctAnswer === userChoice ) {
        alert("YOU WIN!!!");
    } else {
        alert("TRY AGAIN!")
    }
}
guess.onclick = playGuessingGame;