// console.log("From game JS")
// get random number at start of game
// The random number shown at the start of the game should be between 19 - 120.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score
// Each crystal should have a random hidden value between 1 - 12.
// The player wins if their total score matches the random number from the beginning of the game
// The player loses if their score goes above the random number
// The game restarts whenever the player wins or loses
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game

// Game Variables
var gemOne = 0;
var gemTwo = 0;
var gemThree = 0 ;
var gemFour = 0;
var userScore = 0;
var wins = 0;
var losses = 0;
var randomNum = 0;
var isGameRunning = false


$(document).ready(function() {
// get random number for start of game
function getRandomNum(min ,max) {
  return Math.floor(Math.random()*(max- min+1)+min); 
}

// get a random numbers for each gem
function gemOneRand(min ,max) {
  return Math.floor(Math.random()*(max- min+1)+min);
}
function gemTwoRand(min ,max) {
  return Math.floor(Math.random()*(max- min+1)+min); 
}
function gemThreeRand(min ,max) {
  return Math.floor(Math.random()*(max- min+1)+min); 
}
function gemFourRand(min ,max) {
  return Math.floor(Math.random()*(max- min+1)+min); 
}

// get users click input

$('#gemOne').on("click", function() {
  userScore += gemOne;
  //console.log('gem 1 clicked  Hidden value = ' + gemOne)
  //console.log(userScore + " " +  randomNum)
  checkWin()
});

$('#gemTwo').on("click", function() {
  userScore += gemTwo;
  //console.log('gem 2 clicked  Hidden value = ' + gemTwo)
  //console.log(userScore + " " +  randomNum)
  checkWin()
});

$('#gemThree').on("click", function() {
  userScore += gemThree
  //console.log('gem 3 clicked  Hidden value = ' + gemThree)
  //console.log(userScore + " " +  randomNum)
  checkWin()
});

$('#gemFour').on("click", function() {
  userScore += gemFour
  //console.log('gem 4 clicked  Hidden value = ' + gemFour)
  //console.log(userScore + " " +  randomNum)
  checkWin()
});

// check for win or loose
checkWin = function() {
  if(userScore === randomNum){
   // alert("winner")
    wins++
    startNew()
    //console.log("rand: " + randomNum)
    // test()
  } 
  if ( userScore > randomNum){
    //alert("looser")
    losses++
    startNew()
    //console.log("rand: " + randomNum)
  }
  $('#score').text(userScore);
}

// reset game 
startNew = function(){
  randomNum = getRandomNum(20,120);
  gemOne = gemOneRand(1,12);
  gemTwo = gemTwoRand(1,12);
  gemThree = gemThreeRand(1,12);
  gemFour = gemFourRand(1,12);
  userScore = 0; 
  //test()
  $('#wins').text('Wins: ' + wins);
  $('#loose').text('Losses: ' + losses);
  $('#guess-value').text(randomNum);
}
  


// ##############################  Testing area ######################################
 test = function() {
  console.log('Ran Num:  ' + randomNum)
  console.log('gem 1: ' + gemOne + '- gem 2: ' + gemTwo + '- gem 3: ' +  gemThree + '- gem 4: ' + gemFour )
  console.log('Wins: ' + wins + '  Losses: ' + losses)
}


// 
});

// issues  wins go to 1 at start
