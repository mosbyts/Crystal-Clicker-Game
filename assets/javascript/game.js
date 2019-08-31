var Wins = 0; //User wins.
var Losses = 0; //User losses.
var totalGoal = 0; //User goal number
var totalScore = 0; //User score.

//Computer picks a random number for user to reach.
function assignValues(){
    totalGoal = randomNumber(Math.floor(Math.random()*100));
        return totalGoal;
            $("#randomNumber").attr("value", assignValues());
};

//Computer will loop through and assign random numerical values to each crystal.
for (var x = 1; x < 5; x++){
    $("#crystal"+ x).attr("value", getRandomNumber());
};

//User is assigned random number to reach.
function getRandomNumber(){
    totalGoal = Math.floor(Math.random()*50);
        return totalGoal;
};

//Call getRandomNumber function.
getRandomNumber();

//When user clicks a crystal, update the user's total score in the HTML to display to the user.
 function updateTotalScore(crystalClickedVal){
    var z = $("#totalScore").text(crystalClickedVal);
        //Update the user's number of wins in the HTML to display to the user.
        if(totalScore === totalGoal){
            Wins++;
            $("#Wins").text(Wins);
            resetGame();
        };

        //Update the user's number of losses in the HTML to display to the user.
        if(totalScore > totalGoal){
            Losses++;
            $("#Losses").text(Losses);
            resetGame();
        };
};

//Call totalScore function.
updateTotalScore();

//When user clicks on a crystal the total score will update based on the clicked crystal's value.
$(".crystal").on("click", function(){
    var crystalClickedVal = $(this).attr('value');
    console.log(crystalClickedVal);
    updateTotalScore(crystalClickedVal);
    alert("Crystal clicked.");
 });

//Resets the game by updating the total score and assigning new values.
var resetGame = function(){
    totalScore = 0;
    assignValues();
};


