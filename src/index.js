import readlineSync from 'readline-sync';

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

const randomNum = () => {
  const max = 50;
  return Math.floor(Math.random() * (max)) + 1;
};
const randomInRange = range => Math.floor(Math.random() * range);

const resultOfAnswer = (quest, username, correctAnswer) => {
  console.log(`Question: ${quest}`);
  const answer = () => {
    const actual = readlineSync.question('Your answer: ');
    return actual;
  };
  const realAnswer = correctAnswer();
  const userAnswer = answer();
  if (`${userAnswer}` === `${realAnswer}`) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return false;
};

const repeat = (quest, username) => {
  let question1 = quest(username);
  let count = 0;
  while (question1 === true && count < 2) {
    question1 = quest(username);
    if (question1 === true) {
      count += 1;
    }
  }
  if (count === 2) {
    console.log(`Congratulations, ${username}!`);
  }
};

export {
  name, begin, repeat, randomNum, randomInRange, resultOfAnswer,
};
