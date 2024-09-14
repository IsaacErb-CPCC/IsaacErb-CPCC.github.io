"use strict";

var submitButton = document.getElementById("submission");
// const SMALL_INPUT_LOC = document.getElementById("small-factor");
// const LARGE_INPUT_LOC = document.getElementById("large-factor");
const SMALL_FACTOR = 3;
const LARGE_FACTOR = 5;
const CHAOS_FACTOR = 7;
const OUTPUT_1_LOC = document.getElementById("output-1");
const EXCALM_INV = "&#161;";

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

function complexFizzBuzz(smallFactor, largeFactor, chaosFactor) {
	const NORM_TEXT = "None for now";
	const SMALL_TEXT = "Pet";
	const LARGE_TEXT = "Robot";
	const CHAOS_TEXT = "Cute";
	for (let lineNum = 0; lineNum < 140; lineNum++) {
		let isSmallMult = isMultiple(lineNum, smallFactor);
		let isLargeMult = isMultiple(lineNum, largeFactor);
		let isChaosMult = isMultiple(lineNum, chaosFactor);
		let message = "";

		if (! isSmallMult && ! isChaosMult && !isLargeMult) {
			message = NORM_TEXT+".";
		} else {
			if (isSmallMult) {
				message += SMALL_TEXT+" ";
			}
			if (isChaosMult) {
				message += CHAOS_TEXT+" ";
			}
			if (isLargeMult) {
				message += LARGE_TEXT+" ";
			}

			message = message.slice(0, -2);
			message = `${EXCALM_INV}${message}!`;
		}

		let outLine = `${tabulateLinenum(lineNum)}${message}<br>`;

		OUTPUT_1_LOC.innerHTML += outLine;
	}
}

function writeOutputs() {
	complexFizzBuzz(SMALL_FACTOR, LARGE_FACTOR, CHAOS_FACTOR);
}

submitButton.addEventListener("click", () => {
	writeOutputs();
});