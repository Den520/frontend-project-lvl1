#!/usr/bin/env node
import { gameEngine, cons } from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'What number is missing in the progression?';

const questionProgression = () => {
  let num = getRandomInt(1, 50);
  const intervalBetweenNumbers = getRandomInt(1, 50);
  const spacePlace = getRandomInt(0, 10);
  let result = '';
  const spaceNum = num + ((spacePlace + 1) * intervalBetweenNumbers);
  for (let count = 0; count < 10; count += 1) {
    num += intervalBetweenNumbers;
    if (spacePlace === count) {
      result += '.. ';
    } else {
      result += `${num} `;
    }
  }
  const question = result;
  const correctAnswer = spaceNum;
  return cons(question, correctAnswer);
};

export default () => gameEngine(ruleOfGame, questionProgression);
