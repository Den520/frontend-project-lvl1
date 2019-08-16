#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer,
} from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const questionEven = (username) => {
  const num = getRandomInt(1, 50);
  const question = num;
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';
  return resultOfAnswer(question, username, correctAnswer);
};

export default () => gameEngine(ruleOfGame, questionEven);
