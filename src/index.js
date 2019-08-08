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
  return resultOfAnswer(num, username, correctAnswer);
};

const questionCalc = (username) => {
  const sign = '+-*'[randomInRange(3)];
  const num1 = randomNum();
  const num2 = randomNum();
  const correctAnswer = () => {
    let result = 0;
    switch (sign) {
      case '+':
        result = num1 + num2;
        break;

      case '-':
        result = num1 - num2;
        break;

      case '*':
        result = num1 * num2;
        break;

      default:
    }
    return result;
  };
  return resultOfAnswer(`${num1} ${sign} ${num2}`, username, correctAnswer);
};

const questionGcd = (username) => {
  let num1 = randomNum();
  let num2 = randomNum();
  let divider = 2;
  let result = 1;
  const correctAnswer = () => {
    switch (true) {
      case (num1 || num2) % divider === 0:
        switch (true) {
          case (num1 && num2) % divider === 0:
            result *= divider;
            num1 /= divider;
            num2 /= divider;
            correctAnswer();
            break;

          case num1 % divider === 0:
            num1 /= divider;
            correctAnswer();
            break;

          case num2 % divider === 0:
            num2 /= divider;
            break;
          default:
        }
        return result;
      case divider < (num1 && num2):
        divider += 1;
        return correctAnswer();

      default:
    }
    return result;
  };
  return resultOfAnswer(`${num1} ${num2}`, username, correctAnswer);
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
  return resultOfAnswer(result, username, correctAnswer);
};

const questionPrime = (username) => {
  const num = randomNum();
  let result = 0;
  let count = 1;
  const correctAnswer = () => {
    switch (true) {
      case (count > num):
        return result === 2 ? 'yes' : 'no';

      case (num % count === 0):
        result += 1;
        count += 1;
        return correctAnswer();

      default:
        count += 1;
        return correctAnswer();
    }
  };
  return resultOfAnswer(num, username, correctAnswer);
};

export {
  name, begin, repeat,
  questionEven, questionCalc,
  questionGcd, questionProgression,
  questionPrime,
};
