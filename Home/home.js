var questions = [
  {
    question: "Q1: HTML Stands for?",
    option1: "Hyper Text Markup Language",
    option2: "Hyper Tech Markup Language",
    option3: "Hyper Touch Markup Language",
    corrAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Q2: CSS Stands for?",
    option1: "Cascoding Style Sheets",
    option2: "Cascading Style Sheets",
    option3: "Cascating Style Sheets",
    corrAnswer: "Cascading Style Sheets",
  },
  {
    question: "Q3: Which tag is used for most large heading?",
    option1: "<h6>",
    option2: "<h2>",
    option3: "<h1>",
    corrAnswer: "<h1>",
  },
  {
    question: "Q4: Which tag is used to make element unique?",
    option1: "id",
    option2: "class  ",
    option3: "label",
    corrAnswer: "id",
  },
  {
    question: "Q5: Any element assigned with id, can be get in css?",
    option1: "by # tag",
    option2: "by @ tag",
    option3: "by & tag",
    corrAnswer: "by # tag",
  },
  {
    question: "Q6: CSS can be used with ______ methods?",
    option1: "8",
    option2: "3",
    option3: "4",
    corrAnswer: "3",
  },
  {
    question: "Q7: In JS variable types are ____________?",
    option1: "6",
    option2: "3",
    option3: "8",
    corrAnswer: "8",
  },
  {
    question: "Q8: In array we can use key name and value?",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
  {
    question: "Q9: toFixed() is used to define length of decimal?",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "True",
  },
  {
    question: "Q10: push() method is used to add element in the start of array?",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
];
var button = document.getElementById("btn");
var question = document.getElementById("ques");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var index = 0;
var score = 0;

function nextQuestion() {
  var options = document.getElementsByClassName("options");

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      var selectedOption = options[i].value;
      var getOption = questions[index - 1][`option${selectedOption}`];
      var corrAnswer = questions[index - 1]["corrAnswer"];

      if (getOption === corrAnswer) {
        score++;
      }

      console.log(getOption);
    }

    options[i].checked = false;
  }
  button.disabled = true;

  if (index > questions.length - 1) {

    if ((score / questions.length) * 100 <= 50) {
      Swal.fire({
        title: "very bad!",
        text: `Your score is ${((score / questions.length) * 100).toFixed(2)}`,
        // icon: "success",
      });
    }

    else if ((score / questions.length) * 100 <= 60) {
      Swal.fire({
        title: "bad!",
        text: `Your score is ${((score / questions.length) * 100).toFixed(2)}`,
        // icon: "success",
      });
    }

    else if ((score / questions.length) * 100 <= 70) {
      Swal.fire({
        title: "Good!",
        text: `Your score is ${((score / questions.length) * 100).toFixed(2)}`,
        // icon: "success",
      });
    }

    else if ((score / questions.length) * 100 <= 100) {
      Swal.fire({
        title: "Very Good!",
        text: `Your score is ${((score / questions.length) * 100).toFixed(2)}`,
        // icon: "success",
      });
    }

  } else {
    question.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
    index++;
  }
}




function clicked() {
  button.disabled = false;
}