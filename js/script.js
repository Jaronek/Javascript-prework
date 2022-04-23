function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, playerMove;
computerMove = 'kamień';
playerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1)
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
	computerMove = 'kamień';
}	else if (randomNumber == '2') {
	computerMove = 'papier';
} else {
	computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
console.log('Wpisana odpowiedź to: ' +playerInput);
if (playerInput == '1') {
	playerMove = 'kamień';
} else if (playerInput == '2') {
	playerMove = 'papier';
} else if (playerInput == '3') {
	playerMove = 'nożyce';
} else {
	playerMove = 'nieznany ruch'
}
printMessage('Twój ruch: ' +playerMove);

function getMoveName(argMoveId) {
	console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
	if (argMoveId  == 1) {
		return 'kamień';
	}
	else if (argMoveId == 2) {
		return 'papier';
	}
	else if( argMoveId == 3) {
		return 'nożyce';
	}
	else {
	printMessage('Nie znam ruchu o id' + argMoveID + '. Zakładam, że chodziło o "kamień".');
	}
} 

function displayResult(argPlayerMove, argComputerMove) {
	console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == argComputerMove) {
		pritMessage('Remis!');
	} else {
		printMessage('Przegrałeś!')
	}
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);