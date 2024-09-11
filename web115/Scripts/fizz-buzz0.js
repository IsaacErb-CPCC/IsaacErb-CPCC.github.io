"use strict";

var nameDest = document.getElementById("greeting");
var simpleOutDest = document.getElementById("output-1");
var complexOutDest = document.getElementById("output-2");
var submitButton = document.getElementById("submission");
var exclamInv = "&#161;";

function collectName() {
	let first = document.getElementById("first-name").value;
	let mid = document.getElementById("middle-init").value;
	let last = document.getElementById("last-name").value;

	for (const part in [first, mid, last]) {
		if (part === null) {
			return;
		}
	}

	if (mid.slice(-1) !== ".") {
		mid += ".";
	}
	let full = `${first} ${mid} ${last}`;
	return full;
}

function numberedText() {
	let message = `${exclamInv}Robopets! ${exclamInv}Robospouses!`;
	for (let lineNum = 0; lineNum < 125; lineNum++) {
		const DIGITS = lineNum.toString().length;
		let displayNum;

		if (DIGITS !== 3) {
			if (DIGITS === 2) {
				displayNum = `0${lineNum}. `;
			} else {
				displayNum = `00${lineNum}. `;
			}
		} else {
			displayNum = `${lineNum}. `;
		}

		let outLine = `${displayNum}${message}<br>`;

		simpleOutDest.innerHTML += outLine;
	}
}

function dynamicText() {
	let oddMessage = "'Tis odd.";
	let evenMessage = "'Tis even.";
	for (let lineNum = 0; lineNum < 125; lineNum++) {
		const DIGITS = lineNum.toString().length;
		let displayNum;
		let relMessage;

		if (DIGITS !== 3) {
			if (DIGITS === 2) {
				displayNum = `0${lineNum}: `;
			} else {
				displayNum = `00${lineNum}: `;
			}
		} else {
			displayNum = `${lineNum}. `;
		}

		if (lineNum % 2 === 0) {
			relMessage = evenMessage;
		} else {
			relMessage = oddMessage;
		}

		let outLine = `${displayNum}${relMessage}<br>`;

		complexOutDest.innerHTML += outLine;
	}
}

function writeOutputs() {
	nameDest.innerHTML = `Welcome to Lil'RoboCo, ${collectName()}.`;
	numberedText();
	dynamicText();
}

submitButton.addEventListener("click", () => {
	writeOutputs();
});