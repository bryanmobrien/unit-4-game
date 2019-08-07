$(document).ready(function(){

    $("#buttonReset").hide();
    
    //Global Variables, to be referred to throughout any function.
    var diamond_1 = 0;
    var diamond_2 = 0;
    var diamond_3 = 0;
    var diamond_4 = 0;
    var scoreNow = 0;
    var matchScore = 0;
    var wins = 0;	
    var losses = 0;
    
            //If the given gem does not already have a number attributed to it, then it will generate a random number for that gem.  Otherwise, it will use the number given to the gem, and add it to the current score. 
            $("#diamond_1").on('click', function(){
                if (diamond_1){
                    scoreNow = scoreNow + diamond_1;
                    //Replaces the HTML for the element with the scoreNow Id, with the current score, that includes the points from the clicked gem.
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    //Calling the function that will handle the scorekeeping.
                    scoreKeeper();
                }else{
                    diamond_1 = Math.floor((Math.random() * 11) + 1);
                }
            });
    
            $("#diamond_2").on('click', function(){
                if (diamond_2){
                    scoreNow = scoreNow + diamond_2;
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }else{
                    diamond_2 = Math.floor((Math.random() * 11) + 1);
                }
            });
    
            $("#diamond_3").on('click', function(){
                if (diamond_3){
                    scoreNow = scoreNow + diamond_3;
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }else{
                    diamond_3 = Math.floor((Math.random() * 11) + 1);
                }
            });
    
            $("#diamond_4").on('click', function(){
                if (diamond_4){
                    scoreNow = scoreNow + diamond_4;
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }else{
                    diamond_4 = Math.floor((Math.random() * 11) + 1);
                }
            });
    
        //This function will run when it is time to reset the game, which will set all of the following values back to 0.
        function playAgain(){
            //When the button is clicked, the following will occur. It will set the following values to 0, call the given score function, and hide the div with the gems, for a cleaner look.
            $("#buttonReset").click(function(){
                scoreToMeet = 0;
                scoreNow = 0;
                diamond_1 = 0;
                diamond_2 = 0;
                diamond_3 = 0;
                gem = 0;
                givenScore();
                $("#buttonReset").hide();
                $("#gemRow").show();
            });
        };
    
        //This function will check whether the current score equals the given score to match.  If it does, then the user wins will add by one.  If it does not, then the user losses will add by one.  It will then be posted to the HTML page, through the element with that given Id.  It will also hide and show certain content, for a cleaner look.
        function scoreKeeper(){
            if (scoreNow > matchScore){
                losses++;
                $("#losses").html('Losses: ' + losses);
                $("#buttonReset").show();
                $("#gemRow").hide();
                playAgain();
            }
    
            if (scoreNow == matchScore){
                wins++;
                $("#wins").html('Wins: ' + wins);
                $("#buttonReset").show();
                $("#gemRow").hide();
                playAgain();
            };
        };
    
        //This function will provide the score to match, through generating a random number.  It will then populate the HTML with this number.
        function givenScore(){
            matchScore= Math.floor((Math.random() * 101) + 19);
            document.getElementById("scoreToMeet").innerHTML = matchScore;
        };
    
    //This will call the givenScore function.
    givenScore();
    
    });