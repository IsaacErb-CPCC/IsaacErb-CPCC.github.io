"use strict";

//>	Defining global variables.
const SUBMIT_BUTTON = document.getElementById("submission");
const OUTPUT_1_LOC = document.getElementById("output-1");

const EXCALM_INV = "&#161;";
const SMALL_FACTOR = 3;
const LARGE_FACTOR = 5;
const OTHER_FACTOR = 7;
const NORM_TEXT = "None for now";
const SMALL_TEXT = "Pet";
const LARGE_TEXT = "Robot";
const OTHER_TEXT = "Cute";
const FIZZBUZZ_INPUT = [
	{factor: SMALL_FACTOR, text: SMALL_TEXT},
	{factor: OTHER_FACTOR, text: OTHER_TEXT},
	{factor: LARGE_FACTOR, text: LARGE_TEXT}
];

//>	Defining functions.
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

		for (const PAIR in factorTextPairs) {
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
	complexFizzBuzz(FIZZBUZZ_INPUT);
}


//>	Setting up events.
SUBMIT_BUTTON.addEventListener("click", () => {
	writeOutputs();
});