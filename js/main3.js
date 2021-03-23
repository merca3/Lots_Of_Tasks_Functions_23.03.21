// Write a function which will take an array of numbers stored and find the second 
// lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

const numbers = [0, 3, 10, 4, 1];

function secondLowGreat(array) {
    let arraySorted = array.sort((a, b) => a - b);
    let secLowest = array[1];
    let secGreatest = array[array.length - 2];
    let result = `Second lowest is ${secLowest} and second greatest is ${secGreatest}`;
    return result;
}
console.log(secondLowGreat(numbers));