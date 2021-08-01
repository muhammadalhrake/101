// Import stylesheets
import './style.css';
import random from 'random';
import {PossibilityTree}from './101.model'

let possibilityTree:PossibilityTree={
  1:{
    1:{Easy:[''],Difficult:[''],medium:['']},
    2:{Easy:[''],Difficult:[''],medium:['']},
    3:{Easy:[''],Difficult:[''],medium:['']}
  },
  2:{
    1:{Easy:[''],Difficult:[''],medium:['']},
    2:{Easy:[''],Difficult:[''],medium:['']},
    3:{Easy:[''],Difficult:[''],medium:['']}
  },
  3:{
    1:{Easy:[''],Difficult:[''],medium:['']},
    2:{Easy:[''],Difficult:[''],medium:['']},
    3:{Easy:[''],Difficult:[''],medium:['']}
  },
  4:{
    1:{Easy:[''],Difficult:[''],medium:['']},
    2:{Easy:[''],Difficult:[''],medium:['']},
    3:{Easy:[''],Difficult:[''],medium:['']}
  },
  5:{
    1:{Easy:[''],Difficult:[''],medium:['']},
    2:{Easy:[''],Difficult:[''],medium:['']},
    3:{Easy:[''],Difficult:[''],medium:['']}
  },
  6:{
    1:{Easy:[''],Difficult:[''],medium:['']},
    2:{Easy:[''],Difficult:[''],medium:['']},
    3:{Easy:[''],Difficult:[''],medium:['']}
  },
  7:{
    1:{Easy:[''],Difficult:[''],medium:['']},
    2:{Easy:[''],Difficult:[''],medium:['']},
    3:{Easy:[''],Difficult:[''],medium:['']}
  },
  8:{
    1:{Easy:[''],Difficult:[''],medium:['']},
    2:{Easy:[''],Difficult:[''],medium:['']},
    3:{Easy:[''],Difficult:[''],medium:['']}
  },
  9:{
    1:{Easy:[''],Difficult:[''],medium:['']},
    2:{Easy:[''],Difficult:[''],medium:['']},
    3:{Easy:[''],Difficult:[''],medium:['']}
  }
}





























///helper funcction
function between(min: number, max: number) {
  return random.int(min, max);
}
function firstDigits() {
  return between(1, 4);
}
function secondsDigits2() {
  return between(0, 4);
}
function generate(count: number, digit: number) {
  let arr = new Array();
  try {
    for (let i = 0; i < count; ) {
      let numbers = [''];
      for (let digits = 0; digits <= digit && i < count; digits++) {
        let generation;
        if (digits == 0) {
          generation = firstDigits();
        } else {
          generation = secondsDigits2();
        }
        numbers[digits] = generation;
      }
      let num = +numbers.join('');

      if (arr.indexOf(num) == -1) {
        i = i + 1;
        arr.push(num);
      }
    }
  } catch (err) {
    console.log(err);
  }
  return arr;
}
//console.log(arr);
//setInterval(()=>console.log(generate(40,5)),500)
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
