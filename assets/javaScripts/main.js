const addTask = document.querySelector(`.addTask`);
const actvCount = document.querySelector(`.actvCount`);
const itemList = document.querySelector(`.itemList`);
let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

// Load tasks from localStorage on page load
window.onload = () => {
	taskArr.forEach(task => {
		const li = document.createElement('li');
		li.classList.add('item');
		// Create checkbox
		const checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.classList.add('itemChk');
		// Create span
		const span = document.createElement('span');
		span.classList.add('itemDesc');
		span.textContent = task;
		li.append(checkbox);
		li.append(span);
		itemList.append(li);

		// Add event listener to checkbox
		checkbox.addEventListener('click', (e) => {
			const coLI = e.target.parentElement;
			const coSpan = coLI.children[1];
			coSpan.classList.toggle('completed');
			if (coSpan.classList.contains('completed')) {
				const itemIndex = taskArr.indexOf(task);
				taskArr.splice(itemIndex, 1);
				actvCount.textContent = taskArr.length;
				localStorage.setItem('taskArr', JSON.stringify(taskArr));
			} else {
				taskArr.push(task);
				actvCount.textContent = taskArr.length;
				localStorage.setItem('taskArr', JSON.stringify(taskArr));
			}
		});
	});
	actvCount.textContent = taskArr.length;
};

// Add new task
addTask.addEventListener('click', () => {
	const newTask = document.querySelector('.newTask').value;

	if (newTask !== '') {
		// Create list item
		const li = document.createElement('li');
		li.classList.add('item');
		// Create checkbox
		const checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.classList.add('itemChk');
		// Create span
		const span = document.createElement('span');
		span.classList.add('itemDesc');
		span.textContent = newTask;
		li.append(checkbox);
		li.append(span);

		taskArr.push(newTask);
		actvCount.textContent = taskArr.length;
		localStorage.setItem('taskArr', JSON.stringify(taskArr));

		document.querySelector('.newTask').value = '';

		// Add event listener to checkbox
		checkbox.addEventListener('click', (e) => {
			const coLI = e.target.parentElement;
			const coSpan = coLI.children[1];
			coSpan.classList.toggle('completed');
			if (coSpan.classList.contains('completed')) {
				const itemIndex = taskArr.indexOf(newTask);
				taskArr.splice(itemIndex, 1);
				actvCount.textContent = taskArr.length;
				localStorage.setItem('taskArr', JSON.stringify(taskArr));
			} else {
				taskArr.push(newTask);
				actvCount.textContent = taskArr.length;
				localStorage.setItem('taskArr', JSON.stringify(taskArr));
			}
		});

		itemList.append(li);
	} else {
		alert('Please enter your new task.');
	}
});
