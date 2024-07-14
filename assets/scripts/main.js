const previousOperandElement = document.querySelector('[data-previousOperand]');
const currentOperandElement = document.querySelector('[data-currentOperand]');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('[data-number]');
const allClear = document.querySelector('[data-allClear]');
const equals = document.querySelector('[data-equals]');
const dlt = document.querySelector('[data-delete]');
const operators = document.querySelectorAll('[data-operation]');
let currentOperand = '';
let previousOperand = '';
let currentOperator = '';

const updateDisplay = () => {
	currentOperandElement.textContent = currentOperand;
	previousOperandElement.textContent = previousOperand;
}

const handleNumberClick = (number) => {
	if (number === '.' && currentOperand.includes('.')) return;
	currentOperand = currentOperand.toString() + number.toString();
	updateDisplay();
}

const handleOperatorClick = (operator) => {
	if (currentOperand === '') return;
	if (previousOperand !== '') {
		compute();
	}
	currentOperator = operator;
	previousOperand = currentOperand;
	currentOperand = '';
	updateDisplay();
}

const compute = () => {
	let computation;
	const prev = parseFloat(previousOperand);
	const current = parseFloat(currentOperand);
	if (isNaN(prev) || isNaN(current)) return;

	switch (currentOperator) {
		case '+':
			computation = prev + current;
			break;
		case '-':
			computation = prev - current;
			break;
		case '&times;':
			computation = prev * current;
			break;
		case '&div;':
			computation = prev / current;
			break;
		default:
			return;
	}
	currentOperand = computation;
	currentOperator = undefined;
	previousOperand = '';
}

const handleEqualsClick = () => {
	compute();
	updateDisplay();
}

const handleAllClearClick = () => {
	currentOperand = '';
	previousOperand = '';
	currentOperator = undefined;
	updateDisplay();
}

const handleDeleteClick = () => {
	currentOperand = currentOperand.toString().slice(0, -1);
	updateDisplay();
}

numbers.forEach(button => {
	button.addEventListener('click', () => {
		handleNumberClick(button.textContent);
	});
});

operators.forEach(button => {
	button.addEventListener('click', () => {
		handleOperatorClick(button.textContent);
	});
});

equals.addEventListener('click', handleEqualsClick);
allClear.addEventListener('click', handleAllClearClick);
dlt.addEventListener('click', handleDeleteClick);

updateDisplay();
