#!/usr/bin/env node
import { gameEngine, cons } from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'What number is missing in the progression?';

const gameProgression = () => {
  let currentNum = getRandomInt(1, 50);
  const intervalBetweenNumbers = getRandomInt(1, 50);
  const spacePlace = getRandomInt(0, 10);
  let listOfNumbers = '';
  const spaceNum = currentNum + ((spacePlace + 1) * intervalBetweenNumbers);
  for (let count = 0; count < 10; count += 1) {
    currentNum += intervalBetweenNumbers;
    if (spacePlace === count) {
      listOfNumbers += '.. ';
    } else {
      listOfNumbers += `${currentNum} `;
    }
  }
  const question = listOfNumbers;
  const correctAnswer = spaceNum;
  return cons(question, correctAnswer);
};

export default () => gameEngine(ruleOfGame, gameProgression);
