import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const begin = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
};

const name = () => {
  console.log('');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('');
  return actual;
};

const resultOfAnswer = (game, username) => {
  const question = car(game);
  const correctAnswer = cdr(game);
  console.log(`Question: ${question}`);
  const answer = () => {
    const actual = readlineSync.question('Your answer: ');
    return actual;
  };
  const userAnswer = answer();
  if (`${userAnswer}` === `${correctAnswer}`) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return false;
};

const repeat = (game, username) => {
  let question = game();
  let roundOfGame = 1;
  let result = resultOfAnswer(question, username);
  while (result && roundOfGame < 3) {
    question = game();
    result = resultOfAnswer(question, username);
    if (result) {
      roundOfGame += 1;
    }
  }
  if (roundOfGame === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

const gameEngine = (ruleOfGame, game) => {
  begin(ruleOfGame);
  const username = name();
  repeat(game, username);
};

export { cons, gameEngine };
