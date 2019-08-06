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

const randomNum = () => Math.floor(Math.random() * (50)) + 1;

const randomInRange = range => Math.floor(Math.random() * range);

const resultOfAnswer = (username, correctAnswer) => {
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

const question = quest => console.log(`Question: ${quest}`);

const questionEven = (username) => {
  const num = randomNum();
  const correctAnswer = () => {
    let result = '';
    if (num % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };
  question(num);
  return resultOfAnswer(username, correctAnswer);
};

const questionCalc = (username) => {
  const sign = '+-*'[randomInRange(3)];
  const num1 = randomNum();
  const num2 = randomNum();
  const correctAnswer = () => {
    let result = 0;
    if (sign === '+') {
      result = num1 + num2;
    }
    if (sign === '-') {
      result = num1 - num2;
    }
    if (sign === '*') {
      result = num1 * num2;
    }
    return `${result}`;
  };
  question(`${num1} ${sign} ${num2}`);
  return resultOfAnswer(username, correctAnswer);
};

const questionGcd = (username) => {
  let num1 = randomNum();
  let num2 = randomNum();
  let divider = 2;
  let result = '';
  let newResult = 1;
  let count = 0;
  const correctAnswer = () => {
    if (num1 === num2) {
      return num1;
    }
    while ((num1 || num2) % divider === 0) {
      if ((num1 && num2) % divider === 0) {
        result += `${divider}`;
        count += 1;
      }
      if (num1 % divider === 0) {
        num1 /= divider;
      }
      if (num2 % divider === 0) {
        num2 /= divider;
      }
    }
    if (num1 && num2 > 1 && divider < 50) {
      divider += 1;
      return correctAnswer();
    }
    while (count > 0) {
      newResult *= parseFloat(result[count - 1]);
      count -= 1;
    }
    return newResult;
  };
  question(`${num1} ${num2}`);
  return resultOfAnswer(username, correctAnswer);
};

const questionProgression = (username) => {
  let num1 = randomNum();
  const interval = randomNum();
  const space = randomInRange(10);
  let result = '';
  const spaceNum = num1 + ((space + 1) * interval);
  for (let count = 0; count < 10; count += 1) {
    num1 += interval;
    if (space === count) {
      result += '.. ';
    } else {
      result += `${num1} `;
    }
  }
  const correctAnswer = () => spaceNum;
  question(result);
  return resultOfAnswer(username, correctAnswer);
};

export {
  name, begin, repeat, questionEven, questionCalc, questionGcd, questionProgression,
};
