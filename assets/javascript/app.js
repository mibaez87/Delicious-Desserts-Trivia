$(document).ready(function () {
    var one = {
        question: "Is this working?",
        answer: ["yes", "no", "almost", "not even close"]
    }

    var two = {
        question: "Are you seeing any change?",
        answer: ["none", "minor", "major", "not today"]
    }

    function first (){
    $("#question").html(one.question);
    $("#optionOne").html(one.answer[0]);
    $("#optionTwo").html(one.answer[1]);
    $("#optionThree").html(one.answer[2]);
    $("#optionFour").html(one.answer[3]);

    $("#optionOne").on("click", function () {
        $("#optionTwo").html("Correct!");
        $("#optionOne, #optionThree, #optionFour").empty();
    });

    $("#optionTwo, #optionThree, #optionFour").on("click", function (){
        $("#optionOne").html("Good guess!");
        $("#optionThree").html("The correct answer is 'yes'");
        $("#optionTwo, #optionFour").empty();
    });
    }

    function second (){
    $(".container").on("click", function(){
        $("#question").html(two.question);
        $("#optionOne").html(two.answer[0]);
        $("#optionTwo").html(two.answer[1]);
        $("#optionThree").html(two.answer[2]);
        $("#optionFour").html(two.answer[3]);
    });

    $("#optionThree").on("click", function () {
        $("#optionTwo").html("Correct!");
        $("#optionOne, #optionThree, #optionFour").empty();
    });
    }
    first ();
    second ();
});