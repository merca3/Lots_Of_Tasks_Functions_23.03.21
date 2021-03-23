// Write a function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, 
// function, number, string, and undefined.

const inputString = 'string abc';
const inputNumber = 123;
const inputBoolean = true;

function checkType(input) {
    return typeof(input);
}

console.log(checkType(inputString));
console.log(checkType(inputNumber));
console.log(checkType(inputBoolean));