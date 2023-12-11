const questions = [
  {
    question: 'How many elements are in the periodic table?',
    options: ['A. 116', 'B. 117', 'C. 118', 'D. 119'],
    answer: 'C',
  },
  {
    question: 'Which animal lays the largest eggs?',
    options: ['A. Whale', 'B. Crocodile', 'C. Elephant', 'D. Ostrich'],
    answer: 'D',
  },
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ['A. Nitrogen', 'B. Oxygen', 'C. Carbon-Dioxide', 'D. Hydrogen'],
    answer: 'A',
  },
  {
    question: 'How many bones are in the human body?',
    options: ['A. 206', 'B. 207', 'C. 208', 'D. 209'],
    answer: 'A',
  },
  {
    question: 'Which planet in the solar system is the hottest?',
    options: ['A. Mercury', 'B. Venus', 'C. Earth', 'D. Mars'],
    answer: 'B',
  },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');

function loadQuestion() {
  const currentQuizQuestion = questions[currentQuestion];
  questionElement.innerText = currentQuizQuestion.question;

  optionsContainer.innerHTML = '';
  currentQuizQuestion.options.forEach((option) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.addEventListener('click', () => checkAnswer(option[0]));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(guess) {
  const currentQuizQuestion = questions[currentQuestion];
  if (guess === currentQuizQuestion.answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionElement.innerText = 'Quiz Completed!';
  optionsContainer.innerHTML = '';
  document.getElementById('next-btn').style.display = 'none';
  scoreElement.innerText = `Your Score: ${score} / ${questions.length}`;
}

function nextQuestion() {
  loadQuestion();
  document.getElementById('next-btn').style.display = 'none';
}

// Start the quiz
loadQuestion();
