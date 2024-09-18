"use strict";

//> Defining global variables.
const SUBMIT_BUTTON = document.getElementById("submission");
const OUTPUT_1_LOC = document.getElementById("output-1");

//>	Defining functions.
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

function normalFizzBuzz() {
	OUTPUT_1_LOC.innerHTML = "";	//Clearing text of output-element, so repeated presses don't just keep appending.

	const NORM_TEXT = "Tacky.";
	const THREE_TEXT = "Smart!";
	const FIVE_TEXT = "Cute!";

	//>	FizzBuzz Loop:
	for (let lineNum = 0; lineNum < 140; lineNum++) {
		let threeFactor = (lineNum % 3 === 0);
		let fiveFactor =  (lineNum % 5 === 0);
		let message;

		if (threeFactor && fiveFactor) {
			message = `${THREE_TEXT} ${FIVE_TEXT}`;
		} else if (threeFactor) {
			message = THREE_TEXT;
		} else if (fiveFactor) {
			message = FIVE_TEXT;
		} else {
			message = NORM_TEXT;
		}

		let outLine = `${tabulateLinenum(lineNum)}${message}<br>`;

		OUTPUT_1_LOC.innerHTML += outLine;
	}
}

function writeOutputs() {
	normalFizzBuzz();
}

//> Setting up events.
SUBMIT_BUTTON.addEventListener("click", () => {
	writeOutputs();
});