'use strict'

import { expect } from 'chai';
import { Greeting, Printer } from '../../src';

describe('Greeting Test', () => {
    it ('Should say Hello Wold!', () => {
        let result;
        const printer: Printer = { 
            print : (name: String) => { result = name } 
        };

        Greeting(printer).sayHello();

        expect(result).to.be.equals('Hello World!');
    });

    it ('Should say Hello TypeScript!', () => {
        let result;
        const printer: Printer = { 
            print : (name: String) => { result = name } 
        };

        Greeting(printer).sayHello('TypeScript');

        expect(result).to.be.equals('Hello TypeScript!');
    });
});