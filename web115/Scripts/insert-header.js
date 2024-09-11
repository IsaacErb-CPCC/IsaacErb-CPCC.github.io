"use strict";

const PAGES = [
	{filename: "index.html", title: "Home"},
	{filename: "contract.html", title:"Course-Contract"},
	{filename: "introductions.html", title: "Self-Introduction"},
	{filename: "brand.html", title: "Branding"},
	{filename: "m3-code-output.html", title: "M3 Codeplay"}];

for (let index = 0; index < PAGES.length; index++) {
	const pair = PAGES[index];
	console.log(`<li><a href="${pair.filename}">${pair.title}</a></li>`);
}