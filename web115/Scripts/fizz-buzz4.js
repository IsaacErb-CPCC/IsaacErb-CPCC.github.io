"use strict";

//> Defining global variables.
var submitButton = document.getElementById("submission");

const FACTOR_1_INPUT = document.getElementById("factor-1");
const FACTOR_2_INPUT = document.getElementById("factor-2");
const FACTOR_3_INPUT = document.getElementById("factor-3");
const WORD_1_INPUT = document.getElementById("word-1");
const WORD_2_INPUT = document.getElementById("word-2");
const WORD_3_INPUT = document.getElementById("word-3");
const LINELIMIT_INPUT = document.getElementById("line-limit");
const OUTPUT_1_LOC = document.getElementById("output-1");

var firstFactor = 4;
var secondFactor = 6;
var thirdFactor = 9;
var normWord = "Normal";
var firstWord = "Caring";
var secondWord = "Odd";
var thirdWord = "Cute";
var lineLimit = 125;

const EXCALM_INV = "&#161;";


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

function configuredFizzBuzz() {
	OUTPUT_1_LOC.innerHTML = "";	//Clearing text of output-element, so repeated presses don't just keep appending.

	//> FizzBuzz Loop:
	for (let lineNum = 0; lineNum < lineLimit; lineNum++) {	//(lineLimit) here is a global variable.
		let isFirstMult = isMultiple(lineNum, firstFactor);
		let isSecondMult = isMultiple(lineNum, secondFactor);
		let isThirdMult = isMultiple(lineNum, thirdFactor);
		let message = "Robotstatus: ";

		if (!isFirstMult && !isSecondMult && !isThirdMult) {
			message += normWord+".";
		} else {
			if (isFirstMult) {
				message += firstWord+", ";
			}
			if (isSecondMult) {
				message += secondWord+", ";
			}
			if (isThirdMult) {
				message += thirdWord+", ";
			}

			message = message.slice(0, -2);	//Removing the ", " from the end.
			message = `${message}.`;
		}

		let outLine = `${tabulateLinenum(lineNum)}${message}<br>`;

		OUTPUT_1_LOC.innerHTML += outLine;
	}

	return;
}

function getInputs() {
	firstFactor = FACTOR_1_INPUT.value;
	secondFactor = FACTOR_2_INPUT.value;
	thirdFactor = FACTOR_3_INPUT.value;
	firstWord = WORD_1_INPUT.value;
	secondWord = WORD_2_INPUT.value;
	thirdWord = WORD_3_INPUT.value;
	lineLimit = LINELIMIT_INPUT.value;

	return;
}

function doIO() {
	getInputs();
	configuredFizzBuzz();

	return;
}


//> Setting up default values.
setDefaults();

//>	Setting up events.
submitButton.addEventListener("click", () => {
	doIO();
});