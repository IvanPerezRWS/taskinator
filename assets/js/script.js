var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

  event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("Select[name='task-type']").value;

    //Check if input vlues are emtpy strings 
    if (!taskNameInput || !taskTypeInput) {
      alert("You need to fill out the task form");
      return false;
    }

    //reset form
    formEl.reset();

    // package up data as an object
    var taskDataOvj = {
      name: taskNameInput,
      type: taskTypeInput
    };

    // Send it as an argument to createTaskEl
    createTaskEl(taskDataOvj);
}; //hmmm


// item that holds the code that creates a mew task HTML element
var createTaskEl = function(taskDataOvj) {

    //copy and pasted from taskFormHandler
  // create list item
 var listItemEl = document.createElement("li");
 listItemEl.className = "task-item";

 // create div to hold task info and add to list item
 var taskInfoEl = document.createElement("div");
 //give it class name
 taskInfoEl.className = "task-info";
 
 // add HTML to div
 taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataOvj.name + "</h3><span class='task-type'>" + taskDataOvj.type + "</span>";
 listItemEl.appendChild(taskInfoEl);

 // add entire list item to list
 tasksToDoEl.appendChild(listItemEl);

};

formEl.addEventListener("submit", taskFormHandler);
