#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer, randomNum, randomInRange,
} from '..';

const ruleOfGame = 'What number is missing in the progression?';

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
  const question = result;
  const correctAnswer = spaceNum;
  return resultOfAnswer(question, username, correctAnswer);
};

const progressionGame = () => gameEngine(ruleOfGame, questionProgression);

export default progressionGame;
