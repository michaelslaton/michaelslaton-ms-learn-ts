let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if ( typeof userInput === 'string'){
userName = userInput;
}

function generateError(message: string, code: number): never{
  throw { message: message, errorCode: code };
}

// const result = generateError('An error occured!', 500);
// console.log(result);

const button = document.querySelector('button')!;


function clickHandler(message: string) {
  console.log('Clicked!' + message)
}

if (button) {

  button.addEventListener('click', clickHandler.bind(null, `sup`));

}