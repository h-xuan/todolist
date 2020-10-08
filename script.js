var counter = 0;
const restart = document.querySelector('#restart-div');

/////  event bubbling ///////
const list = document.querySelector('#task-list ul');
list.addEventListener('click', function(e){
	if (e.target.className == 'delete'){
		// const li = e.target.parentElement;
		// list.removeChild(li);
		counter -= 1;
		e.target.style.fontFamily = "sans-serif";
		e.target.style.backgroundColor = "transparent";
		e.target.textContent = String.fromCodePoint(128077);

		
		if (counter == 0)
		{
			restart.style.display = "block";
		}
	}
});




///// add task ///////
const addForm = document.forms['add-task'];
addForm.addEventListener('submit', function(e){
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;
	
	//create elements
	const li = document.createElement('li');
	const taskName = document.createElement('span');
	const doneBtn = document.createElement('span');

	//add content
	doneBtn.textContent = 'done!';
	taskName.textContent = value;

	//add classes
	taskName.classList.add('name');
	doneBtn.classList.add('delete');

	//append to dom
	li.appendChild(taskName);
	li.appendChild(doneBtn);
	list.appendChild(li);
	addForm.reset();
	counter += 1;
	restart.style.display = "none";
});


///// restart tasks /////
const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', function(){
	list.innerHTML = '';
	restart.style.display = "none";
})