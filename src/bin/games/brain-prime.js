#!/usr/bin/env node
import {
  name, begin, repeat, questionPrime,
} from '../..';

begin('Answer "yes" if given number is prime. Otherwise answer "no".');
const username = name();
repeat(questionPrime, username);
