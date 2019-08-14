#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer, randomNum,
} from '..';

const ruleOfGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const questionEven = (username) => {
  const number = randomNum();
  const question = number;
  const correctAnswer = isEven(number);
  return resultOfAnswer(question, username, correctAnswer);
};
const evenGame = () => gameEngine(ruleOfGame, questionEven);

export default evenGame;
