'use strict'

export interface Printer {
    print: (name: string) => void;
}

interface Greeting {
    sayHello: (name?: string) => void;
}

export const Greeting = (printer: Printer): Greeting => {
    return {
        sayHello: (name?: string) => {
            printer.print(`Hello ${name ? name : 'World'}!`);
        }
    }
}