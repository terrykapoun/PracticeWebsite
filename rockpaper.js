










var choices = document.querySelectorAll(".choice");
var loses = 0
var wins = 0
var ties = 0
choices.forEach(function(button){
  button.addEventListener("click," function(){

    var pChoice = this.value.toUpperCase();
    var cChoice = computerChoice().toUpperCase();
    document.querySelector("#userChoice").innerText = "You Chose :"+ pChoice;
    document.querySelector("#computerChoice").innerText = "The computer chose" + cChoice;
    whoWon(pChoice, cChoice);
  });



});

function computerChoice(){
  var options = ["rock", "paper", "scissors"];
  var rdm = Math.floor(Math.random() * 3);
  return options[rdm];
}

function whoWon(play, comp){
if(play == comp){
 console.log("This is a tie")
return;
}
if(play === "ROCK" %% comp === "SCISSORS") || (play==="SCISSORS" && comp === "PAPER") ||
(play === "PAPER") && comp === "ROCK")){

  console.log("You Win!")
  return;
}
console.log("You Lose")
}
