"use strict";

const IO_PAIRS = [
	[document.getElementById("profile-image"), document.getElementById("photo-position")],
	[document.getElementById("image-caption"), document.getElementById("caption-output")],
	[document.getElementById("personal-info"), document.getElementById("personal-output")],
	[document.getElementById("professional-info"), document.getElementById("professional-output")],
	[document.getElementById("academic-info"), document.getElementById("academic-output")],
	[document.getElementById("webdev-info"), document.getElementById("webdev-output")],
	[document.getElementById("platform-info"), document.getElementById("platform-output")],
	[document.getElementById("courses-info"), document.getElementById("courses-output")],
	[document.getElementById("fun-info"), document.getElementById("fun-output")],
	[document.getElementById("misc-info"), document.getElementById("misc-output")]
];

const OUTPUT_DIV = document.getElementById("intro-output");
OUTPUT_DIV.setAttribute("style", "display: none");

function formatToElementSeries(rawText, elementTag) {
	const segments = rawText.split("\n");
	let htmlList;
	for (const i in segments) {
		const piece = segments[i];
		htmlList += `<${elementTag}>${piece}</${elementTag}>`;
	}

	return htmlList;
}

function formatToList(rawText) {
	return formatToElementSeries(rawText, "li");
}

function formatToParagraphs(rawText) {
	return rawText.replace("\n", "<br>");
}

function doIntroOutput() {
	let writeValues = [];

	for (const i in IO_PAIRS) {
		let readValue, writeValue;
		const elementPair = IO_PAIRS[i];
		const inputElement = elementPair[0],
			outputElement = elementPair[1];

		if (inputElement.tagName === "textarea") {
			readValue = inputElement.innerText;
		} else {	//tagName is "input";
			readValue = inputElement.value;
		}

		if (outputElement.tagName === "ul" || outputElement.tagName === "ol") {
			writeValue = formatToList(readValue);
		} else if (outputElement.tagName === "img") {
			writeValue = readValue;
		} else {	//tagName is "p", "span", or "figcaption";
			writeValue = formatToParagraphs(readValue);
		}

		outputElement.innerHTML = writeValue;
	}
}

const INTROFORM_SUBMIT = document.getElementById("introform-submit");
INTROFORM_SUBMIT.addEventListener("click", doIntroOutput)



