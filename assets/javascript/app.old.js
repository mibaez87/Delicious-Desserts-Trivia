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

    var timerInterval;
    var correct = 0;
    var incorrect = 0;

    //create function to start timer
    function runTimer() {
        var timer = 16; //tells timer where to start
        timerInterval = setInterval(decrement, 1000); //tells timer to decrease at interval of 1 second
        }
    //create function for timer countdown
    function decrement (){
        timer--; //decrease timer by 1
        $("#timer").html(timer); //displays timer
        //create conditional for what to do when timer finishes countdown
        if (timer === 0) {
            stopTimer(); //stops timer
            incorrect++; //increase wrong answers
            $("#timer").html("You're out of time!<br>");
            $("#question").html("The correct answer is: " + solution.correct);
        }
    }
        //create function to stop the timer
        function stopTimer() {
            clearInterval(timerInterval); //clears timer interval
            setTimeout(displayQuestion, 3000); //sets timeout of 3 seconds before displaying another question   
        }

    //create function for displaying a questions/answers set
    function displayQuestion() {
        //start the timer when question is displayed
        runTimer();
        //create variable for choosing random set from array
        var random = Math.floor(Math.random() * triviaArray.length);
        var solution = triviaArray[random];

        $("#question").html(solution.question); //displays random question
        //create for loop to go through answer set belonging to chosen random question to dynamically create buttons with each answer choice
        for (var i = 0; i < solution.answer.length; i++) {
            var answerButton = $("<button class='answerButton' id='button' data-name='" + solution.answer[i] + "'>" + solution.answer[i] + "</button><br>");
            $("#answers").append(answerButton); //displays the answer buttons
        }
        //create function to determine if user chose correct answer
        $(document).on("click", "#button", function () {
            //create variable to hold value of the button user clicked
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
    }

    //create function to display the first question when begin button is clicked
    function firstQuestion() {
        $("#begin").on("click", function () {
            $("#begin").hide();
            displayQuestion();
            timerInterval = setInterval(decrement, 1000);
        });
    }
    firstQuestion();
});