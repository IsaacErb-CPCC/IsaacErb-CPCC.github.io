"use strict";

const inputLoc = document.querySelector("#number");
const outputLoc = document.querySelector("#output");

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

const powerSymbols = [
	{power:5, one:"ↈ"},
	{power:4, one:"ↂ", five:"ↇ", ten:"ↈ"},
	{power:3, one:"M", five:"ↁ", ten:"ↂ"},
	{power:2, one:"C", five:"D", ten:"M"},
	{power:1, one:"X", five:"L", ten:"C"},
	{power:0, one:"I", five:"V", ten:"X"}
]

function romanLoop (inNum) {
	let romanNumber = "";
	if (inNum.trimEnd() === "") {
		outputLoc.innerText = "Please enter a valid number";
	}
	else if (parseInt(inNum) < 0) {
		outputLoc.innerText = "Please enter a number greater than or equal to 1";
	}
	else if (parseInt(inNum) >= 4000) {
		outputLoc.innerText = "Please enter a number less than or equal to 3999";
	}
	else {
		let indoArabic = parseInt(inNum);
		for (let power = 5; power >= 0; power--) {
			if (power === 5) {
				let oneSymbol;
				for (const i in powerSymbols) {
					const group = powerSymbols[i];
					if (group.power === 5) {
						oneSymbol = group.one;
					}
				}
				let hundredKs = Math.floor(indoArabic / Number(`1e${power}`));
				let e5_component = fillRemainder(hundredKs, oneSymbol);
				romanNumber += e5_component;
				indoArabic = Number(indoArabic.toString().slice(-power));
			}
			else {
				let oneSymbol, fiveSymbol, tenSymbol;
				for (const i in powerSymbols) {
					const group = powerSymbols[i];
					if (group.power === power) {
						oneSymbol = group.one;
						fiveSymbol = group.five;
						tenSymbol = group.ten;
					}
				}
				let placeVal = Math.floor(indoArabic / Number(`1e${power}`));
				let placeRoman = romanizeComponent(placeVal, oneSymbol, fiveSymbol, tenSymbol);
				romanNumber += placeRoman;
				indoArabic = Number(indoArabic.toString().slice(-power));
			}
		}

		outputLoc.innerText = romanNumber;
	}
}

function callRomans() {
	romanLoop(inputLoc.value);
}