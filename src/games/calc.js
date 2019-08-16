#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer,
} from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'What is the result of the expression?';

const getRandomSign = () => {
  const allSigns = '+-*';
  return allSigns[getRandomInt(0, allSigns.length)];
};

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
  const sign = getRandomSign();
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = calculator(sign, num1, num2);
  return resultOfAnswer(question, username, correctAnswer);
};

export default () => gameEngine(ruleOfGame, questionCalc);
