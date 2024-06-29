import { Calculator } from "./calculator.js";

class Main {
	constructor() {

		this.calculator = new Calculator();

		this.previousOperand = document.querySelector(`data-previousOperand`);
		this.currentOperand = document.querySelector(`data-currentOperand`);
		this.numbers = document.querySelectorAll(`[data-number]`);
		this.operators = document.querySelectorAll(`[data-operation]`);
		this.allClear = document.querySelectorAll(`[data-allClear]`);
		this.equals = document.querySelectorAll(`[data-equals]`);
		this.deleteBtn = document.querySelectorAll(`[data-delete]`);
	}
}

export { Main }