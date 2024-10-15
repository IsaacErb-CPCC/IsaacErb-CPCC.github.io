const inputLoc = document.querySelector("#text-input");
const outputLoc = document.querySelector("#result");
const isAlphaNumeric = /^[a-z0-9]+$/;

function palinCheck() {
	let inText = inputLoc.value;
	if (inText === null) {
		window.alert("Please input a value");
	} else {
		let inCharUnfiltered = inText.toLowerCase().split("");
		let inChar = inCharUnfiltered.filter(char => char.match(isAlphaNumeric));
		let isPalin = true;
		for (
			let bgn = 0, end = inChar.length-1;
			isPalin && bgn - end >= -2;
			bgn++, end--
		) {
			const bgnChar = inChar[bgn], endChar = inChar[end];
			isPalin = (bgnChar === endChar);
		}

		message = isPalin ? "is a palindrome":"is not a palindrome";
		outputLoc.innerText = `${inText} ${message}`;
	}
}