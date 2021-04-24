#!/usr/bin/env node
'use strict';

import { argv } from 'process';
import { Greeting } from './module';

export const Main = Greeting({ print: console.log }).sayHello(argv.slice(2)[0]);