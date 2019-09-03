//Computer picks a random number between 1 and 101 for user to reach.
function assignGoal(){
    var totalGoal = Math.floor(Math.random() * 100 + 1);
        $("#randomNumber").text(totalGoal); 
            console.log(totalGoal);
};

//Calls assignGoal function.
assignGoal();

//Computer will loop through and assign random numerical values between 1 and 12 to each crystal.
for (var x = 1; x < 5; x++){
    $("#crystal"+ x).attr("value", getRandomNumber());
};

//Computer picks a random number between 1 and 12.
function getRandomNumber(){
    totalGoal = Math.floor(Math.random() * 11 + 1);
        return totalGoal;
};

//Call getRandomNumber function.
getRandomNumber();

//When user clicks a crystal, update the user's total score in the HTML to display to the user.
function updateTotalScore(crystalClickedVal){
    var totalScore = parseInt($("#totalScore").text());
    var goalValue = parseInt($("#randomNumber").text());
    totalScore += parseInt(crystalClickedVal);
    $("#totalScore").text(totalScore);
        //Update the user's number of wins in the HTML to display to the user.
        if(totalScore === goalValue){
            var Wins = $("#Wins").text();
            Wins++;
            $("#Wins").text(Wins);
            alert("You win!!");
            resetGame();
        } else if (totalScore > goalValue){
            var Losses = $("#Losses").text();
            Losses++;
            $("#Losses").text(Losses);
            alert("You lose :P");
            resetGame();
        } else {
            //do nothing 
        }
};

//When user clicks on a crystal the total score will update based on the clicked crystal's value.
$(".crystal").on("click", function(){
    var crystalClickedVal = $(this).attr('value');
    console.log(crystalClickedVal);
    updateTotalScore(crystalClickedVal);
    console.log(this);
 });

//Resets the game by updating the total score and assigning new values.
var resetGame = function(){
    assignGoal();
    getRandomNumber();
    $("#totalScore").text(0);
};


