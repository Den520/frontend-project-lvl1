import { gameEngine, cons } from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let count = 2; count <= num / 2; count += 1) {
    if (num % count === 0) {
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
