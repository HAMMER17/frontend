#!/usr/bin/env node
import read from 'readline-sync';

console.log('Welcome to game');
const name = read.question('What you is name ? ');
console.log(`hello ${name} !!!`);
