// Import stylesheets
import './style.css';
import { monad, PossibilityTree } from './101.model';
import {
  generateForFirstThreeDigits,
  generateForLastDigits
} from './possibilities-generater';

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
  let generationArr = new Array<monad>();
  try {
    for (let i = 0; i < count; ) {
      for (let j = 0; j < rules.length; j++) {
        for (let k = 0; k < digits.length; k++) {
          for (let l = 0; l < levels.length; l++) {
            //initial settings
            let generateQuestion;
            let rule = +rules[j];
            let digit = +digits[k];
            let level = levels[l];
            if (digit <= 3) {
              let status = generateForFirstThreeDigits(
                possibilityTree,
                rule,
                digit,
                level
              );
              possibilityTree = status.possibel;
              generateQuestion = status.generate;
            } else {
              let status = generateForLastDigits(
                possibilityArrForMoreThanThreeDigits,
                rule,
                digit
              );
              possibilityArrForMoreThanThreeDigits = status.generationArr;
              generateQuestion = status.generate;
            }
            generationArr.push(generateQuestion);
            i++;
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
  return generationArr;
}
console.log(55);
//console.log(arr);
//setInterval(()=>console.log(ozoGeneration(40,['1','2','7'],['1','2','5'],['Easy','medium','Difficult'])),500)
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
