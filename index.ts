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

let possibilityArrForMoreThanThreeDigits=[0];



























///helper funcction
function between(min: number, max: number) {
  return random.int(min, max);
}

//console.log(arr);
//setInterval(()=>console.log(generate(40,5)),500)
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
