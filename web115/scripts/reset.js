"use strict";
const NUMERICS = /[0-9]/;

function extractNumber(id, filtrator) {
	let number = ParseInt(id.match(filtrator)[0]);
	return number;
}

function resetGeneric() {
	const inputs = document.querySelectorAll("input");
	inputs.forEach((element) => element.value = "");
}

function resetFB_4() {
	FB4_NAME_FIRST_INPUT.value = "";
	FB4_NAME_MIDDLE_INPUT.value = "";
	FB4_NAME_LAST_INPUT.value = "";

	firstFactor = DEFAULT_FIRST_FACTOR;
	secondFactor = DEFAULT_SECOND_FACTOR;
	thirdFactor = DEFAULT_THIRD_FACTOR;
	firstWord = DEFAULT_FIRST_WORD;
	secondWord = DEFAULT_SECOND_WORD;
	thirdWord = DEFAULT_THIRD_WORD;
	lineLimit = DEFAULT_LINE_LIMIT;

	setFB4_Defaults();

	return;
}

function sortReset(sectionID) {
	let fizzbuzzNumber = extractNumber(sectionID, NUMERICS);

	if (fizzbuzzNumber === 4) {
		resetFB_4();
	} else {
		resetGeneric();
	}

	return;
}