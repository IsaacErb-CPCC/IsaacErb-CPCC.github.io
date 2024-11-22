"use strict";
/*
	! NOTICE: This script copies the structure of the MDN
	"fetch-text" example at https://github.com/mdn/dom-examples/blob/main/fetch/fetch-text/index.html.
*/

const IS_CODEPAGE = /(?:fizzbuzz)/i;

const MAIN = document.querySelector("main");
const HOME_DISPLAY = "home";
const TITLE_ELEM = document.querySelector("title");
var resetID;


class ContentDisplay {
	constructor(sectionID, title) {
		this.section = document.getElementById(sectionID);
		this.title = title;
	}

	showContent() {
		this.section.setAttribute("style", "display: block");
		TITLE_ELEM.innerHTML = `Isaac Erb's Lil'RoboCo: ${this.title}`;
		localStorage.setItem("last-visited", this.section.id);
		resetID = this.section.id;

		if (IS_CODEPAGE.test(this.section.id)) {
			RESETTER.setAttribute("style", "display: block");
		} else {
			RESETTER.setAttribute("style", "display: none");
		}

		if (this.section.id !== "fizzbuzz0") {
			OUTPUT_1_LOC.setAttribute("style", "width: 100%");
			OUTPUT_2_LOC.setAttribute("style", "width: 0%");
		} else {
			OUTPUT_1_LOC.setAttribute("style", "width: 50%");
			OUTPUT_2_LOC.setAttribute("style", "width: 50%");
		}
	}
}

const DISPLAYS = [
	new ContentDisplay(HOME_DISPLAY, "Home"),
	new ContentDisplay("contract", "Contract"),
	new ContentDisplay("intro", "Introduction"),
	new ContentDisplay("brand", "Branding"),
	new ContentDisplay("m3-code-output", "M3 Codeplay"),
	new ContentDisplay("rwd-hub", "FCC RWD"),
	new ContentDisplay("jads-hub", "FCC JADS"),
	new ContentDisplay("fizzbuzz0", "FizzBuzz 0"),
	new ContentDisplay("fizzbuzz1", "FizzBuzz 1"),
	new ContentDisplay("fizzbuzz2", "FizzBuzz 2"),
	new ContentDisplay("fizzbuzz3", "FizzBuzz 3"),
	new ContentDisplay("fizzbuzz4", "FizzBuzz 4")];


function getLastVisited() {
	let lastVisited = localStorage.getItem('last-visited');
	if (lastVisited !== null) {
		return lastVisited;
	} else {
		return HOME_DISPLAY;
	}
}

function swapShownContent(displayID) {
	OUTPUT_1_LOC.innerText = "";
	OUTPUT_2_LOC.innerText = "";

	let priorContent = document.querySelector("section[style='display: block']");
	if (priorContent !== null) {
		priorContent.setAttribute("style", "display: none");
	}

	for (const i in DISPLAYS) {
		const sect = DISPLAYS[i];

		if (sect.section.id === displayID) {
			sect.showContent();
		}
	}

	return;
}

//-	Setting event-listeners for swap-buttons.
const BUTTONS = document.querySelectorAll(".content-button");
BUTTONS.forEach((button) => {
	if (button.id !== "to-namari-onepage") {
		button.addEventListener("click", () => {
			swapShownContent(button.id.replace("to-", ""));
		});
	}
});


const TEXT_LINKS = document.querySelectorAll("a");
TEXT_LINKS.forEach((link) => {
	if (link.href.slice(0,0) === "#") {
		link.addEventListener("click", () => {
			swapShownContent(link.href.replace("#",""));
		});
	}
});


//- Doing initial display.
swapShownContent(getLastVisited());