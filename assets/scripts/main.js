
const previousOperandValue = document.querySelector(`[data-previousOperand]`).textContent.toString();
const currentOperandValue = document.querySelector(`[data-currentOperand]`).textContent.toString();
const numbers = document.querySelectorAll(`[data-number]`);
const allClear = document.querySelector(`[data-allClear]`);
const equals = document.querySelector(`[data-equals]`);
const dlt = document.querySelector(`[data-delete]`);
const operators = document.querySelectorAll(`[data-operation]`);
let currentNumber;
let currentOperator;

const getNumber = () => {
	numbers.forEach((n) => {
		n.addEventListener(`click`, () => {
			currentNumber = parseInt(n.textContent);
			console.log(currentNumber);
		});
	});
}
getNumber();

const getOperator = () => {
	operators.forEach((o) => {
		o.addEventListener(`click`, () => {
			currentOperator = o.textContent.toString();
			console.log(currentOperator);
		});
	});
}
getOperator();
