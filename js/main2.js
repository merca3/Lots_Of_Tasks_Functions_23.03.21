// Write a function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., 
// madam or nurses run.

function palindrome(phrase) {

    let phraseReversed = phrase.replace(/ /g, '').split('').reverse().join('');

    if (phrase.replace(/ /g, '') === phraseReversed) {
        return console.log(`Phrase ${phrase} is polindrome`);
    } else {
        return console.log(`Phrase ${phrase} is NOT polindrome`);
    }
}

const phrase = 'nurses run';
console.log(palindrome(phrase));