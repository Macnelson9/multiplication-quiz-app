'use strict';

// Questions array
const questions = [
  { question: 'What is 2 multiplied by 1?', answer: 2 },
  { question: 'What is 2 multiplied by 2?', answer: 4 },
  { question: 'What is 2 multiplied by 3?', answer: 6 },
  { question: 'What is 2 multiplied by 4?', answer: 8 },
  { question: 'What is 2 multiplied by 5?', answer: 10 },
  { question: 'What is 2 multiplied by 6?', answer: 12 },
  { question: 'What is 2 multiplied by 7?', answer: 14 },
  { question: 'What is 2 multiplied by 8?', answer: 16 },
  { question: 'What is 2 multiplied by 9?', answer: 18 },
  { question: 'What is 2 multiplied by 10?', answer: 20 },
  { question: 'What is 2 multiplied by 11?', answer: 22 },
  { question: 'What is 2 multiplied by 12?', answer: 24 },

  { question: 'What is 3 multiplied by 1?', answer: 3 },
  { question: 'What is 3 multiplied by 2?', answer: 6 },
  { question: 'What is 3 multiplied by 3?', answer: 9 },
  { question: 'What is 3 multiplied by 4?', answer: 12 },
  { question: 'What is 3 multiplied by 5?', answer: 15 },
  { question: 'What is 3 multiplied by 6?', answer: 18 },
  { question: 'What is 3 multiplied by 7?', answer: 21 },
  { question: 'What is 3 multiplied by 8?', answer: 24 },
  { question: 'What is 3 multiplied by 9?', answer: 27 },
  { question: 'What is 3 multiplied by 10?', answer: 30 },
  { question: 'What is 3 multiplied by 11?', answer: 33 },
  { question: 'What is 3 multiplied by 12?', answer: 36 },

  { question: 'What is 4 multiplied by 1?', answer: 4 },
  { question: 'What is 4 multiplied by 2?', answer: 8 },
  { question: 'What is 4 multiplied by 3?', answer: 12 },
  { question: 'What is 4 multiplied by 4?', answer: 16 },
  { question: 'What is 4 multiplied by 5?', answer: 20 },
  { question: 'What is 4 multiplied by 6?', answer: 24 },
  { question: 'What is 4 multiplied by 7?', answer: 28 },
  { question: 'What is 4 multiplied by 8?', answer: 32 },
  { question: 'What is 4 multiplied by 9?', answer: 36 },
  { question: 'What is 4 multiplied by 10?', answer: 40 },
  { question: 'What is 4 multiplied by 11?', answer: 44 },
  { question: 'What is 4 multiplied by 12?', answer: 48 },

  { question: 'What is 5 multiplied by 1?', answer: 5 },
  { question: 'What is 5 multiplied by 2?', answer: 10 },
  { question: 'What is 5 multiplied by 3?', answer: 15 },
  { question: 'What is 5 multiplied by 4?', answer: 20 },
  { question: 'What is 5 multiplied by 5?', answer: 25 },
  { question: 'What is 5 multiplied by 6?', answer: 30 },
  { question: 'What is 5 multiplied by 7?', answer: 35 },
  { question: 'What is 5 multiplied by 8?', answer: 40 },
  { question: 'What is 5 multiplied by 9?', answer: 45 },
  { question: 'What is 5 multiplied by 10?', answer: 50 },
  { question: 'What is 5 multiplied by 11?', answer: 55 },
  { question: 'What is 5 multiplied by 12?', answer: 60 },

  { question: 'What is 6 multiplied by 1?', answer: 6 },
  { question: 'What is 6 multiplied by 2?', answer: 12 },
  { question: 'What is 6 multiplied by 3?', answer: 18 },
  { question: 'What is 6 multiplied by 4?', answer: 24 },
  { question: 'What is 6 multiplied by 5?', answer: 30 },
  { question: 'What is 6 multiplied by 6?', answer: 36 },
  { question: 'What is 6 multiplied by 7?', answer: 42 },
  { question: 'What is 6 multiplied by 8?', answer: 48 },
  { question: 'What is 6 multiplied by 9?', answer: 54 },
  { question: 'What is 6 multiplied by 10?', answer: 60 },
  { question: 'What is 6 multiplied by 11?', answer: 66 },
  { question: 'What is 6 multiplied by 12?', answer: 72 },

  { question: 'What is 7 multiplied by 1?', answer: 7 },
  { question: 'What is 7 multiplied by 2?', answer: 14 },
  { question: 'What is 7 multiplied by 3?', answer: 21 },
  { question: 'What is 7 multiplied by 4?', answer: 28 },
  { question: 'What is 7 multiplied by 5?', answer: 35 },
  { question: 'What is 7 multiplied by 6?', answer: 42 },
  { question: 'What is 7 multiplied by 7?', answer: 49 },
  { question: 'What is 7 multiplied by 8?', answer: 56 },
  { question: 'What is 7 multiplied by 9?', answer: 63 },
  { question: 'What is 7 multiplied by 10?', answer: 70 },
  { question: 'What is 7 multiplied by 11?', answer: 77 },
  { question: 'What is 7 multiplied by 12?', answer: 84 },

  { question: 'What is 8 multiplied by 1?', answer: 8 },
  { question: 'What is 8 multiplied by 2?', answer: 16 },
  { question: 'What is 8 multiplied by 3?', answer: 24 },
  { question: 'What is 8 multiplied by 4?', answer: 32 },
  { question: 'What is 8 multiplied by 5?', answer: 40 },
  { question: 'What is 8 multiplied by 6?', answer: 48 },
  { question: 'What is 8 multiplied by 7?', answer: 56 },
  { question: 'What is 8 multiplied by 8?', answer: 64 },
  { question: 'What is 8 multiplied by 9?', answer: 72 },
  { question: 'What is 8 multiplied by 10?', answer: 80 },
  { question: 'What is 8 multiplied by 11?', answer: 88 },
  { question: 'What is 8 multiplied by 12?', answer: 96 },

  { question: 'What is 9 multiplied by 1?', answer: 9 },
  { question: 'What is 9 multiplied by 2?', answer: 18 },
  { question: 'What is 9 multiplied by 3?', answer: 27 },
  { question: 'What is 9 multiplied by 4?', answer: 36 },
  { question: 'What is 9 multiplied by 5?', answer: 45 },
  { question: 'What is 9 multiplied by 6?', answer: 54 },
  { question: 'What is 9 multiplied by 7?', answer: 63 },
  { question: 'What is 9 multiplied by 8?', answer: 72 },
  { question: 'What is 9 multiplied by 9?', answer: 81 },
  { question: 'What is 9 multiplied by 10?', answer: 90 },
  { question: 'What is 9 multiplied by 11?', answer: 99 },
  { question: 'What is 9 multiplied by 12?', answer: 108 },

  { question: 'What is 10 multiplied by 1?', answer: 10 },
  { question: 'What is 10 multiplied by 2?', answer: 20 },
  { question: 'What is 10 multiplied by 3?', answer: 30 },
  { question: 'What is 10 multiplied by 4?', answer: 40 },
  { question: 'What is 10 multiplied by 5?', answer: 50 },
  { question: 'What is 10 multiplied by 6?', answer: 60 },
  { question: 'What is 10 multiplied by 7?', answer: 70 },
  { question: 'What is 10 multiplied by 8?', answer: 80 },
  { question: 'What is 10 multiplied by 9?', answer: 90 },
  { question: 'What is 10 multiplied by 10?', answer: 100 },
  { question: 'What is 10 multiplied by 11?', answer: 110 },
  { question: 'What is 10 multiplied by 12?', answer: 120 },

  { question: 'What is 11 multiplied by 1?', answer: 11 },
  { question: 'What is 11 multiplied by 2?', answer: 22 },
  { question: 'What is 11 multiplied by 3?', answer: 33 },
  { question: 'What is 11 multiplied by 4?', answer: 44 },
  { question: 'What is 11 multiplied by 5?', answer: 55 },
  { question: 'What is 11 multiplied by 6?', answer: 66 },
  { question: 'What is 11 multiplied by 7?', answer: 77 },
  { question: 'What is 11 multiplied by 8?', answer: 88 },
  { question: 'What is 11 multiplied by 9?', answer: 99 },
  { question: 'What is 11 multiplied by 10?', answer: 110 },
  { question: 'What is 11 multiplied by 11?', answer: 121 },
  { question: 'What is 11 multiplied by 12?', answer: 132 },

  { question: 'What is 12 multiplied by 1?', answer: 12 },
  { question: 'What is 12 multiplied by 2?', answer: 24 },
  { question: 'What is 12 multiplied by 3?', answer: 36 },
  { question: 'What is 12 multiplied by 4?', answer: 48 },
  { question: 'What is 12 multiplied by 5?', answer: 60 },
  { question: 'What is 12 multiplied by 6?', answer: 72 },
  { question: 'What is 12 multiplied by 7?', answer: 84 },
  { question: 'What is 12 multiplied by 8?', answer: 96 },
  { question: 'What is 12 multiplied by 9?', answer: 108 },
  { question: 'What is 12 multiplied by 10?', answer: 120 },
  { question: 'What is 12 multiplied by 11?', answer: 132 },
  { question: 'What is 12 multiplied by 12?', answer: 144 },
];

