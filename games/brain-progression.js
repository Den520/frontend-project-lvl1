#!/usr/bin/env node
import {
  name, begin, repeat, resultOfAnswer, randomNum, randomInRange,
} from '../src/index';

const questionProgression = (username) => {
  let num1 = randomNum();
  const interval = randomNum();
  const space = randomInRange(10);
  let result = '';
  const spaceNum = num1 + ((space + 1) * interval);
  for (let count = 0; count < 10; count += 1) {
    num1 += interval;
    if (space === count) {
      result += '.. ';
    } else {
      result += `${num1} `;
    }
  }
  const correctAnswer = () => spaceNum;
  return resultOfAnswer(result, username, correctAnswer);
};

const fn = () => {
  begin('What number is missing in the progression?');
  const username = name();
  repeat(questionProgression, username);
};

export default fn;
