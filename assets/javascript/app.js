


$document.ready(function() {
    $("#start").on("click", gamePlay.startTimer);
});

var gamePlay = {
    remainingTime : 60,
    startTimer: function()  {
        $("#timer").text("Time Remaining: " + gamePlay.remainingTime);
        setInterval(gamePlay.countdown, 1000);
           
        },
    }
}