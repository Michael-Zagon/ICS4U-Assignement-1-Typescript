/**
 * This is the RPS program for Assignment 1
 *
 * By: Michael Zagon
 * Version: 1.0
 * Since: 2024-02-27
 */

import { createPrompt } from 'bun-promptx'

const rock = 1
const paper = 2
const scissor = 3
const min = 1
const max = 3

console.log("Let's play Rock, Paper, Scissors!")
console.log('Rock (1)\nPaper (2)\nScissors (3)')
const userInputString = prompt('Enter a number 1, 2 or 3 to chose : ')

const userInput = parseFloat(userInputString)

const randomInt = Math.floor(Math.random() * max + min)

if (userInput === randomInt) {
  console.log('You tied!')
} else if (userInput === rock && randomInt === paper) {
  console.log('You lose!')
} else if (userInput === rock && randomInt === scissor) {
  console.log('You win!')
} else if (userInput === paper && randomInt === rock) {
  console.log('You win!')
} else if (userInput === paper && randomInt === scissor) {
  console.log('You lose!')
} else if (userInput === scissor && randomInt === rock) {
  console.log('You lose!')
} else if (userInput === scissor && randomInt === paper) {
  console.log('You win!')
} else {
  console.log('\nInvalid Input\nDone.')
}

if (randomInt === rock) {
  console.log('\nThe computer chose rock.')
} else if (randomInt === paper) {
  console.log('\nThe computer chose paper.')
} else if (randomInt === scissor) {
  console.log('\nThe computer chose scissors.')
} else {
  console.log('\nError Occured Please Try Again.')
}

console.log('\nDone.')
