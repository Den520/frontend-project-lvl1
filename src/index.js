import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');
const name = () => {
  console.log('');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('');
  return actual;
};
const congratulate = user => console.log(`Congratulations, ${user}!`);
const random = () => Math.floor(Math.random() * (50 - 1 + 1)) + 1;
const answer = () => {
  const actual = readlineSync.question('Your answer: ');
  return actual;
};
const question = (user) => {
  const num = random();
  const correctAnswer = () => {
    let result = '';
    if (num % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };
  console.log(`Question: ${num}`);
  const realAnswer = correctAnswer();
  const userAnswer = answer();
  if (userAnswer === realAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
  console.log(`Let's try again, ${user}!`);
  return false;
};
export {
  name, welcome, random, question, answer, congratulate,
};
