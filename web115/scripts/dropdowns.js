"use strict";

const FIZZ_BUTTON = document.getElementById("fizz-drop");
const FIZZ_MENU = document.getElementById("fizzbuzz-links");
const FIZZ_STATE = window.getComputedStyle(FIZZ_MENU);

function toggleMenu(menuElem, menuState) {
	if (menuState.getPropertyValue("display") === "none") {
		menuElem.setAttribute("style", "display: block");	//If menu is hidden, set it to be shown.
	} else {
		menuElem.setAttribute("style", "display: none");	//Otherwise, hide it.
	}
	return;
}

function toggleFizz() {
	toggleMenu(FIZZ_MENU, FIZZ_STATE);
	return;
}

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