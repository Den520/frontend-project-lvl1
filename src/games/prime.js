#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer,
} from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let result = 0;
  for (let count = 1; num >= count; count += 1) {
    if (num % count === 0) {
      result += 1;
    }
  }
  return result === 2;
};

const questionPrime = (username) => {
  const num = getRandomInt(1, 50);
  const question = num;
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  return resultOfAnswer(question, username, correctAnswer);
};

export default () => gameEngine(ruleOfGame, questionPrime);
