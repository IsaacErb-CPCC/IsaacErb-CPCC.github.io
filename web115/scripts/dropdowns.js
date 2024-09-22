"use strict";

const CSS_VARS = document.querySelector(":root");

class DropMenu {
	constructor(buttonID, menuID) {
		this.BUTTON = document.getElementById(buttonID);
		this.BUTTON_STAT = window.getComputedStyle(this.BUTTON);
		this.MENU = document.getElementById(menuID);
		this.MENU_STAT = window.getComputedStyle(this.MENU);
		//@ Make variable for location of arrowhead.
		let buttonX = this.BUTTON_STAT.width;
		let buttonY = this.BUTTON_STAT.height;
		CSS_VARS.style.setProperty("--drop-button-x", buttonX);
		CSS_VARS.style.setProperty("--drop-button-y", buttonY);
	}

	restyleOpen() {
		this.BUTTON.classList.add("drop-opened");
		this.BUTTON.textContent.replace("_","^");
	}

	destyleClosed() {
		this.BUTTON.classList.remove("drop-opened");
		this.BUTTON.textContent.replace("^","_");
	}

	toggleMenu() {
		//- If menu is hidden, set it to be shown.
		if (this.MENU_STAT.getPropertyValue("display") === "none") {
			this.MENU.setAttribute("style", "display: block");
			this.restyleOpen();
		} else {	//- Otherwise, hide it.
			this.destyleClosed();
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