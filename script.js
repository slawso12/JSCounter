document.getElementById("statText").addEventListener("click", butClickLetterCount);
document.getElementById("statText").addEventListener("click", butClickspace);
document.getElementById("statUserInput").addEventListener("input",countLetters);
document.getElementById("statUserInput").addEventListener("input",countSpaces);

var cWords = 0;
var cLetters = 0;
var spaces = 0;
function countSpaces(){
	cLetters.match(g).length;
	return spaces;
}
function countLetters(){
	cLetters++;
}


	

function butClickLetterCount(){
		var pLetterCount = document.createElement("P");
		var pAdd = document.createTextNode("Amount of letters entered " + cLetters);
		pLetterCount.appendChild(pAdd);
		document.body.appendChild(pLetterCount);
}
function butClickspace(){
	var spac = document.createElement("P");
	var spacText = document.createTextNode("Amount of spaces " + spaces);
	spac.appendChild(spacText);
	document.body.appendChild(spacText);
} 
