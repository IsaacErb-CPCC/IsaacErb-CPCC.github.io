"use strict";

//> Defining global variables.
const FB4_SUBMIT_BUTTON = document.getElementById("fb4-submission");

const FB4_NAME_FIRST_INPUT = document.getElementById("fb4-first-name");
const FB4_NAME_MIDDLE_INPUT = document.getElementById("fb4-middle-init");
const FB4_NAME_LAST_INPUT = document.getElementById("fb4-last-name");
const FACTOR_1_INPUT = document.getElementById("fb4-factor-1");
const FACTOR_2_INPUT = document.getElementById("fb4-factor-2");
const FACTOR_3_INPUT = document.getElementById("fb4-factor-3");
const WORD_1_INPUT = document.getElementById("fb4-word-1");
const WORD_2_INPUT = document.getElementById("fb4-word-2");
const WORD_3_INPUT = document.getElementById("fb4-word-3");
const LINELIMIT_INPUT = document.getElementById("fb4-line-limit");
const FB4_NAME_LOC = document.getElementById("fb4-greeting");

var firstFactor = 4;
var secondFactor = 6;
var thirdFactor = 9;
var firstWord = "Caring";
var secondWord = "Odd";
var thirdWord = "Cute";
var lineLimit = 125;
var LINE_MAX = 1000;


//> Defining functions.
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

function setDefaults() {
	FACTOR_1_INPUT.value = firstFactor;
	FACTOR_2_INPUT.value = secondFactor;
	FACTOR_3_INPUT.value = thirdFactor;
	WORD_1_INPUT.value = firstWord;
	WORD_2_INPUT.value = secondWord;
	WORD_3_INPUT.value = thirdWord;
	LINELIMIT_INPUT.value = lineLimit;

	return;
}

function configuredFizzBuzz(factorTextPairs) {
	OUTPUT_1_LOC.innerHTML = "";	//Clearing text of output-element, so repeated presses don't just keep appending.

	//> FizzBuzz Loop:
	for (let lineNum = 0; lineNum < lineLimit; lineNum++) {	//(lineLimit) here is a global variable.
		let message = "Robostatus: ";

		for (const IND in factorTextPairs) {
			const PAIR = factorTextPairs[IND];
			if (isMultiple(lineNum, PAIR.factor)) {
				message += PAIR.text+", ";
			}
		}

		if (message === "Robostatus: ") {	//If no words were added:
			message += "Normal.";
		} else {
			message = message.slice(0,-2);	//Removing comma and space at end.
			message = `${message}.`;
		}

		let outLine = `${tabulateLinenum(lineNum)}${message}<br>`;

		OUTPUT_1_LOC.innerHTML += outLine;
	}

	return;
}

//-	getInputs() sets most of the global variables to their
//	current values from the webpage, and returns the
//	concatenated pieces of the user's input name after a bit of
//	processing.
function getInputs() {
	firstFactor = FACTOR_1_INPUT.value;
	secondFactor = FACTOR_2_INPUT.value;
	thirdFactor = FACTOR_3_INPUT.value;
	firstWord = WORD_1_INPUT.value;
	secondWord = WORD_2_INPUT.value;
	thirdWord = WORD_3_INPUT.value;
	lineLimit = LINELIMIT_INPUT.value;

	if (lineLimit > LINE_MAX) {
		window.alert(`Number of lines cannot be greater than ${LINE_MAX}.`);
		return null;
	}

	let first = FB4_NAME_FIRST_INPUT.value;
	let mid = FB4_NAME_MIDDLE_INPUT.value;
	let last = FB4_NAME_LAST_INPUT.value;

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

function doIO() {
	let name = getInputs();
	if (name === null) {
		return;
	}
	FB4_NAME_LOC.innerHTML = `${EXCLAM_INV}Welcome to Lil'RoboCo${name}!`;

	let fizzbuzzInput = [
		{factor: firstFactor, text: firstWord},
		{factor: secondFactor, text: secondWord},
		{factor: thirdFactor, text: thirdWord}
	];
	configuredFizzBuzz(fizzbuzzInput);

	return;
}


//> Setting up default values.
setDefaults();

//>	Setting up events.
FB4_SUBMIT_BUTTON.addEventListener("click", () => {
	doIO();
});