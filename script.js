const handOptions = {
    "rock":"https://img.icons8.com/color/96/000000/hand-rock-skin-type-2.png",
    "paper":"https://img.icons8.com/color/96/000000/hand-skin-type-2.png",
    "scissors":"https://img.icons8.com/color/96/000000/hand-scissors-skin-type-2.png"
}

let SCORE=0;
let cpSCORE=0;

function UserChoice(hand){
    let choice = document.querySelector(".choice");
    choice.style.display="none";

    let result = document.querySelector(".result");
    result.style.display="flex";

    document.getElementById("plChoice").src = handOptions[hand];
    ComputerChoice(hand);
}

function ComputerChoice(hand){
    let choices=["rock", "paper", "scissors"];
    let cpChoice = choices[Math.floor(Math.random()*3)];

    document.getElementById("cpChoice").src= handOptions[cpChoice];
    decision(hand, cpChoice);
    final(SCORE,cpSCORE);
}

const decision = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
      finalText("scissors", "paper");
      setCpScore(cpSCORE+1);
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      finalText("paper", "rock");
      setScore(SCORE + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
      tie();
    }
    if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      finalText("rock", "scissors");
      setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
      finalText("paper", "rock");
      setCpScore(cpSCORE+1);
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("It's a tie!");
      tie();
    }
    if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie!");
      tie();
    }
    if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOSE!");
      finalText("rock", "scissors");
      setCpScore(cpSCORE+1);
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      finalText("scissors", "paper");
      setScore(SCORE + 1);
    }
  };

  const restartGame = () => {
    let choice = document.querySelector(".choice");
    choice.style.display="flex";

    let result = document.querySelector(".result");
    result.style.display="none";
  }
  
  const setDecision = (decision) => {
    document.querySelector(".textResult").innerText = decision;
  }

  function finalText(userHand, cpHand){
    document.querySelector(".finalText").innerHTML = userHand + " beats " + cpHand ;
  }

  function tie(){
    document.querySelector(".finalText").innerHTML= "";
  }
  
  const setScore = (newScore) => {
    SCORE=newScore;
    document.querySelector(".playerScore").innerText = newScore;
  }

  const setCpScore = (Score) => {
    cpSCORE=Score;
    document.querySelector(".computerScore").innerText = Score;
  }

  function final(userScore, cpScore){
    if (userScore==5){
        setScore(5);
        restartGame();
        alert("YOU WON THE GAME!");
        setScore(0);
        setCpScore(0);    
    }
    else if (cpScore==5){
        setCpScore(5);
        restartGame();
        alert("YOU LOST THE GAME!");
        setCpScore(0);
        setScore(0);
    }
  }