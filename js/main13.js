// Write a function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

const coinAmount = 51;

function amountToCoins(amount) {

    let coinsNominals = [25, 10, 5, 2, 1];
    let output = '';

    for (let i = 0; i < coinsNominals.length; i++) {
        if (amount >= coinsNominals[i]) {
            amount -= coinsNominals[i];
            output += coinsNominals[i] + ',';
            i--;
        }
    }
    return output;
}

console.log(`Coins are: ${amountToCoins(coinAmount)}`);