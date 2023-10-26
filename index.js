//Dados iniciais
let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();

//Evento Reset
document
  .querySelector(".scoreArea button")
  .addEventListener("click", resetEvent);

//Funções
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];
    let progressBarPercentage = Math.floor(
      (currentQuestion / questions.length) * 100
    );
    document.querySelector(".progress--bar"
    ).style.width = `${progressBarPercentage}%`;
    document.querySelector(".scoreArea").style.display = "none";
    document.querySelector(".questionArea").style.display = "block";
    document.querySelector(".question").textContent = q.question;
    document.querySelector(".options").innerHTML = "";
    let optionsHtml = "";
    for (let i = 0; i < q.options.length; i++) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${
        parseInt(i) + 1
      }</span>${q.options[i]}</div>`;
    }
    document.querySelector(".options").innerHTML = optionsHtml;
    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    finishQuiz();
  }
}
function optionClickEvent(e) {
  let questaoClicada = parseInt(e.target.getAttribute("data-op"));
  if (questions[currentQuestion].answer === questaoClicada) {
    correctAnswers++;
  }

  currentQuestion++;
  showQuestion();
}
function finishQuiz() {
  let score = Math.floor((correctAnswers / questions.length) * 100);
  let scoreColor = "white";
  let message = "";
  if (score > 80 && score >= 90) {
    scoreColor = "green";
    message = "Perfeito!!";
  } else if (score > 70 && score >= 80) {
    scoreColor = "blue";
    message = "Muito bem!";
  } else if (score > 60 && score >= 70) {
    scoreColor = "yellow";
    message = "Foi bem";
  } else if (score > 50 && score >= 60) {
    scoreColor = "orange";
    message = "Dá para melhorar hein";
  } else {
    scoreColor = "red";
    message = "Opss...pelo menos tentou né";
  }
  document.querySelector(
    ".scoreText2").textContent = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;
  document.querySelector(".scorePct").textContent = `${score}%`;
  document.querySelector(".scoreText1").textContent = message;
  document.querySelector(".questionArea").style.display = "none";
  document.querySelector(".scoreArea").style.display = "block";
  document.querySelector(".progress--bar").style.width = `100%`;
}
function resetEvent() {
  correctAnswers = 0;
  currentQuestion = 0;
  showQuestion();
}
