"use strict";

//>	Defining global constants.
var NAME_LOC = document.getElementById("greeting");
var OUTPUT_1_LOC = document.getElementById("output-1");
var OUTPUT_2_LOC = document.getElementById("output-2");
var SUBMIT_BUTTON = document.getElementById("submission");
var EXCALM_INV = "&#161;";


//>	Defining functions.
function collectName() {
	let first = document.getElementById("first-name").value;
	let mid = document.getElementById("middle-init").value;
	let last = document.getElementById("last-name").value;

	if (mid.slice(-1) !== ".") {
		mid += ".";
	}
	let full = `${first} ${mid} ${last}`;
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
	NAME_LOC.innerHTML = `${EXCALM_INV}Welcome to Lil'RoboCo, ${collectName()}!`;
	numberedText();
	dynamicText();
}

//> Setting up events.
SUBMIT_BUTTON.addEventListener("click", () => {
	writeOutputs();
});