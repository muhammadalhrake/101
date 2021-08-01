// Import stylesheets
import './style.css';
import random from 'random';
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
      let num = numbers.join('');

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
