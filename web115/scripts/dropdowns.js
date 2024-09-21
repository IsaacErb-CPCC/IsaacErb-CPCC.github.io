"use strict";

const FIZZ_MENU = document.getElementById("fizz-drop");
const FIZZ_STATE = window.getComputedStyle(FIZZ_MENU);

function toggleMenu(menuElem, menuState) {
	if (menuState.getPropertyValue("display") === "none") {
		menuElem.setAttribute("style", "display: block");	//If menu is hidden, set it to be shown.
	} else {
		menuElem.setAttribute("style", "display: none");		//Otherwise, hide it.
	}
}

FIZZ_MENU.addEventListener("click", () => {
	toggleMenu(FIZZ_MENU, FIZZ_STATE);
});