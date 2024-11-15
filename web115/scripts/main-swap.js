"use strict";

/*
  ! NOTICE: This script copies the structure of the MDN
  "fetch-text" example at https://github.com/mdn/dom-examples/blob/main/fetch/fetch-text/index.html.
*/

const MAIN = document.querySelector("main");
const HOME_DISPLAY = "home";
const TITLE_ELEM = document.querySelector("title");

class ContentDisplay {
	constructor(sectionID, title) {
		this.section = document.getElementById(sectionID);
		this.title = title;
	}

	showContent() {
		this.section.setAttribute("style", "display: block");
		// document.head.removeChild(document.querySelector("title"));
		// document.createE
		TITLE_ELEM.innerHTML = `Isaac Erb's Lil'RoboCo: ${this.title}`;
		localStorage.setItem("last-visited", this.section.id);

	}
}

const DISPLAYS = [
	new ContentDisplay(HOME_DISPLAY, "Home"),
	new ContentDisplay("contract", "Contract"),
	new ContentDisplay("intro", "Introduction"),
	new ContentDisplay("brand", "Branding"),
	new ContentDisplay("m3-code-output", "M3 Codeplay"),
	new ContentDisplay("rwd-hub", "FCC RWD"),
	new ContentDisplay("jads-hub", "FCC-JADS"),
	new ContentDisplay("fizzbuzz0", "FizzBuzz 0"),
	new ContentDisplay("fizzbuzz1", "FizzBuzz 1"),
	new ContentDisplay("fizzbuzz2", "FizzBuzz 2"),
	new ContentDisplay("fizzbuzz3", "FizzBuzz 3"),
	new ContentDisplay("fizzbuzz4", "FizzBuzz 4")];


// 	{url: "fizzbuzz0", script: "fizz-buzz0.js", title: "FizzBuzz 0"},
// 	{url: "fizzbuzz1", script: "fizz-buzz1.js", title: "FizzBuzz 1"},
// 	{url: "fizzbuzz2", script: "fizz-buzz2.js", title: "FizzBuzz 2"},
// 	{url: "fizzbuzz3", script: "fizz-buzz3.js", title: "FizzBuzz 3"},
// 	{url: "fizzbuzz4", script: "fizz-buzz4.js", title: "FizzBuzz 4"},
// 	{url: "rwd-hub", script: "none.js", title: "FCC RWD"},
// 	{url: "jads-hub", script: "none.js", title: "FCC JADS"}];

function getLastVisited() {
	let lastVisited = localStorage.getItem('last-visited');
	if (lastVisited !== null) {
		return lastVisited;
	} else {
		return HOME_DISPLAY;
	}
}

// function swapTitle(pageDisplayed) {
// 	const OLD_TITLE = document.querySelector("title");

// 	document.head.removeChild(OLD_TITLE);

// 	let title;
// 	for (const index in FILE_INFO) {
// 		const group = FILE_INFO[index];
// 		if (`${group.url}.html` === dataURL) {
// 			title = group.title;
// 		}
// 	}

// 	const NEW_TITLE = document.createElement("title");
// 	NEW_TITLE.innerHTML = `Isaac Erb's Lil'RoboCo: ${title}`;
// 	document.head.prepend(NEW_TITLE);
// 	return;
// }

function swapShownContent(displayID) {
	let priorContent = document.querySelector("section[display: block]");
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

swapShownContent(getLastVisited());