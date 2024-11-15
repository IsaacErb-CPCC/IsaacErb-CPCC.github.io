"use strict";

//>	Defining global variables.
var NAME_LOC = document.getElementById("fb2-greeting");
var SUBMIT_BUTTON = document.getElementById("fb2-submission");
var SMALL_FACTOR = 6;
var LARGE_FACTOR = 8;
var OUTPUT_1_LOC = document.getElementById("fb2-output-1");


//> Defining functions.
function collectName() {
	let first = document.getElementById("fb2-first-name").value;
	let mid = document.getElementById("fb2-middle-init").value;
	let last = document.getElementById("fb2-last-name").value;
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
	let answer = (numToCheck % factor === 0) ? true : false;
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

function modularFizzBuzz() {
	OUTPUT_1_LOC.innerHTML = "";	//Clearing text of output-element, so repeated presses don't just keep appending.

	const NORM_TEXT = "Work";
	const SMALL_TEXT = "Robo";
	const LARGE_TEXT = "Love";

	//>	FizzBuzz Loop:
	for (let lineNum = 0; lineNum < 140; lineNum++) {
		let isSmallMult = isMultiple(lineNum, SMALL_FACTOR);
		let isLargeMult = isMultiple(lineNum, LARGE_FACTOR);
		let message;

		if (isSmallMult && isLargeMult) {
			message = `${SMALL_TEXT}${LARGE_TEXT}!`;
		} else if (isSmallMult) {
			message = SMALL_TEXT+"?";
		} else if (isLargeMult) {
			message = LARGE_TEXT+"?";
		} else {
			message = NORM_TEXT+".";
		}

		let outLine = `${tabulateLinenum(lineNum)}${message}<br>`;

		OUTPUT_1_LOC.innerHTML += outLine;
	}
}

function writeOutputs() {
	NAME_LOC.innerHTML = `${EXCALM_INV}Welcome to Lil'RoboCo${collectName()}!`;
	modularFizzBuzz();
}

// > Setting up events.
SUBMIT_BUTTON.addEventListener("click", () => {
	writeOutputs();
});