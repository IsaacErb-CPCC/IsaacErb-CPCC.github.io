"use strict";

/*
  ! NOTICE: This script copies the structure of the MDN
  "fetch-text" example at https://github.com/mdn/dom-examples/blob/main/fetch/fetch-text/index.html.
*/

const MAIN = document.querySelector("main");
const HOME_URL = "home.html";
const SCRIPT_MAP = [
	{url: HOME_URL, script: "none.js"},
	{url: "contract.html", script: "none.js"},
	{url: "introductions.html", script: "none.js"},
	{url: "brand.html", script: "none.js"},
	{url: "m3-code-output.html", script: "m3_code.js"},
	{url: "fizzbuzz0.html", script: "fizz-buzz0.js"},
	{url: "fizzbuzz1.html", script: "fizz-buzz1.js"},
	{url: "fizzbuzz2.html", script: "fizz-buzz2.js"},
	{url: "fizzbuzz3.html", script: "fizz-buzz3.js"},
	{url: "fizzbuzz4.html", script: "fizz-buzz4.js"}
];

function getLastVisited() {
	let lastVisited = localStorage.getItem('last-visited');
	if (lastVisited !== null) {
		return lastVisited;
	} else {
		return HOME_URL;
	}
}

function swapContentScript(dataURL) {
	const OLD_SCRIPT = document.querySelector('content-script');
	if (OLD_SCRIPT !== null) {
		document.head.removeChild(OLD_SCRIPT);
	}

	let scriptURL;
	for (const index in SCRIPT_MAP) {
		const pair = SCRIPT_MAP[index];
		if (pair.url === dataURL) {
			scriptURL = pair.script;
		}
	}

	const NEW_SCRIPT = document.createElement('script');
	NEW_SCRIPT.id = 'content-script';
	// new Promise((resolve, reject) => {
	document.head.prepend(NEW_SCRIPT);
	// NEW_SCRIPT.onload = resolve;
	// NEW_SCRIPT.onerror = reject;
	NEW_SCRIPT.defer = true;
	NEW_SCRIPT.src = `scripts/${scriptURL}`;
	// });
	return;
}

function swapMainContents(dataURL) {
	// console.log(dataURL);	//@DEBUG-FEATURE!
	const DATA_REQUEST = new Request(dataURL);

	fetch(DATA_REQUEST)
		.then((response) => {
			return response.text();
		})
		.then((text) => {
			MAIN.innerHTML = text;
		})
		.catch((error) => {	//@DEBUG-FEATURE!
			MAIN.innerText = error.message;
		});

	swapContentScript(dataURL);
	localStorage.setItem('last-visited', dataURL);
	return;
}

swapMainContents(getLastVisited());