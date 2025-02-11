# Multiplication Quiz App - Code Guide

## Overview

This guide explains how the multiplication quiz app works. The app tests users on multiplication tables from 2 to 12.

## Core Components

### Data Structure

```javascript
const questions = [
  { question: 'What is 2 multiplied by 1?', answer: 2 },
  // ... more questions
];
```

- Questions are stored in an array of objects
- Each object contains a question and its correct answer

### Important Variables

```javascript
let curQues; // Current question being displayed
let curAns; // Current answer to check against
let score = 0; // Player's current score
```

## Main Functions

### 1. Question Generation (`getQuestions`)

```javascript
const getQuestions = function (arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  // Selects and displays a random question
};
```

- Randomly selects a question from the array
- Updates display with new question
- Returns correct answer for validation

### 2. Answer Validation (`calcAnswer`)

```javascript
const calcAnswer = function () {
  const choice = +userAnswer.value;
  // Checks answer and updates score
};
```

- Validates user's answer against correct answer
- Increments score for correct answers
- Decrements score for wrong answers (minimum 0)
- Displays appropriate feedback

### 3. Game Control

#### Starting the Game (`startGame`)

```javascript
const startGame = function () {
  // Initializes game state and starts question timer
};
```

- Resets score to 0
- Shows new question every 10 seconds
- Ends game after 100 seconds

#### Resetting the Game (`resetGame`)

```javascript
const resetGame = function () {
  // Stops current game and starts a new one
};
```

- Clears current game state
- Starts fresh game

## Game Rules

1. Player has 10 seconds to answer each question
2. Correct answer: +1 point
3. Wrong answer: -1 point (minimum score is 0)
4. Game lasts 100 seconds total
5. Can be reset at any time using reset button

## User Interface Elements

- Score display
- Question display
- Answer input field
- Submit button
- Reset button
