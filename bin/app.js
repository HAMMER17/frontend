#!/usr/bin/env node
import read from 'readline-sync';

console.log('Welcome to game');
const name = read.question('What you is name ? ');
console.log(`hello ${name} !!!`);
console.log('если четное число то "yes" если нет "no"')

const game = () => {
    for (let i = 0; i < 3; i++) {
        const num = Math.floor(Math.random() * 100)
        console.log(`Вопрос ${num}`)
        const answer = read.question('Ответ: ')
        const correct = (num % 2 == 0) ? 'yes' : 'no';

        if (answer == correct) {
            console.log(`Правильно ${correct}`)
        } else
            console.log(`Неверно, правильно ${correct}\nПридется начать снова`)
        return;
    }
    console.log(`Молодец ${name}`)
}
game()