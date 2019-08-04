#!/usr/bin/env node
import {
  name, welcome, question, congratulate,
} from '..';

welcome();
console.log('Answer "yes" if number even otherwise answer "no".');
const username = name();
let question1 = question(username);
if (question1) {
  question1 = question(username);
  if (question1) {
    question1 = question(username);
    if (question1) {
      congratulate(username);
    }
  }
}
