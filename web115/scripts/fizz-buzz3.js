"use strict";

//>	Defining global variables.
var NAME_LOC = document.getElementById("fb3-greeting");
var SUBMIT_BUTTON = document.getElementById("fb3-submission");
var OUTPUT_1_LOC = document.getElementById("fb3-output");

var EXCALM_INV = "&#161;";
var SMALL_FACTOR = 3;
var LARGE_FACTOR = 5;
var OTHER_FACTOR = 7;
var NORM_TEXT = "None for now";
var SMALL_TEXT = "Pet";
var LARGE_TEXT = "Robot";
var OTHER_TEXT = "Cute";
var FIZZBUZZ_INPUT = [
	{factor: SMALL_FACTOR, text: SMALL_TEXT},
	{factor: OTHER_FACTOR, text: OTHER_TEXT},
	{factor: LARGE_FACTOR, text: LARGE_TEXT}
];

//>	Defining functions.
function collectName() {
	let first = document.getElementById("fb3-first-name").value;
	let mid = document.getElementById("fb3-middle-init").value;
	let last = document.getElementById("fb3-last-name").value;
	let full;

	if (first === "" && mid === "" && last === "") {
		full = "";
	} else {
		if (mid.slice(-1) !== ".") {
			mid += ".";
		}
		full = `, ${first} ${mid} ${last}`;
	}

	return full;
}

function isMultiple(numToCheck, factor) {
	let answer = (numToCheck % factor === 0);
	return answer;
}

function tabulateLinenum(lineNum) {
	const DIGITS = lineNum.toString().length;
	let displayNum;

	switch (DIGITS) {
		case 3:
			displayNum = `${lineNum}. `;
			break;
		case 2:
			displayNum = `0${lineNum}. `;
			break;
		case 1:
			displayNum = `00${lineNum}. `;
			break;
	}

	return displayNum;
}

function complexFizzBuzz(factorTextPairs) {
	OUTPUT_1_LOC.innerHTML = "";	//Clearing text of output-element, so repeated presses don't just keep appending.

	//>	FizzBuzz Loop:
	for (let lineNum = 0; lineNum < 140; lineNum++) {
		let message = "";

		for (const IND in factorTextPairs) {
			const PAIR = factorTextPairs[IND];
			if (isMultiple(lineNum, PAIR.factor)) {
				message += PAIR.text+" ";
			}
		}

		if (message === "") {	//If no words were added:
			message = NORM_TEXT+".";
		} else {
			message = message.slice(0,-1);	//Removing space at end.
			message = `${EXCALM_INV}${message}!`;
		}

		let outLine = `${tabulateLinenum(lineNum)}${message}<br>`;

		OUTPUT_1_LOC.innerHTML += outLine;
	}
}

function writeOutputs() {
	NAME_LOC.innerHTML = `${EXCALM_INV}Welcome to Lil'RoboCo${collectName()}!`;
	complexFizzBuzz(FIZZBUZZ_INPUT);
}


//>	Setting up events.
SUBMIT_BUTTON.addEventListener("click", () => {
	writeOutputs();
});