let questionsList = {};
let trivia = {};

let questions;
let answers = ["C", "B", "D", "C", "A", "C", "D", "A", "C", "A"];

let intervalID;

timer = {
    time: 120,

    start: function ()  {
        $("#timer").text("2:00");
        intervalID = setInterval(timer.countdown, 1000);

    },

    countdown: function()   {
        timer.time--;
        let currentTime = timer.timeConverter(timer.time);
        $("#timer").text(currentTime);

        if (timer.time === 0)   {
            $("#timer").text("Time's Up!");
            clearInterval(intervalID);
            $(".done, .triviaQuestions").hide();
            score();
            $(".endPage, .resetGame").show();
        } else  {

        }
    },

    reset: function()   {
        timer.time = 120;
        $("timer").text("2:00");
        clearInterval(intervalID);
    },

    timeConverter: function (t) {
        let minutes = Math.floor(t / 60);
        let seconds = t - (minutes * 60);

        if (seconds < 10)   {
            seconds = "0" + seconds;
        }

        if (minutes === 0)  {
            minutes = "00";
        }

        else if (minutes < 10)  {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },
};

function startTrivia()  {
    questionsList = resetQuestions();
    trivia = resetTrivia();

    showQuestions();
}

function resetTrivia()  {
    return{
        correct: 0,
        incorrect: 0,
        unanswered: 0,
    }
}

function resetQuestions()   {
    return  {
       q0:  {
            question: "What city did the Seattle SuperSonics move to in 2008?",
            A: "New Orleans",
            B: "Charlotte",
            C: "Oklahoma City",
            D: "Toronto",
       },

       q1:  {
            question: "What year did the Portland Trail Blazers win their only championship?",
            A: "1970",
            B: "1977",
            C: "1992",
            D: "2001",
       },

       q2:  {
            question: "What team has won the most championships?",
            A: "Chicago Bulls",
            B: "San Antonio Spurs",
            C: "Los Angeles Lakers",
            D: "Boston Celtics",
       },

       q3:  {
            question: "Who is the all-time leader in points with 38,387 for their career?",
            A: "Kobe Bryant",
            B: "Lebron James",
            C: "Kareem Abdul-Jabbar",
            D: "Wilt Chamberlain",
       },

       q4:  {
            question: "What team drafted Kobe Bryant in 1996?",
            A: "Charlotte Hornets",
            B: "Los Angeles Lakers",
            C: "Atlanta Hawks",
            D: "Utah Jazz",
       },

       q5:  {
            question: "Besides the Chicago Bulls, what team retired Michael Jordan's number?",
            A: "Portland Trail Blazers",
            B: "Charlotte Hornets",
            C: "Miami Heat",
            D: "Washington Wizards",
        }, 

        q6:  {
            question: "What year did the NBA adopt the 3-point line?",
            A: "1986",
            B: "2000",
            C: "1967",
            D: "1979",
        }, 

        q7:  {
            question: "Who is the shortest player to have every played in the NBA?",
            A: "Muggsy Bogues",
            B: "Earl Boykins",
            C: "Spud Webb",
            D: "Nate Robinson",
        }, 

        q8:  {
            question: "How many NBA teams are there?",
            A: "32",
            B: "34",
            C: "30",
            D: "28",
        },

        q9:  {
            question: "What player is on the offical NBA logo?",
            A: "Jerry West",
            B: "John Stockton",
            C: "Bill Russell",
            D: "Kareem Abdul-Jabbar",
        },

    }
}

function showQuestions()    {
    questions = Object.keys(questionsList);
    for (var i = 0; i < questions.length; i++)  {
        var questionTitle = questions[i];
        var question = questionsList[questionTitle];
        var questionblocks = createQuestions(question, questionTitle);
        $(".triviaQuestions").append(questionblocks).show();
    }
}

function createQuestions(question, key) {
    var block = $("<div class='question' name='" + key + "'>" + question.question + "" +
        "<ul>" +
        "<li><input type='radio' name='" + key + "' value='A'><label>" + question.A + "</label></li>" +
        "<li><input type='radio' name='" + key + "' value='B'><label>" + question.B + "</label></li>" +
        "<li><input type='radio' name='" + key + "' value='C'><label>" + question.C + "</label></li>" +
        "<li><input type='radio' name='" + key + "' value='D'><label>" + question.D + "</label></li>" +
        "</ul>");

    return block;   
}

function score()    {
    console.log($("input:radio[name='q0']:checked").val());
    let playerAnswers = [$("input:radio[name='q0']:checked").val(),
    $("input:radio[name='q1']:checked").val(),
    $("input:radio[name='q2']:checked").val(),
    $("input:radio[name='q3']:checked").val(),
    $("input:radio[name='q4']:checked").val(),
    $("input:radio[name='q5']:checked").val(),
    $("input:radio[name='q6']:checked").val(),
    $("input:radio[name='q7']:checked").val(),
    $("input:radio[name='q8']:checked").val(),
    $("input:radio[name='q9']:checked").val()];

    for (k = 0; k < questions.length; k++) {
        if (playerAnswers[k] === undefined) {
            trivia.unanswered++;
        }  else if (playerAnswers[k] === answers[k])   {
            trivia.correct++;
        }  else {
            trivia.incorrect++;
        }
    }

    $("#correct").text("Correct: " + trivia.correct);
    $("#incorrect").text("Incorrect: " + trivia.incorrect);
    $("#unanswered").text("Unanswered: " + trivia.unanswered);
}

$(document).ready(function () {

    $(".start").on("click", function () {
        $(".start, .endgame").hide();
        startTrivia();
        timer.start();
        $(".done").show();
    });

    $(".done").on("click", function () {
        score();
        $(".done, .triviaQuestions").hide();
        timer.reset();
        $(".endPage, .resetGame").show();
    });

    $(".resetGame").on("click", function () {
        $(".triviaQuestions").empty();
        $(".start").show();
        $(".resetGame, .endPage").hide();
        timer.reset();
    });
});

