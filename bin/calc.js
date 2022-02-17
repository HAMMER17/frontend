#!/usr/bin/env node
import read from 'readline-sync';
import random from '../random/random.js';

console.log('Welcome to game!!!')
const name = read.question('What is you name? ')
console.log(`Hello ${name}`)

const calc = () => {
    for (let i = 0; i < 3; i++) {
        const array = ['+', '-', '*', '/']
        const num1 = random(10, 1)
        const num2 = random(10, 1)
        const k = array[random(4, 1)]
        const number = `${num1} ${k} ${num2}`
        console.log(`Вопрос: ${number}`)

        let sum = Math.ceil()
        switch (k) {
            case '+':
                sum = num1 + num2
                break;
            case '-':
                sum = num1 - num2
                break;
            case '*':
                sum = num1 * num2
                break;
            case '/':
                sum = num1 / num2
                break;
        }
        console.log(sum)
        const answer = read.question('Ответ: ')
        if (sum == answer) {
            console.log('ok')
        } else {
            console.log('no')
        }
    }
}
calc()