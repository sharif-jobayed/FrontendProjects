import { Main } from "./main.js";

class Calculator extends Main {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
	}

	clear() {
		this.previousOperandTextElement = ``;
	}
	delete() { }
	appendNumber(number) { }
	chooseOperation(operation) { }
	compute() { }
	updateDisplay() { }
}

export { Calculator }