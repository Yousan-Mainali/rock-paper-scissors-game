let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const drawGames=()=>{
        console.log("The game was drawn");
           msg.innerText="The game is drawn";
         msg.style.backgroundColor="Green";
    }


const showWinner=(userWin)=>{
    if (userWin===true){
        console.log("You won");
        msg.innerText="You Won";
        msg.style.backgroundColor="Blue";
    }
    else if(userWin===false){

        console.log("You lose");
        msg.innerText="You Loose";
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

        showWinner(userWin);


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

