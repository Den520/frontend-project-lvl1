import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const beginWithTask = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
};

const getName = () => {
  console.log('');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log('');
  return username;
};

const isCorrectAnswer = (game, username) => {
  const question = car(game);
  const correctAnswer = cdr(game);
  console.log(`Question: ${question}`);
  const getAnswer = () => readlineSync.question('Your answer: ');
  const userAnswer = getAnswer();
  if (`${userAnswer}` === `${correctAnswer}`) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return false;
};

const playGameThreeTimes = (game, username) => {
  let quest;
  let result;
  let roundOfGame = 0;
  while ((result === true && roundOfGame < 3) || roundOfGame === 0) {
    quest = game();
    result = isCorrectAnswer(quest, username);
    if (result || roundOfGame === 0) {
      roundOfGame += 1;
    }
  }
  if (roundOfGame === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

const gameEngine = (ruleOfGame, game) => {
  beginWithTask(ruleOfGame);
  const username = getName();
  playGameThreeTimes(game, username);
};

export { cons, gameEngine };
