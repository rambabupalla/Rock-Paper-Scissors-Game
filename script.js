
let uscore = 0;
let cscore = 0;

function play(userChoice){
    const choices = ['rock', 'paper', 'scissor'];
    const compChoice = choices[Math.floor(Math.random()*3)];

    let result ="";
    if(userChoice===compChoice){
        result = "It's a Draw!";
    }
    else if(
        (userChoice === 'rock' && compChoice === 'scissor') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissor' && compChoice === 'paper')
    ){
        result = "You Win!";
        uscore++;
    }
    else{
        result = "You Lose!"
        cscore++;
    }
    document.getElementById("uscore").innerText = `${uscore}`;
    document.getElementById("cscore").innerText = `${cscore}`;
    document.getElementById("resultTxt").innerText =`You chose ${userChoice}. Computer chose ${compChoice}. ${result}`
}