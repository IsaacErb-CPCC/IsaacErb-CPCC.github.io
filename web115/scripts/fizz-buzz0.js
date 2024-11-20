"use strict";

//>	Defining global constants.
// import { OUTPUT_1_LOC, OUTPUT_2_LOC } from "./common-assets";
const OUTPUT_1_LOC = document.getElementById("code-output-1");
const OUTPUT_2_LOC = document.getElementById("code-output-2");
const NAME_LOC = document.getElementById("fb0-greeting");
const SUBMIT_BUTTON = document.getElementById("fb0-submission");
const EXCALM_INV = "&#161;";


//>	Defining functions.
function collectName() {
	let first = document.getElementById("fb0-first-name").value;
	let mid = document.getElementById("fb0-middle-init").value;
	let last = document.getElementById("fb0-last-name").value;
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

function numberedText() {
	OUTPUT_1_LOC.innerHTML = "";	//Clearing text of output-element, so repeated presses don't just keep appending.

	//> FizzBuzz Loop:
	let message = `${EXCALM_INV}Robopets! ${EXCALM_INV}Robospouses!`;
	for (let lineNum = 0; lineNum < 125; lineNum++) {
		let outLine = `${tabulateLinenum(lineNum)}${message}<br>`;

		OUTPUT_1_LOC.innerHTML += outLine;
	}
}

function dynamicText() {
	OUTPUT_2_LOC.innerHTML = "";	//Clearing text of output-element, so repeated presses don't just keep appending.

	//> FizzBuzz Loop:
	let oddMessage = "'Tis odd.";
	let evenMessage = "'Tis even.";
	for (let lineNum = 0; lineNum < 125; lineNum++) {
		let relMessage;

		if (lineNum % 2 === 0) {
			relMessage = evenMessage;
		} else {
			relMessage = oddMessage;
		}

		let outLine = `${tabulateLinenum(lineNum)}${relMessage}<br>`;

		OUTPUT_2_LOC.innerHTML += outLine;
	}
}

function writeOutputs() {
	NAME_LOC.innerHTML = `${EXCALM_INV}Welcome to Lil'RoboCo${collectName()}!`;
	numberedText();
	dynamicText();
}

//> Setting up events.
SUBMIT_BUTTON.addEventListener("click", () => {
	writeOutputs();
});