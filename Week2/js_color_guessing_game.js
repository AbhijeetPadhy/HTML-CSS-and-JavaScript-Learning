var listOfColors = ["blue","cyan","gold","gray","green","magenta","orange","red","white","yellow"];

function doGame(){
	var random = Math.floor(Math.random() * 9);
	alert("The color is: " + listOfColors[random]);
	var bool = false;
	var count = 0;
	while(!bool){
		count++;
		var guess = prompt("I am thinking of these colors:\n\n"+listOfColors.join()+"\n\nWhat color am i thinking of?");
		bool = checkGuess(guess,random);
	}
	alert("You got your guess right after "+count+" guesses!");
	document.getElementById('body').style.backgroundColor = listOfColors[random];
}

function checkGuess(guess,random){
	if(listOfColors.indexOf(guess) == -1)
		alert("Out of range");
	else if(listOfColors.indexOf(guess) < random)
		alert("Alphabetically less");
	else if(listOfColors.indexOf(guess) > random)
		alert("Alphabetically More");
	else
		return true;
	return false;
}
