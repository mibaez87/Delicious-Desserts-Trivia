window.onload = (function () {
    //create array of each set of questions and answers
    var triviaArray = [{
            question: "Petit Gateau is French for:",
            answer: ["small dessert", "small chocolate", "small cake", "tiny cake"],
            correct: "small cake"
        },
        {
            question: "A perfectly tempered chocolate is known for its:",
            answer: ["shine", "snap", "smell", "color"],
            correct: "snap"
        },
        {
            question: "This popular dessert was originally made without filling:",
            answer: ["macaron", "oreo", "whoopie pie", "eclair"],
            correct: "macaron"
        },
        {
            question: "Which ingredient is NOT required to bake a cake?",
            answer: ["butter", "sugar", "eggs", "flour"],
            correct: "flour"
        },
        {
            question: "Which of these is America's favorite pie?",
            answer: ["pumpkin", "apple", "pizza", "cherry"],
            correct: "apple"
        },
        {
            question: "Where was ice cream first made?",
            answer: ["USA", "China", "Italy", "France"],
            correct: "China"
        },
        {
            question: "Where was the first chocolate chip cookie made?",
            answer: ["USA", "China", "Italy", "France"],
            correct: "USA"
        }
    ]
    //create variable for choosing random set from array
    var random = Math.floor(Math.random() * triviaArray.length);
    var solution = triviaArray[random];

    var timer = 20; //tells timer where to start
    var timerInterval;
    var correct = 0;
    var incorrect = 0;

    //create function to start and display timer countdown
    function startTimer() {
        timer--;
        $("#timer").html(timer);
        if (timer === 0) {
            $("#timer").html("You're out of time!<br>");
            $("#question").html("The correct answer is: " + solution.correct);
            incorrect++;
            stopTimer();
        }
    }

    //create function to stop the timer
    function stopTimer() {
        clearInterval(timerInterval);
    }

    //create function for displaying a questions/answers set
    function displayQuestion() {
        $("#timer").html(timer);
        $("#question").html(solution.question);
        for (var i = 0; i < solution.answer.length; i++) {
            var answerButton = $("<button class='answerButton' id='button' data-name='" + solution.answer[i] + "'>" + solution.answer[i] + "</button>");
            $("#answers").append(answerButton);
        }
    }

    //create function to display the first question when begin button is clicked
        $("#begin").on("click", function () {
            $("#begin").hide();
            displayQuestion();
            timerInterval = setInterval(startTimer, 1000);
        });

    //create on click function to determine if user picked correctly
    $(document).on("click", "#button", function () {
        var userPick = $(this).data("name");

        if (userPick == solution.correct) {
            $("#question").html("Correct!");
            correct++;
            stopTimer();
        } else {
            $("#question").html("Good Guess!<br>The correct answer is: " + solution.correct);
            incorrect++;
            stopTimer();
        }
    });
});