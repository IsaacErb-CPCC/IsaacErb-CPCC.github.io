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
		let inReverse = [] + inChar;
		inReverse.reverse();
		let isPalin = true;
		for (let i = 0; i < inChar.length; i++) {
			const normChar = inChar[i], revChar = inReverse[i];
			isPalin = (normChar === revChar);
		}

		message = isPalin ? "is a palindrome":"is not a palindrome";
		outputLoc.innerText = `${inText} ${message}`;
	}
}