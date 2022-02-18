#!/usr/bin/env node
import read from 'readline-sync';
import random from '../random/random.js';

console.log('Welcome to game');
const name = read.question('What is you name ? ');
console.log(`Hello ${name} !!!`);
console.log('Если четное число то "yes" если нет "no"');

const game = () => {
  for (let i = 0; i < 3; i += 1) {
    const num = random(50, 2);
    console.log(`Вопрос ${num}`);
    const answer = read.question('Ответ: ');
    const correct = (num % 2 === 0) ? 'yes' : 'no';

    if (answer === correct) {
      console.log(`Правильно ${correct}`);
    } else console.log(`Неверно, правильно ${correct}\nПридется начать снова`);
  }
  console.log(`Молодец ${name}`);
};
game();
