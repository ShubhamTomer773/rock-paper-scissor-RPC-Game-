let userScore = 0 ;
let compScore = 0;
let choices =  document.querySelectorAll(".choice");
 let msg = document.querySelector("#msg");
 let userScorePara = document.querySelector("#user-score");
 let compScorePara = document.querySelector("#comp-score");
let genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random()*3)
    return options[randIdx];
};
let drawGame =() => {
    console.log("game was draw.");
    msg.innerText = "GAme was Draw";
    msg.style.backgroundColor = "black";
};

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win!  your's ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You Lose. ${compChoice} beats your's ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
let playGame = (userChoice) => {
    console.log("user Choice = ",userChoice );
    let compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;

        }else if (userChoice === "paper"){
            userWin = compChoice === "Scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
      let userChoice = choice.getAttribute("Id");
     playGame(userChoice);
    });
});