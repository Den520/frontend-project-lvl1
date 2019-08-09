#!/usr/bin/env node
import {
  name, begin, repeat, resultOfAnswer, randomNum, randomInRange,
} from '../src/index';

const questionCalc = (username) => {
  const sign = '+-*'[randomInRange(3)];
  const num1 = randomNum();
  const num2 = randomNum();
  const correctAnswer = () => {
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
  return resultOfAnswer(`${num1} ${sign} ${num2}`, username, correctAnswer);
};

const fn = () => {
  begin('What is the result of the expression?');
  const username = name();
  repeat(questionCalc, username);
};

export default fn;
