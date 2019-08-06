#!/usr/bin/env node
import {
  name, begin, repeat, questionGcd,
} from '..';

begin('Find the greatest common divisor of given numbers.');
const username = name();
repeat(questionGcd, username);
