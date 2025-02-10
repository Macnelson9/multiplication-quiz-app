'use strict';

const questions = [
  {
    question: 'What is 2 multiplied by 1?',
    answer: 2,
  },
  {
    question: 'What is 2 multiplied by 2?',
    answer: 4,
  },
  {
    question: 'What is 2 multiplied by 3?',
    answer: 6,
  },
  {
    question: 'What is 2 multiplied by 4?',
    answer: 8,
  },
  {
    question: 'What is 2 multiplied by 5?',
    answer: 10,
  },
  {
    question: 'What is 2 multiplied by 6?',
    answer: 12,
  },
  {
    question: 'What is 2 multiplied by 7?',
    answer: 14,
  },
  {
    question: 'What is 2 multiplied by 8?',
    answer: 16,
  },
  {
    question: 'What is 2 multiplied by 9?',
    answer: 18,
  },
  {
    question: 'What is 2 multiplied by 10?',
    answer: 20,
  },
  {
    question: 'What is 2 multiplied by 11?',
    answer: 22,
  },
  {
    question: 'What is 2 multiplied by 12?',
    answer: 24,
  },
];

// Selected elements
const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const statusEl = document.getElementById('status');
const userAnswer = document.getElementById('answer');
const submitBtn = document.getElementById('submit__btn');

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

// getQuestions(questions);

let intervalID = setInterval(getQuestions, 10000, questions);
// 2. Validate user answer
const calcAnswer = function () {
  const choice = +userAnswer.value;

  if (choice === curAns) {
    scoreEl.textContent = `Score: ${score + 1}`;
    alert('You are correct');
  } else {
    scoreEl.textContent = `Score: ${score <= 0 ? (score = 0) : score - 1}`;
    alert('You are wrong!, try again!');
  }
};

// 3. Clear user answer, question and display new one
submitBtn.addEventListener('click', calcAnswer);
