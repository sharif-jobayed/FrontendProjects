const previousOperandTextElement = document.querySelector(`[data-previousOperand]`);
const currentOperandTextElement = document.querySelector(`[data-currentOperand]`);
const buttons = document.querySelectorAll(`button`);
const numbers = document.querySelectorAll(`[data-number]`);
const allClear = document.querySelector(`[data-allClear]`);
const equals = document.querySelector(`[data-equals]`);
const dlt = document.querySelector(`[data-delete]`);
const operators = document.querySelectorAll(`[data-operation]`);

let currentOperand = ``;
let previousOperand = ``;
let operation = null;

const updateDisplay = () => {
	currentOperandTextElement.textContent = currentOperand;
	previousOperandTextElement.textContent = previousOperand;
};

const clear = () => {
	currentOperand = ``;
	previousOperand = ``;
	operation = null;
	updateDisplay();
};

const deleteNumber = () => {
	currentOperand = currentOperand.toString().slice(0, -1);
	updateDisplay();
};

const appendNumber = (number) => {
	if (number === `.` && currentOperand.includes(`.`)) return;
	currentOperand = currentOperand.toString() + number.toString();
	updateDisplay();
};

const chooseOperation = (op) => {
	if (currentOperand === ``) return;
	if (previousOperand !== ``) {
		compute();
	}
	operation = op;
	previousOperand = currentOperand;
	currentOperand = ``;
	updateDisplay();
};

const compute = () => {
	let computation;
	const prev = parseFloat(previousOperand);
	const current = parseFloat(currentOperand);
	if (isNaN(prev) || isNaN(current)) return;
	switch (operation) {
		case `+`:
			computation = prev + current;
			break;
		case `-`:
			computation = prev - current;
			break;
		case `×`:
			computation = prev * current;
			break;
		case `÷`:
			computation = prev / current;
			break;
		default:
			return;
	}
	currentOperand = computation;
	operation = null;
	previousOperand = ``;
	updateDisplay();
};

numbers.forEach(button => {
	button.addEventListener(`click`, () => {
		appendNumber(button.textContent);
	});
});

operators.forEach(button => {
	button.addEventListener(`click`, () => {
		chooseOperation(button.textContent);
	});
});

equals.addEventListener(`click`, button => {
	compute();
});

allClear.addEventListener(`click`, button => {
	clear();
});

dlt.addEventListener(`click`, button => {
	deleteNumber();
});

document.addEventListener(`keydown`, event => {
	if (event.key >= 0 && event.key <= 9 || event.key === `.`) {
		appendNumber(event.key);
	}
	if (event.key === `Enter` || event.key === `=`) {
		compute();
	}
	if (event.key === `Backspace`) {
		deleteNumber();
	}
	if (event.key === `Escape`) {
		clear();
	}
	if (event.key === `+` || event.key === `-` || event.key === `*` || event.key === `/`) {
		chooseOperation(event.key === `*` ? `×` : event.key === `/` ? `÷` : event.key);
	}
});
