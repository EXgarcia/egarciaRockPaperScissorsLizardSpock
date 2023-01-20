let Scissors = document.getElementById("Scissors");
let Spock = document.getElementById("Spock");
let Lizard = document.getElementById("Lizard");
let Rock = document.getElementById("Rock");
let Paper = document.getElementById("Paper");
let ScissorsTwo = document.getElementById("ScissorsTwo");
let SpockTwo = document.getElementById("SpockTwo");
let LizardTwo = document.getElementById("LizardTwo");
let RockTwo = document.getElementById("RockTwo");
let PaperTwo = document.getElementById("PaperTwo");
let ScissorsThree = document.getElementById("ScissorsThree");
let SpockThree = document.getElementById("SpockThree");
let LizardThree = document.getElementById("LizardThree");
let RockThree = document.getElementById("RockThree");
let PaperThree = document.getElementById("PaperThree");
let injectHere = document.getElementById("injectHere");
let oneRoundComputer = document.getElementById("oneRoundComputer");
let twoRoundComputer = document.getElementById("twoRoundComputer");
let threeRoundComputer = document.getElementById("threeRoundComputer");
let headerText = document.getElementById("headerText");
let vsPlayer = document.getElementById("vsPlayer");
let playerTwoButtons = document.getElementById("playerTwoButtons")
let singlePlayer = document.getElementById("singlePlayer");

let userInput;
let reply;

let playerOne;
let playerTwo;


let playerCounter = 0;

let cpuCounter = 0;

let roundCounter = 0;


oneRoundComputer.addEventListener("click", function(){
  roundCounter = 1;
})



twoRoundComputer.addEventListener("click", function(){
  roundCounter = 3;
})


threeRoundComputer.addEventListener("click", function(){
  roundCounter = 5;
})

vsPlayer.addEventListener("click", function(){

  playerOneButtons.classList.remove('hide');
  playerTwoButtons.classList.remove('hide');
  huBtns.classList.add('hide');
  rowFun.classList.add('hide');
 
 OutComeTwo();

} )

singlePlayer.addEventListener("click", function(){
  playerOneButtons.classList.add('hide');
  playerTwoButtons.classList.add('hide');
  huBtns.classList.remove('hide');
  rowFun.classList.remove('hide');

})






Rock.addEventListener("click", function(){
   userInput = "Rock"
   console.log(userInput);
   console.log(reply);
   OutCome();
   GetData();
})

Paper.addEventListener("click", function(){
  userInput = "Paper"
  console.log(userInput)
  console.log(reply)
  OutCome();
  GetData();
})

Scissors.addEventListener("click", function(){
  userInput = "Scissors"
  console.log(userInput)
  console.log(reply)
  OutCome();
  GetData();
})

Lizard.addEventListener("click", function(){
  userInput = "Lizard"
  console.log(userInput)
  console.log(reply)
  OutCome();
  GetData();
})

Spock.addEventListener("click", function(){
  userInput = "Spock"
  console.log(userInput)
  console.log(reply)
  OutCome();
  GetData();
})



function GetData() {
  fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
  .then(response => response.text())
  .then(data => {reply = data;})
}

GetData();

//player vs Player
RockTwo.addEventListener("click", function(){

  playerTwo = "Rock"
  console.log(playerTwo);
  OutComeTwo();
  
})

PaperTwo.addEventListener("click", function(){

 playerTwo = "Paper"
 console.log(playerTwo);
 OutComeTwo();
 
})

ScissorsTwo.addEventListener("click", function(){
 
 playerTwo = "Scissors"
 console.log(playerTwo);
 OutComeTwo();
 
})

LizardTwo.addEventListener("click", function(){
 
 playerTwo = "Lizard"
 console.log(playerTwo);
 OutComeTwo();
 
})

SpockTwo.addEventListener("click", function(){
 
 playerTwo = "Spock"
 console.log(playerTwo);
 OutComeTwo();
 
})
///////////////////////////////////////////////////////////

RockThree.addEventListener("click", function(){

  playerOne = "Rock"
  console.log(playerOne);
  
  OutComeTwo();
  
})

PaperThree.addEventListener("click", function(){

 playerOne = "Paper"
 console.log(playerOne);
 
 OutComeTwo();
 
})

ScissorsThree.addEventListener("click", function(){

 playerOne = "Scissors"
 console.log(playerOne);
 
 OutComeTwo();
 
})

LizardThree.addEventListener("click", function(){

 playerOne = "Lizard"
 console.log(playerOne);
 
 OutComeTwo();
 
})

SpockThree.addEventListener("click", function(){

 playerOne = "Spock"
 console.log(playerOne);

 OutComeTwo();
 
})



