
document.addEventListener('DOMContentLoaded', () => {
	const cells = document.querySelectorAll('.cell');
	const pName = document.querySelector('.pName');
	const pScore = document.querySelector('.pScore');
	let currentPlayer = 'X';
	let gameBoard = ['', '', '', '', '', '', '', '', ''];
	let score = { X: 0, O: 0 };

	pName.textContent = currentPlayer;
	pScore.textContent = `${score.X} - ${score.O}`;

	cells.forEach((cell, index) => {
		cell.addEventListener('click', () => {
			if (!cell.textContent && !checkWinner()) {
				cell.textContent = currentPlayer;
				gameBoard[index] = currentPlayer;
				if (checkWinner()) {
					score[currentPlayer]++;
					alert(`${currentPlayer} wins!`);
					resetBoard();
				} else if (gameBoard.every(cell => cell)) {
					alert('Draw!');
					resetBoard();
				} else {
					currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
					pName.textContent = currentPlayer;
					pScore.textContent = `${score.X} - ${score.O}`;
				}
			}
		});
	});

	function checkWinner() {
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		return winningCombinations.some(combination => {
			return combination.every(index => {
				return gameBoard[index] === currentPlayer;
			});
		});
	}

	function resetBoard() {
		gameBoard = ['', '', '', '', '', '', '', '', ''];
		cells.forEach(cell => cell.textContent = '');
		currentPlayer = 'X';
		pName.textContent = currentPlayer;
		pScore.textContent = `${score.X} - ${score.O}`;
	}
});
