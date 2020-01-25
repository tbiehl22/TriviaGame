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
        $("#unanswered").text("Unanswered Questions: " + unansweredQuestions);
    }
}

var trivia =  {
    displayQuestions: function()    {
        var questions = $("#triviaQuestions");
        var answers = $(".form-check");
        questions.append('<h2>Answer the following questions:</h2>');

        for (var i = 0; i < questionList.length; i++)   {
            questions.append('<div id="question">' + questionList[i].question + '</div>');

            var answer1 = questionList[i].answers[0];
            var answer2 = questionList[i].answers[1];
            var answer3 = questionList[i].answers[2];
            var answer4 = questionList[i].answers[3];

            

            var doneButton = '<button class="done">Done</button>';
            questions.append(doneButton);
            $("#done").on("click", gamePlay.stopTimer);
   
   
        }



},
  
checkAnswers: function()   {
    var correctAnswer;
    var playerAnswer;
    var numberCorrect = 0;
    var numberIncorrect = 0;
    var numberUnanswered = 0;
}




    var questionList =
    [
        {
            question: "What city did the Seattle SuperSonics move to in 2008?",
            answers: ["New Orleans", "Charlotte", "Oklahoma City", "Toronto"],
            correct: "Oklahoma City"
        },

        {
            question: "What year did the Portland Trail Blazers win their only championship?",
            answers: ["1970", "1977", "1992", "2001"],
            correct: "1977"
        },

        {
            question: "What team has won the most championships?",
            answers: ["Chicago Bulls", "San Antonio Spurs", "Los Angeles Lakers", "Boston Celtics"],
            correct: "Boston Celtics"
        },

        {
            question: "Who is the all-time leader in points with 38,387 for their career?",
            answers: ["Kobe Bryant", "Lebron James", "Kareem Abdul-Jabbar", "Wilt Chamberlain"],
            correct: "Kareem Abdul-Jabbar"
        },

        {
            question: "What team drafted Kobe Bryant in 1996?",
            answers: ["Charlotte Hornets", "Los Angeles Lakers", "Atlanta Hawks", "Utah Jazz"],
            correct: "Charlotte Hornets"
        },

        {
            question: "Besides the Chicago Bulls, what team retired Michael Jordan's number?",
            answers: ["Portland Trail Blazers", "Charlotte Hornets", "Miami Heat", "Washington Wizards"],
            correct: "Miami Heat"
        },

        {
            question: "What year did the NBA adopt the 3-point line?",
            answers: ["1986", "2000", "1967", "1979"],
            correct: "1979"
        },

        {
            question: "Who is the shortest player to have every played in the NBA?",
            answers: ["Muggsy Bogues", "Earl Boykins", "Spud Webb", "Nate Robinson"],
            correct: "Muggsy Bogues"
        },

        {
            question: "How many NBA teams are there?",
            answers: ["32", "34", "30", "28"],
            correct: "30"
        },
    ]