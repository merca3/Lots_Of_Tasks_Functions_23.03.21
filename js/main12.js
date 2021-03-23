// Write a function to compute the factors of a positive integer.

const num = 24;

function showFactors(number) {
    let factorsString = '';

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            factorsString += ` ${i}`;
        }
    }
    return factorsString;
}

console.log(`Factors of number ${num} are: ${showFactors(num)}`);