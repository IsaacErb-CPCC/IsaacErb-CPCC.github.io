"use strict";

var submitButton = document.getElementById("submission");
const OUTPUT_1_LOC = document.getElementById("output-1");

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
	const NORM_TEXT = "Tacky.";
	const THREE_TEXT = "Smart!";
	const FIVE_TEXT = "Cute!";
	for (let lineNum = 0; lineNum < 140; lineNum++) {
		let threeFactor = (lineNum % 3 === 0) ? true : false;
		let fiveFactor =  (lineNum % 5 === 0) ? true : false;
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

submitButton.addEventListener("click", () => {
	writeOutputs();
});