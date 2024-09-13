"use strict";

var submitButton = document.getElementById("submission");
// const SMALL_INPUT_LOC = document.getElementById("small-factor");
// const LARGE_INPUT_LOC = document.getElementById("large-factor");
const SMALL_FACTOR = 6;
const LARGE_FACTOR = 8;
const OUTPUT_1_LOC = document.getElementById("output-1");

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

function modularFizzBuzz(smallFactor, largeFactor) {
	const NORM_TEXT = "Nonsapience";
	const SMALL_TEXT = "Robo";
	const LARGE_TEXT = "Love";
	for (let lineNum = 0; lineNum < 140; lineNum++) {
		let isSmallMult = isMultiple(lineNum, smallFactor);
		let isLargeMult = isMultiple(lineNum, largeFactor);
		let message;

		if (isSmallMult && isLargeMult) {
			message = `${THREE_TEXT}${FIVE_TEXT}!`;
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
	modularFizzBuzz(SMALL_FACTOR, LARGE_FACTOR);
}

submitButton.addEventListener("click", () => {
	writeOutputs();
});