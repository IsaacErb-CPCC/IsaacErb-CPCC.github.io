"use strict";

const CSS_VARS = document.querySelector(":root");

function readDistVal(distance) {
	let numerics = ["0","1","2","3","4","5","6","7","8","9",".","-"];
	let distString = distance.split("");
	let distVal = "";

	for (const charPos in distString) {
		const character = distString[charPos];
		if (numerics.indexOf(character) !== -1) {
			distVal += character;
		}
	}

	return parseFloat(distVal);
}

class DropMenu {
	constructor(buttonID, menuID) {
		this.ID = buttonID;
		this.BUTTON = document.getElementById(buttonID);
		this.BUTTON_STAT = window.getComputedStyle(this.BUTTON);
		this.MENU = document.getElementById(menuID);
		this.MENU_STAT = window.getComputedStyle(this.MENU);

		// let buttonX = readDistVal(this.BUTTON_STAT.width) * 1.05;
		let buttonY = this.BUTTON_STAT.height;

		// this.BUTTON.setAttribute("style", `width: ${buttonX}px`);
		// CSS_VARS.style.setProperty("--drop-button-x", buttonX);
		CSS_VARS.style.setProperty("--drop-button-y", buttonY);
	}

	restyleOpen() {
		this.BUTTON.classList.add("drop-opened");
		document.querySelector(`#${this.ID} span`).innerHTML = "^";
	}

	destyleClosed() {
		this.BUTTON.classList.remove("drop-opened");
		document.querySelector(`#${this.ID} span`).innerHTML = "_";
	}

	toggleMenu() {
		//- If menu is hidden, set it to be shown.
		if (this.MENU_STAT.getPropertyValue("display") === "none") {
			this.MENU.setAttribute("style", "display: block");
			this.restyleOpen();
		} else {	//- Otherwise, hide it.
			this.MENU.setAttribute("style", "display: none");
			this.destyleClosed();
		}
	}
}

const FIZZ_DROP = new DropMenu("fizz-drop", "fizzbuzz-links");
document.getElementById("fizz-drop").addEventListener("click", () => {
	FIZZ_DROP.toggleMenu();
});

//@	THE BELOW IS FOR ADDING A FEATURE FOR CLOSING ON A CLICK
//	OUTSIDE OF THE MENU.

// const DROPDOWN_LIST = [
// 	{button: FIZZ_BUTTON, menu: FIZZ_MENU, status: FIZZ_STATE}];

// function closeOnUnfocus() {
// 	let anyFocus = false;
// 	for (let ind = 0; ind < DROPDOWN_LIST.length; ind++) {
// 		if (DROPDOWN_LIST.button)
// 	}
// }

// window.addEventListener("click" () => {

// })