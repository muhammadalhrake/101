import random from 'random';
import { PossibilityTree } from './101.model';
import { ansArray } from './101Anwers';

///helper function
function between(min: number, max: number) {
  return random.int(min, max);
}
///random for easy digits
const firstEasyDigits = () => between(1, 4);
const lastEasyDigits = () => between(0, 4);
///for difficult digits
const firstDifficultDigits = () => between(5, 9);

function possibilitiesGenerator(
  possibilityTree: PossibilityTree,
  rules: number,
  digits: number,
  level: string
) {
  //console.log(rules);
  const ez1 = ['1', '2', '3', '4'];
  const ez2 = ['0', ...ez1];
  const hard = ['5', '6', '7', '8', '9'];
  let generateNum: string[] = [''];
  if (level == 'Easy') {
    if (digits == 1) {
      generateNum = ez1;
    } else if (digits == 2) {
      let merged = ez1.map(f => ez2.map(s => f + s));
      generateNum = merged.reduce(
        (accumulator, value) => accumulator.concat(value),
        []
      );
    } else if (digits == 3) {
      let merged = ez1
        .map(f => ez2.map(s => ez2.map(th => f + s + th)))
        .reduce((accumulator, value) => accumulator.concat(value), []);
      generateNum = merged.reduce(
        (accumulator, value) => accumulator.concat(value),
        []
      );
      //console.log(generateNum);
    }
  } else if (level == 'medium') {
    if (digits == 1) {
      generateNum = ez1;
    } else if (digits == 2) {
      let merged = hard.map(f => ez2.map(s => f + s));
      generateNum = merged.reduce(
        (accumulator, value) => accumulator.concat(value),
        []
      );
    } else if (digits == 3) {
      let merged = hard
        .map(f => ez2.map(s => hard.map(th => f + s + th)))
        .reduce((accumulator, value) => accumulator.concat(value), []);
      generateNum = merged.reduce(
        (accumulator, value) => accumulator.concat(value),
        []
      );
    }
  } else if (level == 'Difficult') {
    if (digits == 1) {
      generateNum = hard;
    } else if (digits == 2) {
      let merged = hard.map(f => hard.map(s => f + s));
      generateNum = merged.reduce(
        (accumulator, value) => accumulator.concat(value),
        []
      );
    } else if (digits == 3) {
      let merged = hard
        .map(f => ez2.map(s => ez2.map(th => f + s + th)))
        .reduce((accumulator, value) => accumulator.concat(value), []);
      generateNum = merged.reduce(
        (accumulator, value) => accumulator.concat(value),
        []
      );
    }
  }
  possibilityTree[rules][digits][level] = generateNum;

  return possibilityTree;
}

export const generateForFirstThreeDigits = (
  possibilityTree: PossibilityTree,
  rules: number,
  digits: number,
  level: string
) => {
  if (possibilityTree[rules][digits][level][0] == '') {
    possibilityTree[rules][digits][level].splice(0, 1);
  }
  if (possibilityTree[rules][digits][level].length == 0) {
    possibilityTree = possibilitiesGenerator(
      possibilityTree,
      rules,
      digits,
      level
    );
  }

  //console.log(possibilityTree);
  let copyArr = {
    possibel: possibilityTree,
    generate: {
      answers: [5, 5, 5, 5],
      firstNumber: 5,
      secondNumber: 5
    }
  };
  try {
    let fNum = +(rules.toString() + '0' + rules.toString());
    let randomSelect = between(
      0,
      possibilityTree[rules][digits][level].length - 1
    );
    let sNum = possibilityTree[rules][digits][level][randomSelect];
    copyArr.possibel[rules][digits][level] = possibilityTree[rules][digits][
      level
    ].filter(value => value != sNum);
    //console.log(copyArr.possibel[rules][digits][level]);
    copyArr.generate.answers = ansArray(fNum, +sNum);
    copyArr.generate.firstNumber = fNum;
    copyArr.generate.secondNumber = +sNum;
  } catch (err) {
    throw Error(err);
  }
  return copyArr;
};

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
