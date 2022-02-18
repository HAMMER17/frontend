#!/usr/bin/env node
import read from 'readline-sync';
import random from '../random/random.js'

console.log('Welcome to game!!!')
const name = read.question('What is you name? ')
console.log(`Hi ${name} welcome!!`)
console.log('Отгадай пропущенную цифру')

for (let i = 0; i < 3; i++) {
    let arr = []
    let num = random(40, 10)
    let n = random(5, 1)
    let s = random(7, 1)

    for (let i = n; i < num; i += n) {
        arr.push(i + n + s)
    }
    let data = String(arr[s])
    arr[s] = '..'

    console.log(`Вопрос: ${arr.toString()}`)
    console.log(data)
    const answer = read.question('Ответ: ')
    if (data == answer) {
        console.log(`Правильно ${data}`)
    } else {
        console.log(`Не угадал правильно ${data}`)
    }
}
console.log(`Молодец ${name}`)