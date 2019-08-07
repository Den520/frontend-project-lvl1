#!/usr/bin/env node
import {
  name, begin, repeat, questionEven,
} from '../..';

begin('Answer "yes" if number even otherwise answer "no".');
const username = name();
repeat(questionEven, username);
