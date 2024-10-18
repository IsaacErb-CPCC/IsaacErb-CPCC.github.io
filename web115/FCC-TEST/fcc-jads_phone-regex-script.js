"use strict";

const INPUT_LOC = document.getElementById("user-input");
const OUTPUT_LOC = document.getElementById("results-div");
const PHONE_REGEX = /(?:1)?(?: |\-|\()?[0-9]{3}(?:\)| |\-)?[0-9]{3}(?: |\-)?[0-9]{4}/;
// const PHONE_REGEX = /[1][0-9]{3}[0-9]{3}[0-9]{4}/;

function sussNumber() {
	const number = INPUT_LOC.value;

	const judgement = PHONE_REGEX.test(number) ? "Valid":"Invalid";
	OUTPUT_LOC.innerText = `${judgement} US number: ${number}`;
}


