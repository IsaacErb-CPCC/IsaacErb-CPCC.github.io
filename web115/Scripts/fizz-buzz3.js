"use strict";

//>	Defining global variables.
const SUBMIT_BUTTON = document.getElementById("submission");
const OUTPUT_1_LOC = document.getElementById("output-1");

const EXCALM_INV = "&#161;";
const SMALL_FACTOR = 3;
const LARGE_FACTOR = 5;
const OTHER_FACTOR = 7;


//>	Defining functions.
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

function complexFizzBuzz(smallFactor, largeFactor, otherFactor) {
	OUTPUT_1_LOC.innerHTML = "";	//Clearing text of output-element, so repeated presses don't just keep appending.

	const NORM_TEXT = "None for now";
	const SMALL_TEXT = "Pet";
	const LARGE_TEXT = "Robot";
	const OTHER_TEXT = "Cute";

	//>	FizzBuzz Loop:
	for (let lineNum = 0; lineNum < 140; lineNum++) {
		let isSmallMult = isMultiple(lineNum, smallFactor);
		let isLargeMult = isMultiple(lineNum, largeFactor);
		let isOtherMult = isMultiple(lineNum, otherFactor);
		let message = "";

		if (!isSmallMult && !isOtherMult && !isLargeMult) {
			message = NORM_TEXT+".";
		} else {
			if (isSmallMult) {
				message += SMALL_TEXT+" ";
			}
			if (isOtherMult) {
				message += OTHER_TEXT+" ";
			}
			if (isLargeMult) {
				message += LARGE_TEXT+" ";
			}

			message = message.slice(0, -1);	//Removing space at end.
			message = `${EXCALM_INV}${message}!`;
		}

		let outLine = `${tabulateLinenum(lineNum)}${message}<br>`;

		OUTPUT_1_LOC.innerHTML += outLine;
	}
}

function writeOutputs() {
	complexFizzBuzz(SMALL_FACTOR, LARGE_FACTOR, OTHER_FACTOR);
}


//>	Setting up events.
SUBMIT_BUTTON.addEventListener("click", () => {
	writeOutputs();
});