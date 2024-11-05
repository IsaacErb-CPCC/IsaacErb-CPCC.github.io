"use strict";

/*
  ! NOTICE: This script copies the structure of the MDN
  "fetch-text" example at https://github.com/mdn/dom-examples/blob/main/fetch/fetch-text/index.html.
*/

const MAIN = document.querySelector("main");
const HOME_URL = "home";
const FILE_INFO = [
	{url: HOME_URL, script: "none.js", title: "Home"},
	{url: "contract", script: "none.js", title: "Contract"},
	{url: "introductions", script: "none.js", title: "Introduction"},
	{url: "brand", script: "none.js", title: "Branding"},
	{url: "m3-code-output", script: "m3_code.js", title: "M3 Codeplay"},
	{url: "fizzbuzz0", script: "fizz-buzz0.js", title: "FizzBuzz 0"},
	{url: "fizzbuzz1", script: "fizz-buzz1.js", title: "FizzBuzz 1"},
	{url: "fizzbuzz2", script: "fizz-buzz2.js", title: "FizzBuzz 2"},
	{url: "fizzbuzz3", script: "fizz-buzz3.js", title: "FizzBuzz 3"},
	{url: "fizzbuzz4", script: "fizz-buzz4.js", title: "FizzBuzz 4"},
	{url: "rwd-hub", script: "none.js", title: "FCC RWD"},
	{url: "jads-hub", script: "none.js", title: "FCC JADS"}];

const SCRIPT_PAGES = [
	"m3-code-output.html",
	"fizzbuzz0.html",
	"fizzbuzz1.html",
	"fizzbuzz2.html",
	"fizzbuzz3.html",
	"fizzbuzz4.html"];

function wait(stallTime) {
	return new Promise((resolve) => setTimeout(resolve, stallTime));
}

async function stall(stallTime) {
	await wait(stallTime);
}

function getLastVisited() {
	let lastVisited = localStorage.getItem('last-visited');
	if (lastVisited !== null) {
		return lastVisited;
	} else {
		return HOME_URL;
	}
}

function swapContentScript(dataURL) {
	const OLD_SCRIPT = document.querySelector('#content-script');
	document.body.removeChild(OLD_SCRIPT);

	let scriptURL;
	for (const index in FILE_INFO) {
		const pair = FILE_INFO[index];
		if (`${pair.url}.html` === dataURL) {
			scriptURL = pair.script;
		}
	}

	const NEW_SCRIPT = document.createElement('script');
	NEW_SCRIPT.setAttribute("id", "content-script");
	NEW_SCRIPT.setAttribute("src", `scripts/${scriptURL}`);
	NEW_SCRIPT.setAttribute("defer", "true");
	// NEW_SCRIPT.setAttribute("async", "true");
	// NEW_SCRIPT.setAttribute("fetchpriority", "low");
	document.body.appendChild(NEW_SCRIPT);
	return;
}

function swapTitle(dataURL) {
	const OLD_TITLE = document.querySelector("title");

	document.head.removeChild(OLD_TITLE);

	let title;
	for (const index in FILE_INFO) {
		const group = FILE_INFO[index];
		if (`${group.url}.html` === dataURL) {
			title = group.title;
		}
	}

	const NEW_TITLE = document.createElement("title");
	NEW_TITLE.innerHTML = `Isaac Erb's Lil'RoboCo: ${title}`;
	document.head.prepend(NEW_TITLE);
	return;
}

function swapMainContents(dataURL) {
	const DATA_REQUEST = new Request(dataURL);
	const oldTime = document.getElementById("time-of-swap").innerText;

	fetch(DATA_REQUEST)
		.then((response) => {
			return response.text();
		})
		.then((text) => {
			MAIN.innerHTML = text;
			MAIN.innerHTML += `<span id="time-of-swap">${Date.now()}</span>`;
		})
		.catch((error) => {	//@DEBUG-FEATURE!
			MAIN.innerText = error.message;
		});

	//- Beginning block which ensures the fetch()-block's changes
	//  finish loading before the content-script is swapped.
	let usesScriptOtherThanNoneJS = false;

	for (const i in SCRIPT_PAGES) {
		const scriptPage = SCRIPT_PAGES[i];
		if (scriptPage === dataURL) {
			usesScriptOtherThanNoneJS = true;
		}
	}

	if (usesScriptOtherThanNoneJS) {
		const resolutionCheck = setInterval(() => {
			const newTime = Date.now().toString();
			if (newTime !== null && newTime !== oldTime) {
				console.log("InnerHTML-change complete.");
				clearInterval(resolutionCheck);
			}
		}, 83);

	}

	swapContentScript(dataURL);
	localStorage.setItem('last-visited', dataURL);
	swapTitle(dataURL);
	return;
}

//-	Setting event-listeners for swap-buttons.
for (const index in FILE_INFO) {
	const file = FILE_INFO[index].url;
	let button = document.getElementById(`to-${file}`);
	button.addEventListener("click", () => {
		swapMainContents(`${file}.html`);
	});
}

swapMainContents(getLastVisited());