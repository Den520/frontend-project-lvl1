#!/usr/bin/env node
import {
  name, begin, repeat, resultOfAnswer, randomNum,
} from '..';

const questionEven = (username) => {
  const num = randomNum();
  const correctAnswer = () => {
    let result = '';
    if (num % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };
  return resultOfAnswer(num, username, correctAnswer);
};

export default () => {
  begin('Answer "yes" if number even otherwise answer "no".');
  const username = name();
  repeat(questionEven, username);
};
