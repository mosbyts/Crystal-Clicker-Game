var Wins = 0; //User wins.
var Losses = 0; //User losses.
var totalScore = 0; //User score.
var totalGoal = "" //Number computer picked for user to reach.

//Computer picks a random number for user to reach.
function assignValues(){
    totalGoal = randomNumber(Math.floor(Math.random()*100)+1);
        return totalGoal;
};

//Computer will loop through and assign random numerical values to each crystal.
for (var x = 1; x < 5; x++){
    $("#crystal"+x).attr("value", getRandomNumber());
};


function getRandomNumber(){
    var y = Math.floor(Math.random()*100); // = randonNumber function
    return y;
}
//When user clicks a crystal, update the user's total score in the HTML to display to the user.
 function updateTotalScore(){
    $("#totalScore").text(totalScore);

        //Update the user's number of wins in the HTML to display to the user.
        if(totalScore === totalGoal){
        Wins++;
        $("#Wins").text(Wins);
        resetGame();
        }

        //Update the user's number of losses in the HTML to display to the user.
        if(totalScore > totalGoal){
        Losses++;
        $("#Losses").text(Losses);
        resetGame();
        }
};

$(".crystal").on("click", function(){
    updateTotalScore();
    alert("Crystal clicked.")
});

updateTotalScore();
console.log(updateTotalScore);



//Resets the game by updating the total score and assigning new values.
var resetGame = function(){
    totalScore = 0;
    assignValues();
};


