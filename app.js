let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorPara = document.querySelector("#user-score");
const compScorPara = document.querySelector("#comp-score");
// const btn = document.getElementById("#btn");

const genComputerChoice =() =>{
     const options = ["rock","paper","scissor"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
}


const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081B31";
}


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorPara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You Win! your ${userChoice} beats  ${compChoice}`;
        msg.style.backgroundColor = "green";
    } 
    else{
        compScore++;
        compScorPara.innerText =compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice =",compChoice);
    
    if(userChoice === compChoice)
        {
            drawGame();
        }
        else{
            let userWin = true;
            
            if(userChoice === "rock"){
                userWin = compChoice ==="paper"?false:true;
            }
            else if(userChoice==="paper"){
                userWin = compChoice ==="scissor"?false:true;
            }
            else{ 
               userWin = compChoice === "rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
        
}



choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    

    });
});

const reset = () =>{
    userScore = 0;
    compScore = 0;
    userScorPara.innerText = 0;
    compScorPara.innerText = 0;
    msg.innerText ="Play your move";
    msg.style.backgroundColor = "#081B31";
}


document.querySelector("#btn").addEventListener("click",reset);




