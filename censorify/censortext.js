var censoredWords = ["sad", "bad" , "mad"];
var customcensoredWords = [];
function censor (inStr){
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	for (idx in customcensoredWords) {
		inStr =inStr.replace(customcensoredWords[idx],"****");
	}
	return inStr;
}
function addcensoredWord(word){
customcensoredWords.push(word);
}
function getcensoredWords(){
return censoredWords.concat(customcensoredWords);}
exports.censor=censor;
exports.addcensoredWord=addcensoredWord;
exports.getcensoredWords=getcensoredWords;