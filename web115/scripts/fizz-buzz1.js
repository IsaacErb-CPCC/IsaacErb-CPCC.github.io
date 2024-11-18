"use strict";

//> Defining global variables.
var NAME_LOC = document.getElementById("fb1-greeting");
var SUBMIT_BUTTON = document.getElementById("fb1-submission");
var OUTPUT_1_LOC = document.getElementById("code-output-1");

//>	Defining functions.
function collectName() {
	let first = document.getElementById("fb1-first-name").value;
	let mid = document.getElementById("fb1-middle-init").value;
	let last = document.getElementById("fb1-last-name").value;
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
	NAME_LOC.innerHTML = `${EXCALM_INV}Welcome to Lil'RoboCo${collectName()}!`;
	normalFizzBuzz();
}

//> Setting up events.
SUBMIT_BUTTON.addEventListener("click", () => {
	writeOutputs();
});