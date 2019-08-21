import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const isCorrectAnswer = (game, username) => {
  const question = car(game);
  const correctAnswer = cdr(game);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return false;
};

const totalRounds = 3;

const playGameThreeTimes = (game, username) => {
  let result = true;
  let roundOfGame = 0;
  for (let quest; roundOfGame < totalRounds; roundOfGame += 1) {
    quest = game();
    result = isCorrectAnswer(quest, username);
    if (result === false) {
      return;
    }
  }
  if (roundOfGame === totalRounds) {
    console.log(`Congratulations, ${username}!`);
  }
};

const gameEngine = (ruleOfGame, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleOfGame);
  console.log('');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log('');
  playGameThreeTimes(game, username);
};

export { cons, gameEngine };
