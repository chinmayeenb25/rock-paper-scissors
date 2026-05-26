


let humanScore = 0;
let computerScore = 0;
let tie = 0;
function playRound(HumanChoice, computerChoice) {
    if (HumanChoice == 'rock') {
        if (computerChoice === 'rock') {
            return 'tie';
        }
        else if (computerChoice === 'paper') {
            return 'lose';
        }
        else if (computerChoice === 'scissors') {
            return 'win';
        }
    }
    if (HumanChoice == 'paper') {
        if (computerChoice === 'rock') {
            return 'win';
        }
        else if (computerChoice === 'paper') {
            return 'tie';
        }
        else if (computerChoice === 'scissors') {
            return 'lose';
        }
    }
    if (HumanChoice == 'scissors') {
        if (computerChoice === 'rock') {
            return 'lose';
        }
        else if (computerChoice === 'paper') {
            return 'win';
        }
        else if (computerChoice === 'scissors') {
            return 'tie';
        }
    }
}
function getComputerChoice() {
    let n = Math.random();
    if (n > 0 && n <= 1 / 3) {
        return 'rock';
    }
    else if (n > 1 / 3 && n <= 2 / 3) {
        return 'paper';
    }
    else if (n > 2 / 3 && n < 1) {
        return 'scissors';
    }
}





const button1 = document.querySelector("#rock-button");
button1.addEventListener("click", () => { playGame('rock') });
const button2 = document.querySelector("#paper-button");
button2.addEventListener("click", () => { playGame('paper') });
const button3 = document.querySelector("#scissors-button");
button3.addEventListener("click", () => playGame('scissors'));

function playGame(HumanChoice) {
    if (humanScore == 3 || computerScore == 3) {
        return;
    }
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
     document.querySelector('.js-moves').innerHTML =  `You 
      <img src= "images/${HumanChoice}.png"
       class ="move-icon">
      <img src="images/${computerChoice}.png"
       class="move-icon">
      Computer`;



    let result = playRound(HumanChoice, computerChoice);
    console.log(result);
    if (result === 'win') {
        humanScore += 1;
    }
    if (result === 'lose') {
        computerScore += 1;
    }
    if (result === 'tie') {
        tie += 1;
    }
    const points1 = document.querySelector("#scores1");
    points1.textContent = `Your Score ${humanScore}`;
    const points2 = document.querySelector("#scores2");
    points2.textContent = `Computer Score ${computerScore}`;
    const points3 = document.querySelector("#scores3");
    points3.textContent = `Ties ${tie}`;
    console.log(humanScore);
    console.log(computerScore);
    results = document.querySelector("#result");

    if (humanScore === 3) {

        results.textContent = "You Won!";
    }
    else if (computerScore == 3) {
        results.textContent = "Computer Won ";
    }
}

const resetButton =document.querySelector(".reset-btn");
resetButton.addEventListener("click",()=>{
    humanScore=0;
    computerScore=0;
    tie=0;
     document.querySelector("#scores1").textContent = `Your Score 0`;
     document.querySelector("#scores2").textContent = `Computer Score 0`;
     document.querySelector("#scores3").textContent = `Ties 0`;
     

    
}
)

