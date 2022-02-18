#!/usr/bin/env node
import read from 'readline-sync';
import random from '../random/random.js'

console.log('Welcome to game')
const name = read.question('what is you name? ')
console.log(`Hello my friend ${name}`)
console.log('Ответь простое число или нет, простое если делиться на себя и на 1')

for (let i = 0; i < 3; i++) {
    const num = random(50, 1)
    function prost(num) {
        if (num < 2) {
            return 2
        }
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }
    const correct = prost(num) ? 'yes' : 'no';
    console.log(`Вопрос: ${num}`)
    const answer = read.question('Ответ: ')
    if (answer == correct) {
        console.log(`Правильно ответ ${correct}`)
    } else {
        console.log(`Ты не прав, правильно ${correct}`)
    }
    prost()
}
console.log(`Молодец ${name}`)