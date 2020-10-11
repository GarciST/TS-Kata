#!/usr/bin/env node
'use strict';

import { argv } from 'process';
import { Greeting } from '../src';

export const Main = Greeting({ print: console.log }).sayHello(argv.slice(2)[0]);