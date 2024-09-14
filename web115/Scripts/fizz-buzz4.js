"use strict";

//> Defining global variables.
var submitButton = document.getElementById("submission");

const FACTOR_1_INPUT = document.getElementById("first-factor");
const FACTOR_2_INPUT = document.getElementById("second-factor");
const FACTOR_3_INPUT = document.getElementById("third-factor");
const OUTPUT_1_LOC = document.getElementById("output-1");

var first_factor = 6;
var second_factor = 8;
var third_factor = 9;
var norm_word = ;
var first_word = ;
var second_word = ;
var fourth_word = ;

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

		if (!isSmallMult && !isChaosMult && !isLargeMult) {
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

			message = message.slice(0, -1);
			message = `${EXCALM_INV}${message}!`;
		}

		let outLine = `${tabulateLinenum(lineNum)}${message}<br>`;

		OUTPUT_1_LOC.innerHTML += outLine;
	}
}

function writeOutputs() {
	complexFizzBuzz(SMALL_FACTOR, LARGE_FACTOR, CHAOS_FACTOR);
}


//>	Setting up events.
submitButton.addEventListener("click", () => {
	writeOutputs();
});