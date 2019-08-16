#!/usr/bin/env node
import { gameEngine, cons } from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const questionEven = () => {
  const num = getRandomInt(1, 50);
  const question = num;
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameEngine(ruleOfGame, questionEven);
