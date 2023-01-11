const userName = 'Mike';
// userName = 'Michael';
let age = 38;

age = 39;
let result;

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

if ( age > 20 ) {let isOld = true ;}

console.log(result);

// const add = (a: number, b: number = 9) => a + b;

// const printOutPut = ( output: string | number ) => {
//   console.log(output);
// }

// printOutPut(add(5,2));

const hobbies: [string, string] = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: 'Mike',
  age: 39
};

const copiedPerson = { hobby: 'Gaming', ...person};

console.log(copiedPerson);

const add = (...args: number[]) => {
  return args.reduce((currentResult, currentValue)=>{
    return currentResult + currentValue;
  }, 0)
};

const addedNumbers = add(5,10,15,20,25,30)
console.log(addedNumbers);