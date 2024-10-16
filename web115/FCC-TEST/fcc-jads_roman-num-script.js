"use strict";

const cutoff = 500000;
const inputLoc = document.querySelector("#text-input");
const outputLoc = document.querySelector("#result");

function fillRemainder(indoArabic, numChar) {
	let romNum = "";
	for (let rem = 0; rem < indoArabic; rem++) {
		romNum += numChar;
	}

	return romNum;
}

function romanizeComponent(indoArabic, preVal, halfVal, wholeVal) {
	let romNum = "";
	if (indoArabic < 4) {
		romNum = fillRemainder(indoArabic, preVal);
	}
	else if (indoArabic === 4) {
		romNum = preVal + halfVal;
	}
	else if (indoArabic < 9) {
		romNum += halfVal;
		let remainder = indoArabic - 5;
		romNum += fillRemainder(remainder, preVal)
	}
	else {
		romNum = preVal + wholeVal;
	}

	return romNum
}

function romanizeNumber(indoArabic) {
	// if (indoArabic >= cutoff) {
	// 	window.alert(`Please enter a number below ${cutoff}.`)
	// }
	let romanNumber = "";
	if (indoArabic >= 10e5) {
		let hundredKs = Math.floor(indoArabic / 10e5);
		let e5_component = fillRemainder(hundredKs, "ↈ");
		romanNumber += e5_component;
		indoArabic = Number(indoArabic.toString().slice(-5));
	}
	if (indoArabic >= 10e4) {
		let tenKs = Math.floor(indoArabic / 10e4);
		let e4_component = romanizeComponent(tenKs, "ↂ", "ↇ", "ↈ");
		romanNumber += e4_component;
		indoArabic = Number(indoArabic.toString().slice(-4));
	}
	if (indoArabic >= 10e3) {
		let thousands = Math.floor(indoArabic / 10e3);
		let e3_component = romanizeComponent(thousands, "M", "ↁ", "ↂ");
		romanNumber += e3_component;
		indoArabic = Number(indoArabic.toString().slice(-3));
	}
	if (indoArabic >= 10e2) {
		let hundreds = Math.floor(indoArabic / 10e2);
		let e2_component = romanizeComponent(hundreds, "C", "D", "M");
		romanNumber += e2_component;
		indoArabic = Number(indoArabic.toString().slice(-2));
	}
	if (indoArabic >= 10e1) {
		let tens = Math.floor(indoArabic / 10e1);
		let e1_component = romanizeComponent(tens, "X", "L", "C");
		romanNumber += e1_component;
		indoArabic = Number(indoArabic.toString().slice(-1));
	}
	romanNumber += romanizeComponent(indoArabic, "I", "V", "X");

	outputLoc.innerText = romanNumber;
}

function callRomans() {
	romanizeNumber(inputLoc.value);
}
/*
100000: ↈ
	90000: ↂↈ
50000: ↇ
	40000: ↂↇ
10000: ↂ
	9000: Mↂ
5000: ↁ
	4000: Mↁ
1000: M
	900: CM
500: D
	400: CD
100: C
	90: XC
50: L
	40: XL
10: X
	9: IX
5: V
	4: IV
1: I
*/