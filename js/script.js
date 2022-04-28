let argButtonName;

const buttonPaper = document.getElementById('button-paper'),
	buttonRock = document.getElementById('button-rock'),
	buttonScissors = document.getElementById('button-scissors');
	
let playerPoints = 0, computerPoints = 0;

let roundCounter = 0;

function buttonClicked(argButtonName) {
	clearMessages();
	console.log(argButtonName + ' został kliknięty');

	let computerMove, randomNumber;
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	if (randomNumber == '1') {
		computerMove = 'kamień';
	} else if (randomNumber == '2') {
		computerMove = 'papier';
	} else if (randomNumber == '3') {
		computerMove = 'nożyce';
	} else {
		computerMove = 'nieznany ruch';
	}

	let playerInput, playerMove;
	if (playerInput == '1') {
		playerMove = 'kamień';
	} else if (playerInput == '2') {
		playerMove = 'papier';
	} else if (playerInput == '3') {
		playerMove = 'nożyce';
	} else {
		playerMove = 'nieznany ruch';
	}

	function getMoveName(argMoveId) {
		console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		} else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
			return 'kamień';
		}
	}

	function displayResult(argPlayerMove, argComputerMove) {
		console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
			playerPoints = playerPoints + 1;
			roundCounter = roundCounter + 1;
		} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
			playerPoints = playerPoints + 1;
			roundCounter = roundCounter + 1;
		} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
			playerPoints = playerPoints + 1;
			roundCounter = roundCounter + 1;
		} else if (argPlayerMove == argComputerMove) {
			roundCounter = roundCounter + 1;
		} else {
			computerPoints = computerPoints + 1;
			roundCounter = roundCounter + 1;
		}
	}

	playerMove = argButtonName;
	console.log('wybór ruchu gracza to: ' + playerInput);
	console.log('ruch gracza to: ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);
	printMessage('Twoje punkty ' + playerPoints + ' punkty komputera ' + computerPoints);
	printMessage('Obecnie jest runda ' + roundCounter);
}
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });	

