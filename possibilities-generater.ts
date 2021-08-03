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
  let possibelNumber: string[] = [];
  for (let i = 1; i <= 9; i++) {
    if (digits == 1) {
      possibelNumber.push(i.toString());
    } else {
      for (let j = 0; j <= 9; j++) {
        if (digits == 2) {
          possibelNumber.push(i.toString() + j.toString());
        } else {
          for (let k = 0; k <= 9; k++) {
            possibelNumber.push(i.toString() + j.toString() + k.toString());
          }
        }
      }
    }
  }
  //console.log(possibelNumber);
  possibilityTree[rules][digits][level] = possibelNumber;
  return possibilityTree;
}

export function generateForFirstThreeDigits(
  possibilityTree: PossibilityTree,
  rules: number,
  digits: number,
  level: string
) {
  //console.log(rules, digits, level);
  possibilityTree[rules][digits][level].splice(0, 1);
  if (possibilityTree[rules][digits][level].length == 0) {
    possibilityTree = possibilitiesGenerater(
      possibilityTree,
      rules,
      digits,
      level
    );
  }
  let copyArr = {
    possibel: possibilityTree,
    generate: {
      answers: [5, 5, 5, 5],
      firstNumber: 5,
      secondNumber: 5
    }
  };
  //console.log(possibilityTree[rules][digits][level])
  try {
    let fNum = +(rules.toString() + '0' + rules.toString());
    let randomSelect = between(
      0,
      possibilityTree[rules][digits][level].length - 1
    );
    //console.log(possibilityTree[rules][digits][level].length);
    let sNum = possibilityTree[rules][digits][level][randomSelect];
    //console.log(sNum);
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
  digits: number,
  level: string
) {
  let copyOf = {
    generationArr: [0],
    generate: {
      answers: [5, 5, 5, 5],
      firstNumber: 5,
      secondNumber: 5
    }
  };
  let numbers = [''];
  for (let digit = 1; digit <= digits; digit++) {
    let generation;
    if (level == 'Easy') {
      if (digit == 1) {
        generation = firstEasyDigits();
      } else {
        generation = lastEasyDigits();
      }
    } else if (level == 'medium') {
      if (digit % 2 == 0) {
        generation = firstEasyDigits();
      } else {
        generation = firstDifficultDigits();
      }
    } else if (level == 'Difficult') {
      generation = firstDifficultDigits();
    }
    numbers[digit] = generation;
  }
  let num = +numbers.join('');

  if (arr.indexOf(num) == -1) {
    let fNum = +(rules.toString() + '0' + rules.toString());
    let sNum = num;
    arr.push(num);
    copyOf.generationArr = arr;
    copyOf.generate.answers = ansArray(fNum, sNum);
    copyOf.generate.firstNumber = fNum;
    copyOf.generate.secondNumber = sNum;
  } else {
    return generateForLastDigits(arr, rules, digits, level);
  }

  return copyOf;
}
///random for easy digits
const firstEasyDigits = () => between(1, 4);
const lastEasyDigits = () => between(0, 4);
///for difficult digits
const firstDifficultDigits = () => between(5, 9);
