"use strict";

// checks for the longest word and prints length of word and word to console
const lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];

let word = "";
let longestWord;
for (let i = 0; i < lunchArray.length; i++) {
	if (word.length < lunchArray[i].length) {
		word = lunchArray[i];
		longestWord = word;
	}
}
console.log(word.length, longestWord);

// if string is one word
let newLunchArray = ["Burger  Salad  Lasagna Sushi  Meatloaf"];

let string = newLunchArray.toString();
let stringArr = string.split(" ");

let currentLongWord = "";
let maxLength = 0;

for (let i = 0; i < stringArr.length; i++) {
	if (stringArr[i].length > maxLength) {
		maxLength = stringArr[i].length;
		currentLongWord = stringArr[i];
	}
}
console.log(maxLength, currentLongWord);

// fucntion that returns elements on odd positions in a list
function oddPosition(arr) {
	let oddPosition = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			oddPosition.push(arr[i]);
		}
	}
	return oddPosition;
}
console.log(oddPosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// factorial of n
function factorial(num) {
	if (num === 0 || num === 1) {
		return 1;
	} else {
		for (let i = num - 1; i >= 1; i--) {
			num *= i;
		}
		return num;
	}
}
factorial(7);

// if / else statment to check mpg
let mpg;

if (mpg === 120) {
	console.log("If you are using the Tom Ogle fuel system, props");
} else if (mpg > 35) {
	console.log("The fish of the sea smile at your conservation");
} else if (mpg >= 30 && mpg <= 35) {
	console.log("Not many gas stops will be taken");
} else if (mpg >= 21 && mpg <= 29) {
	console.log("Atmosphere smiles at your decision");
} else if (mpg >= 17 && mpg <= 20) {
	console.log("It's palpable");
} else if (mpg >= 11 && mpg <= 16) {
	console.log("Planet still frowns upon this, and so does your wallet");
} else if (mpg <= 10) {
	console.log("gas guzzler");
}
