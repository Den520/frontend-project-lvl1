import { gameEngine, cons } from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const gameGcd = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return cons(question, correctAnswer);
};

export default () => gameEngine(ruleOfGame, gameGcd);
