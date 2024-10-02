"use strict";

/*
  ! NOTICE: This script copies the structure of the MDN
    "fetch-text" example at https://github.com/mdn/dom-examples/blob/main/fetch/fetch-text/index.html.
*/

const MAIN = document.querySelector("main");
const HOME_URL = "home.html";
const CONTENT_LINKS = document.querySelectorAll("nav a");

for (const link of CONTENT_LINKS) {
	link.onclick = (contentRequest) => {
		contentRequest.preventDefault();
		const DATA_URL = contentRequest.target.getAttribute("data-page");
		swapMainContents(DATA_URL);
	};
}

function swapMainContents(dataURL) {
	console.log(dataURL);	//@DEBUG-FEATURE!
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
}

swapMainContents(HOME_URL);