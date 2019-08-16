#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer,
} from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  const findGcd = (num1, num2, divider, result) => {
    switch (true) {
      case (num1 || num2) % divider === 0:
        switch (true) {
          case (num1 && num2) % divider === 0:
            return findGcd(num1 / divider, num2 / divider, divider, result * divider);

          case num1 % divider === 0:
            return findGcd(num1 / divider, num2, divider, result);

          case num2 % divider === 0:
            return findGcd(num1, num2 / divider, divider, result);
          default:
        }
        return result;
      case divider < (num1 && num2):
        return findGcd(num1, num2, divider + 1, result);

      default:
        return result;
    }
  };
  return findGcd(number1, number2, 2, 1);
};

const questionGcd = (username) => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return resultOfAnswer(question, username, correctAnswer);
};

export default () => gameEngine(ruleOfGame, questionGcd);
