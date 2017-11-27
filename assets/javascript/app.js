$(document).ready(function () {
    //create array of each set of questions and answers
    var triviaArray = [{
            question: "Petit Gateau is French for:",
            answer: ["small dessert", "small chocolate", "small cake", "tiny cake"]
        },
        {
            question: "A perfectly tempered chocolate is known for its:",
            answer: ["shine", "snap", "smell", "color"]
        },
        {
            question: "This popular dessert was originally made without filling:",
            answer: ["macaron", "oreo", "whoopie pie", "eclair"]
        },
        {
            question: "Which ingredient is NOT required to bake a cake?",
            answer: ["butter", "sugar", "eggs", "flour"]
        },
        {
            question: "Which of these is America's favorite pie?",
            answer: ["pumpkin", "apple", "pizza", "cherry"]
        },
        {
            question: "Where was ice cream first made?",
            answer: ["USA", "China", "Italy", "France"]
        },
        {
            question: "Where was the first chocolate chip cookie made?",
            answer: ["USA", "China", "Italy", "France"]
        }
    ]
    //create variable for choosing random set from array
    var random = Math.floor(Math.random() * triviaArray.length);
    var solution = triviaArray[random];
    //create function for displaying a questions/answers set
    function displayQuestion (){
    $("#question").html(solution.question);
    $("#optionOne").html(solution.answer[0]);
    $("#optionTwo").html(solution.answer[1]);
    $("#optionThree").html(solution.answer[2]);
    $("#optionFour").html(solution.answer[3]);
    }
    //create function to display the first question when begin button is clicked
    $("#begin").on("click", function (){
        $("#begin").hide();
        displayQuestion ();
    });
    //create function to determine if user clicked correct answer
    // $("#optionOne, #optionTwo, #optionThree, #optionFour").on("click", function(){
    //     if (this.id === true){
    //         console.log(this.id);
    //         console.log(true);
            // $("#optionOne").html("Correct!");
    //     }
    // });
});