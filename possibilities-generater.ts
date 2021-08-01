import { PossibilityTree } from './101.model';
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

function generateForFirstThreeDegets(
  possibilityTree: PossibilityTree,
  rules: number,
  digits: number,
  level: string
) {
  if (possibilityTree[rules][digits][level].length == 0) {
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
}
