let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
let msj = document.querySelector("#message");
let userScore = document.querySelector("#user");
let CompScore = document.querySelector("#comp");


let playGame = (userChoice) => {
    console.log("user choose " + userChoice);
    //computer choice
    let computer = CompChoice();
    console.log("Computer choice is " + computer);

    let showWin = (userWin) => {
        if(userWin === true){
            user++;
            userScore.innerText = user;
            let msg = msj.innerText = (`You win. your ${userChoice} beats ${computer}`);
            msg.style.backgroundColor = "green";  
        }
        else {
            comp++;
            CompScore.innerText = comp;
            msg = msj.innerText = (`You lost. computer ${computer} beats ${userChoice}`);
           msg.style.backgroundColor = "red";           
        }
         
    }

    if(userChoice === computer){
        msg = msj.innerText = "Match Withdraw";
        msg.style.backgroundColor = "#081b31";  
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
           userWin =  computer === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = computer === "scissors" ? false : true;
        }else{
            userWin = computer === "rock" ? false : true;
        }
        showWin(userWin);
    }
}

// computer choice function
let CompChoice = () => {
    let option = ["rock", "paper", "scissors"];
    let com = Math.floor(Math.random()* 3);
    return option[com];
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    });
});




