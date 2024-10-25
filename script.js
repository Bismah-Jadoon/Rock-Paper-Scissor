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
            let msg = msj.innerText = (`You win by choosing ${userChoice} from computer ${computer}`);
            user++;
            userScore.innerText = user;
            msg.style.backgroundColor = "green";  
        }
        else {
           msg = msj.innerText = (`You lose by choosing ${userChoice} from computer ${computer}`);
           comp++;
           CompScore.innerText = comp;
           msg.style.backgroundColor = "red";           
        }
         
    }

    if(userChoice === computer){
        msg = msj.innerText = "Match Withdraw";

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