function OutCome(){
  //paper inputs
  if(userInput == "Paper" && reply == "Rock")
  {
    injectHere.textContent = " Paper beats Rock"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(userInput == "Paper" && reply == "Spock")
  {
    injectHere.textContent = " Paper beats Spock"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(userInput == "Paper" && reply == "Scissors")
  {
    injectHere.textContent = "Paper Loses to Scissors"
    cpuCounter++;
    console.log(cpuCounter)
    computerVsPlayerIf ()

  }else if(userInput == "Paper" && reply == "Lizard")
  {
    injectHere.textContent = "Paper Loses to Lizard"
    cpuCounter++;
    console.log(cpuCounter)
    computerVsPlayerIf ()

  }else if(userInput == "Paper" && reply == "Paper" )
  {
    injectHere.textContent = "Draw!!"
  }
  
  //------------------------------------------------

  //rock inputs
  else if(userInput == "Rock" && reply == "Scissors")
  {
    injectHere.textContent = "Rock Shatters Scissors!"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(userInput == "Rock" && reply == "Lizard")
  {
    injectHere.textContent = "Rock Smashes Lizard!"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(userInput == "Rock" && reply == "Spock" )
  {
    injectHere.textContent = "Rock Loses to Spock"
    cpuCounter++;
    console.log(cpuCounter);
    computerVsPlayerIf ()

  }else if(userInput =="Rock" && reply == "Paper" )
  {
    injectHere.textContent = "Rock Loses to Paper"
    cpuCounter++;
    console.log(cpuCounter);
    computerVsPlayerIf ()


  }else if(userInput == "Rock" && reply == "Rock")
  {
    injectHere.textContent = "Draw!!"

  }
  //------------------------------------------------
  
  
  else if(userInput == "Scissors" && reply == "Paper")
  {
    injectHere.textContent = "Scissors Shred Paper!"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(userInput == "Scissors" && reply == "Rock")
  {
    injectHere.textContent = "Scissors Lose to Rock"
    cpuCounter++;
    console.log(cpuCounter);
    computerVsPlayerIf ()

  }else if(userInput == "Scissors" && reply == "Lizard")
  {
    injectHere.textContent = "Scissors Beats Lizard"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(userInput == "Scissors" && reply == "Spock")
  {
    injectHere.textContent = "Scissors Lose to Spock"
    cpuCounter++;
    console.log(cpuCounter);
    computerVsPlayerIf ()

  }else if(userInput == "Scissors" && reply == "Scissors")
  {
    injectHere.textContent = "Draw!!"
  }
  //-----------------------------------------------------

 //Lizard------------------------------------------------
 else if(userInput == "Lizard" && reply == "Spock" )
 {
  injectHere.textContent = "Lizard Beats Spock!"
  playerCounter++;
  console.log(playerCounter);
  computerVsPlayerIf ()

 }else if(userInput == "Lizard" && reply == "Paper")
 {
  injectHere.textContent = "Lizard Tears Paper"
  playerCounter++;
  console.log(playerCounter);
  computerVsPlayerIf ()

 }else if( userInput == "Lizard" && reply == "Scissors")
 {
  injectHere.textContent = "Lizard Loses to Scissors"
  cpuCounter++;
  console.log(cpuCounter);
  computerVsPlayerIf ()

 }else if(userInput == "Lizard" && reply == "Rock")
 {
  injectHere.textContent = "Lizard is Crushed by Rock"
  cpuCounter++;
  console.log(cpuCounter);
  computerVsPlayerIf ()

 }else if(userInput == "Lizard" && reply == "Lizard")
 {
  injectHere.textContent = "Draw!!"
 }
//-----------------------------------------------------

else if(userInput == "Spock" && reply =="Scissors")
{
  injectHere.textContent = "Spock Breaks Scissors "
  playerCounter++;
  console.log(playerCounter);
  computerVsPlayerIf ()

}else if(userInput == "Spock" && reply == "Rock")
{
  injectHere.textContent = "Spock vaporizes Rock"
  playerCounter++;
  console.log(playerCounter);
  computerVsPlayerIf ()

}else if(userInput == "Spock" && reply == "Paper")
{
  injectHere.textContent = " Paper Beats Spock"
  cpuCounter++;
  console.log(cpuCounter);
  computerVsPlayerIf ()

}else if( userInput == "Spock" && reply == "Lizard")
{
  injectHere.textContent = "Lizard Poisons Spock"
  cpuCounter++;
  console.log(cpuCounter);
  computerVsPlayerIf ()

}else if(userInput == "Spock" && reply == "Spock")
{
  injectHere.textContent = "Draw!!"
}
//---------------------------------------------------

}



function computerVsPlayerIf (){
  if(playerCounter == roundCounter){
    headerText.innerText = "This Victory is Yours!"
  }else if(cpuCounter == roundCounter)
  {}
}


//player vs player
function OutComeTwo(){
  //paper inputs
  if(playerOne == "Paper" && playerTwo == "Rock")
  {
    injectHere.textContent = " Paper beats Rock"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(playerOne == "Paper" && playerTwo == "Spock")
  {
    injectHere.textContent = " Paper beats Spock"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(playerOne == "Paper" && playerTwo == "Scissors")
  {
    injectHere.textContent = "Paper Loses to Scissors"
    cpuCounter++;
    console.log(cpuCounter)
    computerVsPlayerIf ()

  }else if(playerOne == "Paper" && playerTwo == "Lizard")
  {
    injectHere.textContent = "Paper Loses to Lizard"
    cpuCounter++;
    console.log(cpuCounter)
    computerVsPlayerIf ()

  }else if(playerOne == "Paper" && playerTwo == "Paper" )
  {
    injectHere.textContent = "Draw!!"
  }
  
  //------------------------------------------------

  //rock inputs
  else if(playerOne == "Rock" && playerTwo == "Scissors")
  {
    injectHere.textContent = "Rock Shatters Scissors!"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(playerOne == "Rock" && playerTwo == "Lizard")
  {
    injectHere.textContent = "Rock Smashes Lizard!"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(playerOne == "Rock" && playerTwo == "Spock" )
  {
    injectHere.textContent = "Rock Loses to Spock"
    cpuCounter++;
    console.log(cpuCounter);
    computerVsPlayerIf ()

  }else if(playerOne =="Rock" && playerTwo == "Paper" )
  {
    injectHere.textContent = "Rock Loses to Paper"
    cpuCounter++;
    console.log(cpuCounter);
    computerVsPlayerIf ()


  }else if(playerOne == "Rock" && playerTwo == "Rock")
  {
    injectHere.textContent = "Draw!!"

  }
  //------------------------------------------------
  
  
  else if(playerOne == "Scissors" && playerTwo == "Paper")
  {
    injectHere.textContent = "Scissors Shred Paper!"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(playerOne == "Scissors" && playerTwo == "Rock")
  {
    injectHere.textContent = "Scissors Lose to Rock"
    cpuCounter++;
    console.log(cpuCounter);
    computerVsPlayerIf ()

  }else if(playerOne == "Scissors" && playerTwo == "Lizard")
  {
    injectHere.textContent = "Scissors Beats Lizard"
    playerCounter++;
    console.log(playerCounter);
    computerVsPlayerIf ()

  }else if(playerOne == "Scissors" && playerTwo == "Spock")
  {
    injectHere.textContent = "Scissors Lose to Spock"
    cpuCounter++;
    console.log(cpuCounter);
    computerVsPlayerIf ()

  }else if(playerOne == "Scissors" && playerTwo == "Scissors")
  {
    injectHere.textContent = "Draw!!"
  }
  //-----------------------------------------------------

 //Lizard------------------------------------------------
 else if(playerOne == "Lizard" && playerTwo == "Spock" )
 {
  injectHere.textContent = "Lizard Beats Spock!"
  playerCounter++;
  console.log(playerCounter);
  computerVsPlayerIf ()

 }else if(playerOne == "Lizard" && playerTwo == "Paper")
 {
  injectHere.textContent = "Lizard Tears Paper"
  playerCounter++;
  console.log(playerCounter);
  computerVsPlayerIf ()

 }else if( playerOne == "Lizard" && playerTwo == "Scissors")
 {
  injectHere.textContent = "Lizard Loses to Scissors"
  cpuCounter++;
  console.log(cpuCounter);
  computerVsPlayerIf ()

 }else if(playerOne == "Lizard" && playerTwo == "Rock")
 {
  injectHere.textContent = "Lizard is Crushed by Rock"
  cpuCounter++;
  console.log(cpuCounter);
  computerVsPlayerIf ()

 }else if(playerOne == "Lizard" && playerTwo == "Lizard")
 {
  injectHere.textContent = "Draw!!"
 }
//-----------------------------------------------------

else if(playerOne == "Spock" && playerTwo =="Scissors")
{
  injectHere.textContent = "Spock Breaks Scissors "
  playerCounter++;
  console.log(playerCounter);
  computerVsPlayerIf ()

}else if(playerOne == "Spock" && playerTwo == "Rock")
{
  injectHere.textContent = "Spock vaporizes Rock"
  playerCounter++;
  console.log(playerCounter);
  computerVsPlayerIf ()

}else if(playerOne == "Spock" && playerTwo == "Paper")
{
  injectHere.textContent = " Paper Beats Spock"
  cpuCounter++;
  console.log(cpuCounter);
  computerVsPlayerIf ()

}else if( playerOne == "Spock" && playerTwo == "Lizard")
{
  injectHere.textContent = "Lizard Poisons Spock"
  cpuCounter++;
  console.log(cpuCounter);
  computerVsPlayerIf ()

}else if(playerOne == "Spock" && playerTwo == "Spock")
{
  injectHere.textContent = "Draw!!"
}
//---------------------------------------------------

}



function computerVsPlayerIf (){
  if(playerCounter == roundCounter){
    headerText.innerText = "This Victory is Yours!"
  }else if(cpuCounter == roundCounter)
  {}
}