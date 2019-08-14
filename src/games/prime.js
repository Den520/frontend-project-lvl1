#!/usr/bin/env node
import {
  gameEngine, resultOfAnswer, randomNum,
} from '..';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num, firstResult, firstCount) => {
  let result = firstResult;
  let count = firstCount;
  switch (true) {
    case (count > num):
      return result === 2 ? 'yes' : 'no';

    case (num % count === 0):
      result += 1;
      count += 1;
      return isPrime(num, result, count);

    default:
      count += 1;
      return isPrime(num, result, count);
  }
};

const questionPrime = (username) => {
  const num = randomNum();
  const question = num;
  const correctAnswer = isPrime(num, 0, 1);
  return resultOfAnswer(question, username, correctAnswer);
};

const primeGame = () => gameEngine(ruleOfGame, questionPrime);

export default primeGame;
