#!/usr/bin/env node
import {
  name, begin, repeat, questionCalc,
} from '../..';

begin('What is the result of the expression?');
const username = name();
repeat(questionCalc, username);
