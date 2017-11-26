$(document).ready(function () {
    //create object with variable for question and answer choices
    var one = {
        question: "Is this working?",
        answer: ["yes", "no", "almost", "not even close"]
    }
    //create a second object with variable for question and answer choices
    var two = {
        question: "Are you seeing any change?",
        answer: ["none", "minor", "major", "not today"]
    }
    //create function for first question
    function first() {
        //make the question and answer choices appear on the screen
        $("#question").html(one.question);
        $("#optionOne").html(one.answer[0]);
        $("#optionTwo").html(one.answer[1]);
        $("#optionThree").html(one.answer[2]);
        $("#optionFour").html(one.answer[3]);
        //create on click function for when the correct answer is chosen
        $("#optionOne").on("click", function () {
            $("#optionTwo").html("Correct!");
            $("#optionOne, #optionThree, #optionFour").empty();
        });
        //create on click function for when the wrong answer is chosen
        $("#optionTwo, #optionThree, #optionFour").on("click", function () {
            $("#optionOne").html("Good guess!");
            $("#optionThree").html("The correct answer is 'yes'");
            $("#optionTwo, #optionFour").empty();
        });
    }
    //create function for second question
    function second() {
        $(".container").on("click", function () {
            $("#question").html(two.question);
            $("#optionOne").html(two.answer[0]);
            $("#optionTwo").html(two.answer[1]);
            $("#optionThree").html(two.answer[2]);
            $("#optionFour").html(two.answer[3]);
        });
        //create on click function for when the correct answer is chosen
        $("#optionThree").on("click", function () {
            $("#optionTwo").html("Correct!");
            $("#optionOne, #optionThree, #optionFour").empty();
        });
        //create on click function for when the wrong answer is chosen
        $("#optionOne, #optionTwo, #optionFour").on("click", function () {
            $("#optionOne").html("Good guess!");
            $("#optionThree").html("The correct answer is 'major'");
            $("#optionTwo, #optionFour").empty();
        });
    }
    //call each function and the questions/answers change
first();
second();
});
