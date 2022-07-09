function capitalize(text) {
	let newText = "";
	newText += text.charAt(0).toUpperCase();
	for(let char in text) {
		newText += text[char].toLowerCase();
	}

	return newText;
}

function lastLetter(string) {
	return string[string.length - 1];
}

console.log(capitalize("hArFM ReducatTion"));
console.log(capitalize("hooplah about nothing"));
console.log(capitalize("HELLFEST AND FRUMINSTEIN"));
console.log(capitalize("JeorAc OF the JunGlE"));

console.log(lastLetter("Freal"));
console.log(lastLetter("Armful of charis"));
