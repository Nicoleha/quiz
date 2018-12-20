function result() {
    var one = document.quiz.one.value;
    var two = document.quiz.two.value;
    var three = document.quiz.three.value;
    var four = document.quiz.four.value;
    var five = document.quiz.five.value;
    var six = document.quiz.six.value;
    var seven = document.quiz.seven.value;
    var eight = document.quiz.eight.value;
    var nine = document.quiz.nine.value;
    var ten = document.quiz.ten.value;
    var count = 0;
  
    if (one == "2") {
      count += 5;
    }
    if (two == "2") {
      count += 5;
    }
    if (three == "3") {
      count += 5;
    }
    if (four == "3") {
      count += 5;
    }
    if (five == "4") {
      count += 5;
    }
    if (six == "2") {
      count += 5;
    }
    if (seven == "2") {
      count += 5;
    }
    if (eight == "3") {
      count += 5;
    }
    if (nine == "2") {
      count += 5;
    }
    if (ten == "4") {
      count += 5;
    }
    document.getElementById("marks").style.visibility = "visible";
  
    document.getElementById("mark").innerHTML =
      "You got " + count + "/50";
  
    $("#button").hide();
    $("#quiz").hide();
    $("#number_count").show();
    event.preventDefault();
  }