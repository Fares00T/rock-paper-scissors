// First interactive Game

let playGame = confirm("do you want to play");
if (playGame) {
  //play
  let playerChoice = prompt("please enter rock, paper, or scissors. ");
  if (playerChoice) {
    //continue to play
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      // play
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer} \n Computer wins!!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne} \n Computer: ${computer} \n computer win!!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne} \n Computer: ${computer} \n computer win!!`
          : `playerOne: ${playerOne} \n Computer: ${computer} \n playerOne wins!!`;
      alert(result);
      let playAgain = confirm("paly again?");
      playAgain ? location.reload() : alert(" ok thanks for playing");
    } else {
      alert("please only enter rock, paper, or scissors. ");
      let playAgain = confirm("paly again?");
      playAgain ? location.reload() : alert(" ok thanks for playing");
    }
  } else {
    alert("you changed you mind have a nice day");
  }
} else {
  alert("ok have a nice day");
}
