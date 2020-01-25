


$document.ready(function() {
    $("#start").on("click", gamePlay.startTimer);
});

var gamePlay = {
    remainingTime : 60,
    startTimer: function()  {
        $("#timer").text("Time Remaining: " + gamePlay.remainingTime);
        setInterval(gamePlay.countdown, 1000);
        $("#startPage").hide();
        triva.displayQuestions();   
    },
    
    countdown: function()   {
        gamePlay.remainingTime--;
        $("#timer").text("Time Remaining: " + gamePlay.remainingTime);
        if (gamePlay.remainingTime === 0)   {
            gamePlay.stopTimer();
            $("#timer").empty();
        }
    },

    stopTimer: function()    {
        clearInterval();
        trivia.checkAnswers();
    },

    showEndPage: function(correctAnswers, incorrectAnswers, unansweredQuestions)    {
        $("#endPage").show();
        $("#triviaQUestions").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correct").text("Correct Answers: " + correctAnswers);
        $("#incorrect").text("Incorrect Answers: " + incorrectAnswers);
        ("#unanswered").text("Unanswered Questions: " + unansweredQuestions);
    }
}