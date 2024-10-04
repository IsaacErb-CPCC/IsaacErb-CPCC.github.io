"use strict";

/*
  ! NOTICE: This script copies the structure of the MDN
  "fetch-text" example at https://github.com/mdn/dom-examples/blob/main/fetch/fetch-text/index.html.
*/

const MAIN = document.querySelector("main");
const HOME_URL = "home.html";
// const CONTENT_SCRIPT = document.createElement('script');
// CONTENT_SCRIPT.id = 'content-script';

function swapContentScript(scriptName) {
	const OLD_SCRIPT = document.querySelector('content-script');
	if (OLD_SCRIPT !== null) {
		document.head.removeChild(OLD_SCRIPT);
	}

	const NEW_SCRIPT = document.createElement('script');
	NEW_SCRIPT.id = 'content-script';
	// new Promise((resolve, reject) => {
	document.head.prepend(NEW_SCRIPT);
	// NEW_SCRIPT.onload = resolve;
	// NEW_SCRIPT.onerror = reject;
	NEW_SCRIPT.defer = true;
	NEW_SCRIPT.src = `scripts/${scriptName}`;
	// });
	return;
}

function swapMainContents(dataURL, scriptName="none.js") {
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

	swapContentScript(scriptName);
	return;
}

swapMainContents(HOME_URL);