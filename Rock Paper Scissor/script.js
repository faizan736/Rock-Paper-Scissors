let userscore = 0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencomputerchoice =()=>{
    let options = ["rock","paper","scissors"];
    const randindx = Math.floor(Math.random()*3);
    //to generate random number b/w 1-3 if we want from 1-10 mul with 10
    return options[randindx];
}

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const showwinner =(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        console.log("You win")
        msg.innerText = `You win ! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscorepara.innerText = userscore;
       
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You lose")
        msg.innerText = `You lose ! Comp  ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        
       
    }
};
const drawgame =()=>{
    console.log("Game was draw ");
    msg.innerText = "Game draw , Play again"
    msg.style.backgroundColor = "#081b31";
    
}
const playgame =(userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice = gencomputerchoice();
    console.log("comp choice =",compchoice);
    
    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
         userwin=compchoice ==="paper" ? false : true;
        }
        if(userchoice === "paper"){
            userwin=compchoice ==="scisscors" ? false : true;
        }
        else{
            userwin=compchoice ==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userchoice);
        playgame(userchoice);
    })
})