// Selected elements
const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const statusEl = document.getElementById('status');
const userAnswer = document.getElementById('answer');
const submitBtn = document.getElementById('submit__btn');
const resetBtn = document.getElementById('reset__btn');

let curQues;
let curAns;
let score = 0;

// 1. Get the questions from the arr randomly
const getQuestions = function (arr) {
  let randomNum = Math.floor(Math.random() * arr.length);

  for (let i = 0; i < questions.length; i++) {
    if (randomNum === i) {
      curQues = questions[i].question;
      curAns = questions[i].answer;
      questionEl.textContent = `${curQues}`;
    }
  }

  return curAns;
};

// 2. Validate user answer
const calcAnswer = function () {
  const choice = +userAnswer.value;

  if (choice === curAns) {
    score += 1; // Increment the score
    scoreEl.textContent = `Score: ${score}`;
    questionEl.textContent = `Loading...`;
    alert('You are correct');
  } else {
    score = score <= 0 ? 0 : score - 1; // Decrement the score but not below 0
    scoreEl.textContent = `Score: ${score}`;
    questionEl.textContent = `Loading...`;
    alert('You are wrong!, try again!');
  }

  // Clear the input field after submission
  userAnswer.value = '';
};

submitBtn.addEventListener('click', calcAnswer);

// Function to start/restart the game
const startGame = function () {
  score = 0;
  scoreEl.textContent = 'Score: 0';
  questionEl.textContent = 'Loading...';
  intervalID = setInterval(getQuestions, 10000, questions);
  setTimeout(() => {
    clearInterval(intervalID);
    questionEl.textContent = 'Game Over!';
    questionEl.classList.add('game-over');
  }, 100000);
};

// Function to handle reset
const resetGame = function () {
  clearInterval(intervalID);
  questionEl.classList.remove('game-over');
  startGame();
};

// Event listener for reset button
resetBtn.addEventListener('click', resetGame);

startGame();
