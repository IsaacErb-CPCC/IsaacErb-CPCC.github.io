"use strict";

const FIZZ_MENU = document.getElementById("fizzbuzz-dropdown");
const FIZZ_STATE = window.getComputedStyle(FIZZ_MENU);

function toggleMenu(menu_elem, menu_state) {
	if (menu_state.getPropertyValue("display") === "none") {
		menu_elem.style("display: block");	//If menu is hidden, set it to be shown.
	} else {
		menu_elem.style("display: none");		//Otherwise, hide it.
	}
}

FIZZ_MENU.addEventListener("click", () => {
	toggleMenu(FIZZ_MENU, FIZZ_STATE);
});