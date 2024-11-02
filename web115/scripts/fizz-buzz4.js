"use strict";

//> Defining global variables.
var SUBMIT_BUTTON = document.getElementById("submission");

var NAME_FIRST_INPUT;
var NAME_MIDDLE_INPUT;
var NAME_LAST_INPUT;
var FACTOR_1_INPUT;
var FACTOR_2_INPUT;
var FACTOR_3_INPUT;
var WORD_1_INPUT;
var WORD_2_INPUT;
var WORD_3_INPUT;
var LINELIMIT_INPUT;
var NAME_LOC;
var OUTPUT_1_LOC;

var firstFactor = 4;
var secondFactor = 6;
var thirdFactor = 9;
var normWord = "Normal";
var firstWord = "Caring";
var secondWord = "Odd";
var thirdWord = "Cute";
var lineLimit = 125;

var EXCALM_INV = "&#161;";
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

async function loadElems() {
	NAME_FIRST_INPUT = await new Promise(document.getElementById("first-name"));
	NAME_MIDDLE_INPUT = await new Promise(document.getElementById("middle-init"));
	NAME_LAST_INPUT = await new Promise(document.getElementById("last-name"));
	FACTOR_1_INPUT = await new Promise(document.getElementById("factor-1"));
	FACTOR_2_INPUT = await new Promise(document.getElementById("factor-2"));
	FACTOR_3_INPUT = await new Promise(document.getElementById("factor-3"));
	WORD_1_INPUT = await new Promise(document.getElementById("word-1"));
	WORD_2_INPUT = await new Promise(document.getElementById("word-2"));
	WORD_3_INPUT = await new Promise(document.getElementById("word-3"));
	LINELIMIT_INPUT = await new Promise(document.getElementById("line-limit"));
	NAME_LOC = await new Promise(document.getElementById("greeting"));
	OUTPUT_1_LOC = await new Promise(document.getElementById("output-1"));
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

	let first = NAME_FIRST_INPUT.value;
	let mid = NAME_MIDDLE_INPUT.value;
	let last = NAME_LAST_INPUT.value;

	if (mid.slice(-1) !== ".") {
		mid += ".";
	}
	let full = `${first} ${mid} ${last}`;

	return full;
}

function doIO() {
	let name = getInputs();
	if (name === null) {
		return;
	}
	NAME_LOC.innerHTML = `${EXCALM_INV}Welcome to Lil'RoboCo, ${name}!`;

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
SUBMIT_BUTTON.addEventListener("click", () => {
	doIO();
});