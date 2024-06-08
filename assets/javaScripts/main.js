

const addTask = document.querySelector(`.addTask`);
const actvCount = document.querySelector(`.actvCount`);
const itemList = document.querySelector(`.itemList`);
const taskArr = [];

addTask.addEventListener(`click`, () => {
	const newTask = document.querySelector(`.newTask`).value;

	if (!newTask == ``) {
		//li
		const li = document.createElement(`li`);
		li.classList.add(`item`);
		//checkbox
		const checkbox = document.createElement(`input`);
		checkbox.setAttribute(`type`, `checkbox`);
		checkbox.classList.add(`itemChk`);
		//span
		const span = document.createElement(`span`);
		span.classList.add(`itemDesc`);

		span.textContent = newTask;
		li.append(checkbox);
		li.append(span);
		taskArr.push(li);
		actvCount.textContent = taskArr.length;
		document.querySelector(`.newTask`).value = ``;

		//mark completed
		checkbox.addEventListener(`click`, (e) => {
			const coLI = e.target.parentElement;
			const coSpan = coLI.children[1];
			coSpan.classList.toggle(`completed`);

			if (coSpan.classList.contains(`completed`)) {
				const itemIndex = taskArr.indexOf(coLI);
				taskArr.splice(itemIndex, 1);
				console.log(taskArr);
				actvCount.textContent = taskArr.length;
			} else {
				taskArr.push(coLI);
				actvCount.textContent = taskArr.length;
				console.log(taskArr);
			}
		});

	} else {
		alert(`Please enter your new task.`)
	}

	for (let i of taskArr) {
		itemList.append(i);
	}

});