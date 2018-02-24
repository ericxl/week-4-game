$(document).ready(function () {
    var goal;
    var score;
    var wins;
    var losses;
    var crystalValue = [0, 0, 0, 0];

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function start(){
        wins = 0;
        losses = 0;
        initGame();
    }

    function initGame(){
        goal = randomInt(18, 120);
        score = 0;
        for (var i = 0; i < 4; i++){
            crystalValue[i] = randomInt(1, 12);
        }

        $("#goal").text(goal);
        $("#youwin").text("");
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#score").text(score);
    }

    function buttonClicked(){
        $("#score").text(score);
        if (score === goal){
            wins++;
            initGame();
            $("#youwin").text("You Win!");
        }
        else if (score > goal){
            losses++;
            initGame();
            $("#youwin").text("You Lost!");
        }
        else {
            $("#youwin").text("");
        }
    }

    $("#blue-crystal").on("click",function(){
        score += crystalValue[0];
        buttonClicked();
    });
    $("#green-crystal").on("click",function(){
        score += crystalValue[1];
        buttonClicked();
    });
    $("#red-crystal").on("click",function(){
        score += crystalValue[2];
        buttonClicked();
    });
    $("#yellow-crystal").on("click",function(){
        score += crystalValue[3];
        buttonClicked();
    });

    start();
});