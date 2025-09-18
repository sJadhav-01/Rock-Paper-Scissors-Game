let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = () => {
    console.log('Game was Draw');
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = '#081b31';
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = 'green';
        userScorePara.innerText = userScore;
    } else {
        compScore++;
        console.log("You lose.")
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = 'red';
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log('user choice = ', userChoice);
    // grnerate computer choice
    const compChoice = genCompChoice();
    console.log('computer choice = ', compChoice);

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice == 'rock') {
            //compChoice -> paper, scissors
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
                //compChoice -> rock, scissors
                userWin = compChoice === 'scissors' ? false : true;
        } else {// userchoice === 'scissors
            //compChoice -> rock, paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    } 
}



choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        //console.log('choice was clicked', userChoice)
        playGame(userChoice);
    })    
});
