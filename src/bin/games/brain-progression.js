#!/usr/bin/env node
import {
  name, begin, repeat, questionProgression,
} from '../..';

begin('What number is missing in the progression?');
const username = name();
repeat(questionProgression, username);
