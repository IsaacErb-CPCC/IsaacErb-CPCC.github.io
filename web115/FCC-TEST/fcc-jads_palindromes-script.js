const inputLoc = document.querySelector("#text-input");
const outputLoc = document.querySelector("#result");
const isAlpha = /^[a-zA-Z]+$/;

function palinFilter(character) {
	return isAlpha.test(character);
}

function palinCheck() {
	let inText = inputLoc.textContent;
	if (inText === null) {
		window.alert("Please input a value");
	} else {
		let inCharUnfiltered = inText.split("");
		let inChar = inCharUnfiltered.filter(char => char.match(isAlpha));
		let isPalin = true;
		for (
			let bgn=0, end=inChar.length()-1;
			isPalin && bgn !== end;
			bgn++, end--
		) {
			const bgnChar = inChar[bgn], endChar = inChar[end];
			isPalin = (bgnChar === endChar);
		}

		message = isPalin ? "is a palindrome":"is not a palindrome";
		outputLoc.innerText = `${inText} ${message}`;
	}
}