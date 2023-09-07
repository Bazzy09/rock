function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
  }
  
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return ("It's a draw!");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
      return ("You win! Rock beats scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return ("You win! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return ("You lose! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return ("You win! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return ("You lose!Rock beats scissors");
    }
  
  }

  function game(){  
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome")
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
       if(playerSelection, computerSelection== "player"){
        score++;
       }
       else if(playerSelection, computerSelection == "computer"){
        scoreComputer++;
       } 

    }
    console.log("Game over")
    if(scorePlayer > scoreComputer){
        console.log("player was the winner");
    }
    else if(scorePlayer < scoreComputer){
        console.log("computer is the winner");
    }
    else{
        console.log("we have a tie");
    }
 
  }

 game()  
  
 let computerSelection = getComputerChoice();
  let playerSelection = prompt("your selection");
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection));
