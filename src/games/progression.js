import { gameEngine, cons } from '..';
import getRandomInt from '../utils';

const ruleOfGame = 'What number is missing in the progression?';

const gameProgression = () => {
  const firstNum = getRandomInt(1, 50);
  const intervalBetweenNumbers = getRandomInt(1, 50);
  const spacePlace = getRandomInt(0, 10);
  const totalNumbers = 10;
  let listOfNumbers = '';
  const spaceNum = firstNum + ((spacePlace) * intervalBetweenNumbers);
  for (let count = 0; count < totalNumbers; count += 1) {
    const currentNum = firstNum + intervalBetweenNumbers * count;
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
