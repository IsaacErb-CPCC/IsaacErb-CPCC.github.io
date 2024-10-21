"use strict";

function palinCheck() {
	let inputLoc = document.querySelector("#text-input");
	let outputLoc = document.querySelector("#result");
	let isAlphaNumeric = /^[a-z0-9]+$/;

	let inText = inputLoc.value;
	if (inText === "") {
		window.alert("Please input a value");
	} else {
		let inCharUnfiltered = inText.toLowerCase().split("");
		let inChar = inCharUnfiltered.filter(char => char.match(isAlphaNumeric));
		let inReverse = [...inChar];
		inReverse.reverse();
		let isPalin = true;
		for (let i = 0; isPalin && i < inChar.length; i++) {
			const normChar = inChar[i], revChar = inReverse[i];
			isPalin = (normChar === revChar);
		}

		let message = isPalin ? "is a palindrome":"is not a palindrome";
		outputLoc.innerText = `${inText} ${message}`;
	}
}