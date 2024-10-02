"use strict";

class PageContents {
	constructor(filename) {
		// let request = fetch(`https://IsaacErb-CPCC.github.io/web115/${filename}.html`);
		this.contents = fetch(`https://IsaacErb-CPCC.github.io/web115/${filename}.html`).then((response) => response.text());
	}
}

const MAIN = document.querySelector("main");

const HOME = new PageContents("home");
const BRAND = new PageContents("brand");

function swapMainContents(pageObject) {
	MAIN.innerHTML = pageObject.contents;
}

swapMainContents(HOME);