function result() {
    var questionOne = document.quiz.questionOne.value;
    var questionTwo = document.quiz.questionTwo.value;
    var questionThree = document.quiz.questionThree.value;
    var questionFour = document.quiz.questionFour.value;
    var questionFive = document.quiz.questionFive.value;
    var questionSix = document.quiz.questionSix.value;
    var questionSeven = document.quiz.questionSeven.value;
    var questionEight = document.quiz.questionEight.value;
    var questionNine = document.quiz.questionNine.value;
    var questionTen = document.quiz.questionTen.value;
    var questionEleven = document.quiz.questionEleven.value;
    var questionTwelve = document.quiz.questionTwelve.value;
    var questionThirteen = document.quiz.questionThirteen.value;
    var questionFourteen = document.quiz.questionFourteen.value;
    var questionFifteen = document.quiz.questionFifteen.value;
    var questionSixteen = document.quiz.questionSixteen.value;
    var questionSeventeen = document.quiz.questionSeventeen.value;
    var questionEighteen = document.quiz.questionEighteen.value;
    var questionNineteen = document.quiz.questionNineteen.value;
    var questionTwenty = document.quiz.questionTwenty.value;

    var count = 0;
  
    if (questionOne == "a") {
    }
    if (questionTwo == "b") {
      count += 1;
    }
    if (questionThree == "c") {
      count += 1;
    }
    if (questionFour == "a") {
      count += 1;
    }
    if (questionFive == "b") {
      count += 1;
    }
    if (questionSix == "c") {
      count += 1;
    }
    if (questionSeven == "a") {
      count += 1;
    }
    if (questionEight == "b") {
      count += 1;
    }
    if (questionNine == "a") {
      count += 1;
    }
    if (questionTen == "a") {
      count += 1;
    }
    if (questionEleven == "a") {
    }
    if (questionTwelve == "b") {
      count += 1;
    }
    if (questionThirteen == "c") {
      count += 1;
    }
    if (questionFourteen == "a") {
      count += 1;
    }
    if (questionFifteen == "b") {
      count += 1;
    }
    if (questionSixteen == "c") {
      count += 1;
    }
    if (questionSeventeen == "a") {
      count += 1;
    }
    if (questionEighteen == "b") {
      count += 1;
    }
    if (questionNineteen == "a") {
      count += 1;
    }
    if (questionTwenty == "a") {
      count += 1;
    }
    document.geElementById("marks").style.visibility = "visible";
  
    document.getElementById("mark").innerHTML =
      "You got " + count + "/50";
  
    $("#button").hide();
    $("#quiz").hide();
    $("#mark").show();
    event.preventDefault();
  }