#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer,
} from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'What number is missing in the progression?';

const questionProgression = (username) => {
  let num1 = getRandomInt(1, 50);
  const interval = getRandomInt(1, 50);
  const space = getRandomInt(0, 10);
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
  const question = result;
  const correctAnswer = spaceNum;
  return resultOfAnswer(question, username, correctAnswer);
};

export default () => gameEngine(ruleOfGame, questionProgression);
