import { gameEngine, cons } from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let count = 2; num === 1 || count !== num; count += 1) {
    if (num === 1 || num % count === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const num = getRandomInt(1, 50);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameEngine(ruleOfGame, gamePrime);
