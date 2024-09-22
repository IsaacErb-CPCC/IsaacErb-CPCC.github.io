"use strict";

function roundDistance(distString) {
	let outString;
	if (distString.includes(".")) {
		let parts = distString.split(".");
		let unitPart = parts[1];
		let unit;
		for (const char in unitPart) {
			if (["0","1","2","3","4","5","6","7","8","9"].indexOf(char) === -1) {
				unit += char;
			}
		}
		outString = parts[0]+unit;
	} else {
		outString = distString;
	}
	return outString;
}

class DropMenu {
	constructor(buttonID, menuID) {
		this.BUTTON = document.getElementById(buttonID);
		this.BUTTON_STAT = window.getComputedStyle(this.BUTTON);
		this.MENU = document.getElementById(menuID);
		this.MENU_STAT = window.getComputedStyle(this.MENU);
	}

	positionMenu() {
		let buttonX = this.BUTTON_STAT.width;
		let buttonY = this.BUTTON_STAT.height;
		this.MENU.setAttribute("style", "width: "+roundDistance(buttonX));
		this.MENU.setAttribute("style", "border-top: none");
		this.BUTTON.setAttribute("style", "border: 3px solid #FFF");
		this.BUTTON.setAttribute("style", "border-bottom: none");
		this.MENU.setAttribute("style", "top: "+roundDistance(buttonY));
	}

	revertPosition() {
		this.BUTTON.setAttribute("style", "border: 1px solid #FFF");
	}

	toggleMenu() {
		//- If menu is hidden, set it to be shown.
		if (this.MENU_STAT.getPropertyValue("display") === "none") {
			this.MENU.setAttribute("style", "display: block");
			this.positionMenu();
		} else {	//- Otherwise, hide it.
			this.MENU.setAttribute("style", "display: none");
			this.revertPosition();
		}
	}
}

const FIZZ_DROP = new DropMenu("fizz-drop", "fizzbuzz-links");

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