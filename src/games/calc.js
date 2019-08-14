#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer, randomNum, randomInRange,
} from '..';

const ruleOfGame = 'What is the result of the expression?';

const calculator = (sign, num1, num2) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    default:
  }
  return result;
};

const questionCalc = (username) => {
  const sign = '+-*'[randomInRange(3)];
  const num1 = randomNum();
  const num2 = randomNum();
  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = calculator(sign, num1, num2);
  return resultOfAnswer(question, username, correctAnswer);
};

const calcGame = () => gameEngine(ruleOfGame, questionCalc);

export default calcGame;
