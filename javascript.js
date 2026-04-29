console.log("Hello World!");


function getComputerChoice(){
    const computerChoice=Math.floor(Math.random()*3);
    if(computerChoice===0){
        return "rock";
    }else if(computerChoice===1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice= prompt("What is your choice?"+" "+"Rock,Paper or Scissors")
    
    return humanChoice.toLowerCase();
}



function playGame(){

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        console.log("It's a Tie!");
        return "tie";
    } else if(humanChoice==="rock"&&computerChoice==="scissors"){
        console.log("You Win!Rock beats scissors");
        return "human";
    } else if(humanChoice==="paper"&&computerChoice==="rock"){
        console.log("You Win!Paper beats rock");
        return "human";
    } else if(humanChoice==="scissors"&&computerChoice==="paper"){
        console.log("You Win!Scissors beats paper");
        return "human";
    } else{
        console.log("You Lose!Try again");
        return "computer";
    }
}
for(let i=0;i<5;i++){
const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();
const result=playRound(humanSelection,computerSelection);

if(result==="human"){
    humanScore++;
}else if(result==="computer"){
    computerScore++;
}
}
console.log("Final Score:", humanScore, computerScore);

if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
} else {
    console.log("The game is a tie!");
}
}
playGame();

