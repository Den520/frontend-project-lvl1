#!/usr/bin/env node
import {
  name, begin, repeat, resultOfAnswer, randomNum,
} from '../src/index';

const questionPrime = (username) => {
  const num = randomNum();
  let result = 0;
  let count = 1;
  const correctAnswer = () => {
    switch (true) {
      case (count > num):
        return result === 2 ? 'yes' : 'no';

      case (num % count === 0):
        result += 1;
        count += 1;
        return correctAnswer();

      default:
        count += 1;
        return correctAnswer();
    }
  };
  return resultOfAnswer(num, username, correctAnswer);
};

const fn = () => {
  begin('Answer "yes" if given number is prime. Otherwise answer "no".');
  const username = name();
  repeat(questionPrime, username);
};

export default fn;
