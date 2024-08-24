"use strict";

const PAGES = [
	{filename: "index.html", title: "Home"},
	{filename: "contract.html", title:"Course-Contract"},
	{filename: "introductions.html", title: "Self-Introduction"},
	{filename: "brand.html", title: "Branding"}];

for (let index = 0; index < PAGES.length; index++) {
	const pair = PAGES[index];
	document.write(`<li><a href="${pair.filename}">${pair.title}</a></li>`);
}