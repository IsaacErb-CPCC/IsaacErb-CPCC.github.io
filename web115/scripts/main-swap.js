"use strict";

/*
  ! NOTICE: This script copies the structure of the MDN
  "fetch-text" example at https://github.com/mdn/dom-examples/blob/main/fetch/fetch-text/index.html.
*/

const MAIN = document.querySelector("main");
const HOME_URL = "home.html";
const FILE_INFO = [
	{url: HOME_URL, script: "none.js", title: "Home"},
	{url: "contract.html", script: "none.js", title: "Contract"},
	{url: "introductions.html", script: "none.js", title: "Introduction"},
	{url: "brand.html", script: "none.js", title: "Branding"},
	{url: "m3-code-output.html", script: "m3_code.js", title: "M3 Codeplay"},
	{url: "fizzbuzz0.html", script: "fizz-buzz0.js", title: "FizzBuzz 0"},
	{url: "fizzbuzz1.html", script: "fizz-buzz1.js", title: "FizzBuzz 1"},
	{url: "fizzbuzz2.html", script: "fizz-buzz2.js", title: "FizzBuzz 2"},
	{url: "fizzbuzz3.html", script: "fizz-buzz3.js", title: "FizzBuzz 3"},
	{url: "fizzbuzz4.html", script: "fizz-buzz4.js", title: "FizzBuzz 4"}
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
	const OLD_SCRIPT = document.querySelector('#content-script');
	document.body.removeChild(OLD_SCRIPT);

	let scriptURL;
	for (const index in FILE_INFO) {
		const pair = FILE_INFO[index];
		if (pair.url === dataURL) {
			scriptURL = pair.script;
		}
	}

	const NEW_SCRIPT = document.createElement('script');
	NEW_SCRIPT.setAttribute("id", "content-script");
	NEW_SCRIPT.setAttribute("src", `scripts/${scriptURL}`);
	NEW_SCRIPT.setAttribute("defer", "true");
	document.body.appendChild(NEW_SCRIPT);
	return;
}

function swapTitle(dataURL) {
	const OLD_TITLE = document.querySelector("title");

	document.head.removeChild(OLD_TITLE);

	let title;
	for (const index in FILE_INFO) {
		const group = FILE_INFO[index];
		if (group.url === dataURL) {
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
	swapTitle(dataURL);
	return;
}

//-	Setting event-listeners for swap-buttons.
for (const index in FILE_INFO) {
	const file = FILE_INFO[index].url;
	let button = document.getElementById(`to_${file}`);
	button.addEventListener("click", () => {
		swapMainContents(file);
	});
}

swapMainContents(getLastVisited());