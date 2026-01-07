let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScoreMsg=document.querySelector("#user-score");
let compScoreMsg=document.querySelector("#comp-score");

const drawGames=()=>{
    compScore++;
    userScore++;

    userScoreMsg.innerText=(userScore);
    compScoreMsg.innerHTML=(compScore);

         msg.innerText="The game is drawn";
         msg.style.backgroundColor="Green";
    }


const showWinner=(userWin, userChoice, compChoice)=>{
    if (userWin===true){
        userScore++;
        userScoreMsg.innerText=(userScore);
        msg.innerText=`You Won! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor="Blue";
    }
    else if(userWin===false){
        compScore++;
        compScoreMsg.innerText=(compScore);
        msg.innerText=(`You Loose! Computer ${compChoice} beats your ${userChoice}`);
         msg.style.backgroundColor="Red";
    }
}    

const playGames=(userChoice)=>{
    console.log("User Choice is:",userChoice);
    const compChoice=genCompchoice();
    console.log("Comp choice is:",compChoice);

    if(userChoice===compChoice){
        drawGames();
    }

    else{
         let userWin=true;

        if(userChoice==="rock"){
            userWin= compChoice==="paper"?false: true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin, userChoice, compChoice);


    }

}

choices.forEach((choice=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGames(userChoice);
    })
}))


const genCompchoice=()=>{
    const option=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return option[idx];
}

