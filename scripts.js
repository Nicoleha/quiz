function result(event) {
    var questionOne = $("input:radio[name=questionOne]:checked").val();
    var questionTwo =$("input:radio[name=questionTwo]:checked").val();
    var questionThree = $("input:radio[name=questionThree]:checked").val();
    var questionFour =$("input:radio[name=questionFour]:checked").val();
    var questionFive = $("input:radio[name=questionFive]:checked").val();
    var questionSix =$("input:radio[name=questionSix]:checked").val();
    var questionSeven = $("input:radio[name=questionSeven]:checked").val();
    var questionEight = $("input:radio[name=questionEight]:checked").val();
    var questionNine = $("input:radio[name=questionNine]:checked").val();
    var questionTen = $("input:radio[name=questionTen]:checked").val();
    var questionEleven = $("input:radio[name=questionEleven]:checked").val();
    var questionTwelve = $("input:radio[name=questionTwelve]:checked").val();
    var questionThirteen = $("input:radio[name=questionThirteen]:checked").val();
    var questionFourteen = $("input:radio[name=questionFourteen]:checked").val();
    var questionFifteen = $("input:radio[name=questionFifteen]:checked").val();
    var questionSixteen = $("input:radio[name=questionSixteen]:checked").val();
    var questionSeventeen =$("input:radio[name=questionSeventeen]:checked").val();
    var questionEighteen = $("input:radio[name=questionEighteen]:checked").val();
    var questionNineteen = $("input:radio[name=questionNineteen]:checked").val();
    var questionTwenty = $("input:radio[name=questionTwenty]:checked").val();

    var count = 0;
  
    if (questionOne == "b") {
      count += 1;
    }
    if (questionTwo == "c") {
      count += 1;
    }
    if (questionThree == "b") {
      count += 1;
    }
    if (questionFour == "b") {
      count += 1;
    }
    if (questionFive == "a") {
      count += 1;
    }
    if (questionSix == "a") {
      count += 1;
    }
    if (questionSeven == "c") {
      count += 1;
    }
    if (questionEight == "c") {
      count += 1;
    }
    if (questionNine == "c") {
      count += 1;
    }
    if (questionTen == "a") {
      count += 1;
    }
    if (questionEleven == "b") {
    }
    if (questionTwelve == "a") {
      count += 1;
    }
    if (questionThirteen == "a") {
      count += 1;
    }
    if (questionFourteen == "c") {
      count += 1;
    }
    if (questionFifteen == "d") {
      count += 1;
    }
    if (questionSixteen == "c") {
      count += 1;
    }
    if (questionSeventeen == "d") {
      count += 1;
    }
    if (questionEighteen == "b") {
      count += 1;
    }
    if (questionNineteen == "b") {
      count += 1;
    }
    if (questionTwenty == "c") {
      count += 1;
    }
    document.getElementById("marks").styles.visibility = "visible";
  
    document.getElementById("mark").innerHTML ="You got " + count + "/20";
  
    $("#button").hide();
    $("#quiz").hide();
    $("#mark").show();
    event.preventDefault();
  }