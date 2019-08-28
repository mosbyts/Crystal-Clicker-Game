var Wins = 0; //User wins.
var Losses = 0; //User losses.
var totalScore = 0; //User score.
var randomNumber = ["123456789"]; //Numbers for computer to pick from.

var crystalOne = ""; //First crystal amount.
var crystalTwo = ""; //Two crystal amount.
var crystalThree = ""; //Three crystal amount.
var crystalFour = ""; //Fourth crystal amount.

var totalGoal = "" //Number computer picked for user to reach.

//Update the user's number of wins in the HTML to display to the user.
var updateWins = function(){
    document.querySelector("#Wins").innerHTML = Wins;
}

//Update the user's number of losses in the HTML to display to the user.
var updateLosses = function(){
    document.querySelector("#Losses").innerHTML = Losses;
}

//Update the user's total score in the HTML to display to the user.
var updateTotalScore = function(){
    document.querySelector("#totalScore").innerHTML = totalScore;
}

//Computer picks a random number for user to reach and assigns values to each crystal.
var assignValues = function(){
    totalGoal = randomNumber.charAt(Math.floor(Math.random()*randomNumber.length));
        return totalGoal;
    crystalOne = randomNumber.charAt(Math.floor(Math.random()*randomNumber.length));
        return crystalOne;
    crystalTwo = randomNumber.charAt(Math.floor(Math.random()*randomNumber.length));
        return crystalTwo;
    crystalThree = randomNumber.charAt(Math.floor(Math.random()*randomNumber.length));
        return crystalThree;
    crystalFour = randomNumber.charAt(Math.floor(Math.random()*randomNumber.length));
        return crystalFour;
};

var resetGame = function(){
    totalScore = 0;
    assignValues();
};


//When user clicks a crystal, the total score will update.
$("#crystalOne").on("click", function(){
    updateTotalScore();
});

$("#crystalTwo").on("click", function(){
    updateTotalScore();
});

$("#crystalThree").on("click", function(){
    updateTotalScore();
});

$("#crystalFour").on("click", function(){
    updateTotalScore();
});

