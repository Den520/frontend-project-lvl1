#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer, randomNum,
} from '..';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNum1, firstNum2, firstDivider, firstResult) => {
  let num1 = firstNum1;
  let num2 = firstNum2;
  let divider = firstDivider;
  let result = firstResult;
  switch (true) {
    case (num1 || num2) % divider === 0:
      switch (true) {
        case (num1 && num2) % divider === 0:
          result *= divider;
          num1 /= divider;
          num2 /= divider;
          findGcd(num1, num2, divider, result);
          break;

        case num1 % divider === 0:
          num1 /= divider;
          findGcd(num1, num2, divider, result);
          break;

        case num2 % divider === 0:
          num2 /= divider;
          break;
        default:
      }
      return result;
    case divider < (num1 && num2):
      divider += 1;
      return findGcd(num1, num2, divider, result);

    default:
      return result;
  }
};

const questionGcd = (username) => {
  const num1 = randomNum();
  const num2 = randomNum();
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2, 2, 1);
  return resultOfAnswer(question, username, correctAnswer);
};

const gcdGame = () => gameEngine(ruleOfGame, questionGcd);

export default gcdGame;
