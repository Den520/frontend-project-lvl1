#!/usr/bin/env node
import {
  name, begin, repeat, resultOfAnswer, randomNum,
} from '..';

const questionGcd = (username) => {
  let num1 = randomNum();
  let num2 = randomNum();
  let divider = 2;
  let result = 1;
  const correctAnswer = () => {
    switch (true) {
      case (num1 || num2) % divider === 0:
        switch (true) {
          case (num1 && num2) % divider === 0:
            result *= divider;
            num1 /= divider;
            num2 /= divider;
            correctAnswer();
            break;

          case num1 % divider === 0:
            num1 /= divider;
            correctAnswer();
            break;

          case num2 % divider === 0:
            num2 /= divider;
            break;
          default:
        }
        return result;
      case divider < (num1 && num2):
        divider += 1;
        return correctAnswer();

      default:
    }
    return result;
  };
  return resultOfAnswer(`${num1} ${num2}`, username, correctAnswer);
};

const fn = () => {
  begin('Find the greatest common divisor of given numbers.');
  const username = name();
  repeat(questionGcd, username);
};

export default fn;
