const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", ],
    correct: "4"
  },
  {
    question: "Capital of France?",
    answers: ["Berlin", "Paris", "Madrid", ],
    correct: "Paris"
  },
  {
    question: "Which is a programming language?",
    answers: ["HTML", "CSS", "JavaScript", ],
    correct: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "jQuery", "CSS"],
    correct: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    answers: ["React", "Angular", "Django"],
    correct: "React"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: ["<link>", "<a>", "<href>"],
    correct: "<a>"
  },
  {
    question: "Which of the following headers is the largest and most important header?",
    answers: ["<h1>", "<h5>", "<h6>"],
    correct: "<h1>"
  },
    {
    question: "What is the correct tag name for a table-cell in HTML?",
    answers: ["<tc>", "<td>", "<tr>"],
    correct: "<td>"
  },
      {
    question: "What is the correct tag name for a table-row in HTML?",
    answers: ["<tr>", "<td>", "<th>"],
    correct: "<tr>"
  },
      {
    question: "What is the correct CSS property for styling the border of a table?",
    answers: ["<table-border>", "<table-style>", "<border>"],
    correct: "<border>"
  },
      {
    question: "What is the correct CSS property for styling the width of a table?",
    answers: ["<size>", "<table-size>", "<width>"],
    correct: "<width>"
  },
     {
    question: "True or False. To specify a table width, you are only allowed to use percentages as a value.?",
    answers: ["<true>", "<false>"],
    correct: "<false>"
  },
      {
    question: "What is the correct HTML attribute for specifying how many rows a cell should span?",
    answers: ["<span>", "<rowspan>", "<spanning>"],
    correct: "<rowspan>"
  },
      {
    question: "What is the correct tag name for list items?",
    answers: ["<item>", "<list-item>", "<li>"],
    correct: "<li>"
  },
      {
    question: "Which one is NOT a legal element in HTML?",
    answers: ["<<ol>>", "<dd>", "<ll>"],
    correct: "<ll>"
  }

];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function showQuestion() {
  clearInterval(timer);
  timeLeft = 10;
  timerEl.textContent = `Time: ${timeLeft}`;
  timer = setInterval(updateTimer, 1000);

  let q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  answersEl.innerHTML = '';
  q.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(answer);
    answersEl.appendChild(btn);
  });
}

function updateTimer() {
  timeLeft--;
  timerEl.textContent = `Time: ${timeLeft}`;
  if (timeLeft <= 0) {
    clearInterval(timer);
    nextQuestion();
  }
}

function selectAnswer(answer) {
  clearInterval(timer);
  let correctAnswer = questions[currentQuestionIndex].correct;
  if (answer === correctAnswer) {
    score++;
    scoreEl.textContent = `Score: ${score}`;
  }
  nextBtn.style.display = 'inline';
}

function nextQuestion() {
  currentQuestionIndex++;
  nextBtn.style.display = 'none';
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.textContent = "Quiz Finished!";
  answersEl.innerHTML = "";
  resultEl.textContent = `Your Score: ${score}/${questions.length}`;
  timerEl.textContent = "";
  nextBtn.style.display = 'none';
}

nextBtn.addEventListener('click', nextQuestion);

// Start quiz
showQuestion();