var target;
var flag;
var count;

function do_game(){
	target = Math.floor(Math.random() * 100) + 1;
	document.write(target);
	flag = false;
	count = 0;
	var guess_input;
	while(!flag){
		++count;
		guess_input = parseInt(prompt("I am thinking of a number in the range 1 to 100.\nWhat is the number?"));
		flag = check_guess(guess_input);

	}
}

function check_guess(guess_input){
	if(isNaN(guess_input))
		alert("Enter a number!");
	else if(guess_input < 1 || guess_input > 100)
		alert("Wrong range!");
	else if(guess_input > target)
		alert("Too high!");
	else if(guess_input < target)
		alert("Too low!");
	else{
		alert("You got it!\nIt took you " + count + " guesses to find the right one!");
		return true;
	}
	return false;
}
