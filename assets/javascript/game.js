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
        var clickAudio = document.createElement("audio");
        clickAudio.setAttribute("src", "./assets/sounds/click.mp3");
        clickAudio.play();

        $("#score").text(score);
        if (score === goal){
            wins++;
            initGame();
            $("#youwin").text("You Win!");

            var audio = document.createElement("audio");
            audio.setAttribute("src", "./assets/sounds/correct.wav");
            audio.play();
        }
        else if (score > goal){
            losses++;
            initGame();
            $("#youwin").text("You Lost!");

            var audio = document.createElement("audio");
            audio.setAttribute("src", "./assets/sounds/wrong.wav");
            audio.play();
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