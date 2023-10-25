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
      (currentQuestion / questions.lenght) * 100
    );
    document.querySelector(
      ".progress--bar").style.width = `${progressBarPercentage}%`;
    document.querySelector(".scoreArea").style.display = "none";
    document.querySelector(".questionArea").style.display = "block";
    document.querySelector(".question").textContent = q.question;
    document.querySelector(".options").innerHTML = "";
    let optionsHtml = "";
    for (let i = 0; i < q.options.length; i++) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${
        parseInt(i) + 1}</span>${q.options[i]}</div>`;
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
  if (questions[currentQuestion].answer === questaoClicada);
  correctAnswers++;
}
{
  currentQuestion++;
  showQuestion();
}

function finishQuiz() {
  // Criar variável de pontos baseado na divisão entre respostas corretas e quantidade de questões. Use a função Math.floor para arredondar.
  // Implementar condicionais para inserir mensagem e cor do placar de acordo com a pontuação.
  // Usar condicional if e condicionais <, <=, >, >=
  // Inserir a pontuação em .scorePct e o texto em .scoreText2
  // Ocultar a .questionArea e exibir a .scoreArea
  // Deixar a .progress--bar em 100%
}

function resetEvent() {
  // Redefina os valores de correctAnswers e currentQuestion para 0
  // Chame a função showQuestion
}
