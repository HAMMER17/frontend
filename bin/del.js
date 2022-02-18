#!/usr/bin/env node
import read from 'readline-sync'
import random from '../random/random.js'

console.log('Welcome to game!!!')
const name = read.question('What you have name? ')
console.log(`welcome ${name} to game`)
console.log('Угадай наибольший делитель двух чисел')

for (let i = 0; i < 3; i++) {
    let num1 = random(50, 1)
    let num2 = random(50, 1)
    console.log(`Вопрос: ${num1} ${num2}`)
    // console.log(del1(num1, num2))
    const answer = read.question('Ответ: ')
    function del1(num1, num2) {
        let result = []
        for (let i = 0; i <= num1; i++) {
            if (num1 % i == 0 && num2 % i == 0) {
                result.push(i)
            }
        }
        return result[result.length - 1]
    }
    let res = del1(num1, num2)
    if (answer == del1(num1, num2)) {
        console.log(`Молодец ${res}`)
    } else {
        console.log(`Неправильно правильный ответ ${res}`)
    }
    del1(num1, num2)
}
console.log(`Молодец ${name}`)