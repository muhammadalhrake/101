import random from 'random';
import { PossibilityTree } from './101.model';
import { ansArray } from './101Anwers';

///helper function
function between(min: number, max: number) {
  return random.int(min, max);
}

function possibilitiesGenerater(
  possibilityTree: PossibilityTree,
  rules: number,
  digits: number,
  level: string
) {
  let numbers: string[];
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; ) {
      let possibelNumber = [''];
      for (let k = 0; k <= 9; ) {
        if (digits == 1) {
          possibelNumber.push(i.toString());
          i++;
        } else if (digits == 2) {
          possibelNumber.push(i.toString() + j.toString());
          i++;
          j++;
        } else if (digits == 3) {
          possibelNumber.push(i.toString() + j.toString() + k.toString());
          i++;
          j++;
          k++;
        }
      }
      numbers.push(possibelNumber.join(''));
    }
  }
  possibilityTree[rules][digits][level] = numbers;
  return possibilityTree;
}

export function generateForFirstThreeDigits(
  possibilityTree: PossibilityTree,
  rules: number,
  digits: number,
  level: string
) {
  let levelArrayLength = possibilityTree[rules][digits][level].length;
  if (levelArrayLength == 0) {
    possibilitiesGenerater(possibilityTree, rules, digits, level);
  }
  let copyArr = {
    possibel: possibilityTree,
    generate: {
      answers: [5, 5, 5, 5],
      firstNumber: 5,
      secondNumber: 5
    }
  };

  try {
    let fNum = +(rules + '0' + rules);
    let randomSelect = between(0, levelArrayLength - 1);
    let sNum = possibilityTree[rules][digits][level][randomSelect];
    copyArr.possibel[rules][digits][level] = possibilityTree[rules][digits][
      level
    ].filter(value => value != sNum);
    copyArr.generate.answers = ansArray(fNum, +sNum);
    copyArr.generate.firstNumber = fNum;
    copyArr.generate.secondNumber = +sNum;
  } catch (err) {
    throw Error(err);
  }
  return copyArr;
}

export function generateForLastDigits(
  arr: number[],
  rules: number,
  digits: number
) {
  let copyOf = {
    generationArr: [0],
    generate: {
      answers: [5, 5, 5, 5],
      firstNumber: 5,
      secondNumber: 5
    }
  };
  try {
    let numbers = [''];
    for (let digits = 1; digits <= digits; digits++) {
      let generation;
      if (digits == 1) {
        generation = firstDigits();
      } else {
        generation = lastDigits();
      }
      numbers[digits] = generation;
    }
    let num = +numbers.join('');

    if (arr.indexOf(num) == -1) {
      let fNum = +(rules + '0' + rules);
      let sNum = num;
      arr.push(num);
      copyOf.generationArr = arr;
      copyOf.generate.answers = ansArray(fNum, sNum);
      copyOf.generate.firstNumber = fNum;
      copyOf.generate.secondNumber = sNum;
    } else {
      generateForLastDigits(arr, rules, digits);
    }
  } catch (err) {
    throw Error();
  }
  return copyOf;
}

function firstDigits() {
  return between(1, 4);
}
function lastDigits() {
  return between(0, 4);
}
