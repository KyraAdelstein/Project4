window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const addBtn = document.getElementById("add-btn");
   addBtn.addEventListener("click", addBtnClick);

   const newTaskInput = document.getElementById("new-task");
   newTaskInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
}

function addBtnClick() {
   const newTaskInput = document.getElementById("new-task");
   const taskText = newTaskInput.value.trim();

   if (taskText === "") {
      return; // Prevent adding empty tasks
   }

   addTask(taskText);

   // Clear the input and focus back on it
   newTaskInput.value = "";
   newTaskInput.focus();
}

function addTask(taskText) {
   const newTaskItem = document.createElement("li");
   newTaskItem.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;

   const taskList = document.querySelector("ol");
   taskList.appendChild(newTaskItem);

   const doneButtons = document.querySelectorAll(".done-btn");
   const lastDoneButton = doneButtons[doneButtons.length - 1];
   lastDoneButton.addEventListener("click", removeTask);
}

function removeTask(event) {
   const taskItem = event.target.parentNode; // <li> element containing the button
   const taskList = document.querySelector("ol");
   taskList.removeChild(taskItem);
}