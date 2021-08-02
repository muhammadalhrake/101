// Import stylesheets
import './style.css';
import random from 'random';
import { PossibilityTree } from './101.model';

let possibilityTree: PossibilityTree = {
  1: {
    1: { Easy: [''], Difficult: [''], medium: [''] },
    2: { Easy: [''], Difficult: [''], medium: [''] },
    3: { Easy: [''], Difficult: [''], medium: [''] }
  },
  2: {
    1: { Easy: [''], Difficult: [''], medium: [''] },
    2: { Easy: [''], Difficult: [''], medium: [''] },
    3: { Easy: [''], Difficult: [''], medium: [''] }
  },
  3: {
    1: { Easy: [''], Difficult: [''], medium: [''] },
    2: { Easy: [''], Difficult: [''], medium: [''] },
    3: { Easy: [''], Difficult: [''], medium: [''] }
  },
  4: {
    1: { Easy: [''], Difficult: [''], medium: [''] },
    2: { Easy: [''], Difficult: [''], medium: [''] },
    3: { Easy: [''], Difficult: [''], medium: [''] }
  },
  5: {
    1: { Easy: [''], Difficult: [''], medium: [''] },
    2: { Easy: [''], Difficult: [''], medium: [''] },
    3: { Easy: [''], Difficult: [''], medium: [''] }
  },
  6: {
    1: { Easy: [''], Difficult: [''], medium: [''] },
    2: { Easy: [''], Difficult: [''], medium: [''] },
    3: { Easy: [''], Difficult: [''], medium: [''] }
  },
  7: {
    1: { Easy: [''], Difficult: [''], medium: [''] },
    2: { Easy: [''], Difficult: [''], medium: [''] },
    3: { Easy: [''], Difficult: [''], medium: [''] }
  },
  8: {
    1: { Easy: [''], Difficult: [''], medium: [''] },
    2: { Easy: [''], Difficult: [''], medium: [''] },
    3: { Easy: [''], Difficult: [''], medium: [''] }
  },
  9: {
    1: { Easy: [''], Difficult: [''], medium: [''] },
    2: { Easy: [''], Difficult: [''], medium: [''] },
    3: { Easy: [''], Difficult: [''], medium: [''] }
  }
};

let possibilityArrForMoreThanThreeDigits = [0];
//one zero one generation for  101 rules
function ozoGeneration(
  count: number,
  rules: string[],
  digits: string[],
  levels: string[]
) {
  try {
    for (let i = 0; i < count; ) {
      for (let j = 0; j < rules.length; j++) {
        for (let k = 0; k < digits.length; k++) {
          for (let l = 0; l < levels.length; l++) {
            //initial settings
            let rule = rules[j];
            let digit = digits[k];
            let level = levels[l];
          }
        }
      }
    }
  } catch (err) {
    throw Error(err);
  }
}

//console.log(arr);
//setInterval(()=>console.log(generate(40,5)),500)
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
