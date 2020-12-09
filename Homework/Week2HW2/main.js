// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 

function maxOfTwoNumbers(a, b) {
    if (a>b) {
        return a;
    } else return b;
}
console.log(maxOfTwoNumbers(12, 4));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else return c;
}
console.log(maxOfThree(8, 30, 17));

// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isCharacterAVowel(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < vowels.length; i++) {
        const char = vowels[i];
        if (string === char) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isCharacterAVowel('k'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.


function sumArray(array) {
    let sum = 0;
    for (let i = 0; i <= array.length; i++) {
        sum += i; 
    }
    console.log(sum);
}
sumArray([1, 2, 3, 4]);

function multiplyArray(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product = product * array[i];
    }
    console.log(product);
}
multiplyArray([1, 2, 3, 4]);

// Write a function that returns the number of arguments passed to the function when called.

function numArgs(args) {
    return arguments.length;
}
console.log(numArgs(27, 84, 78));

// Define a function reverseString that computes the reversal of a string. 

function reverseString(string) {
    let newString = "";
    for (let i = string.length-1; i >= 0; i--) {
        newString += string[i];
    }
    console.log(newString)
}
reverseString("bacon");

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(arr) {
    let charCountArray = [];
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        charCountArray.push(word.length);
        // console.log(charCountArray)
    }
    console.log(`The longest word in this array contains ${Math.max(...charCountArray)} letters`);
}
findLongestWord(["savage", "classy", "bougie", "ratchet"])

// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

function filterLongWords(arr, i) {
    let longer = [];
    for (let j = 0; j < arr.length; j++) {
       if (arr[j].length > i) {
           longer.push(arr[j])
       }
    }
    console.log(longer);
}
filterLongWords(["Life", "Liberty", "And", "The", "Pursuit", "Of", "Happiness"], 6)
