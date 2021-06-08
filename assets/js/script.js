
var taskIdCounter = 0;
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

  // add task id as custom attributre
  listItemEl.setAttribute("data-task-id", taskIdCounter);

 // create div to hold task info and add to list item
 var taskInfoEl = document.createElement("div");
 //give it class name
 taskInfoEl.className = "task-info";
 
 // add HTML to div
 taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataOvj.name + "</h3><span class='task-type'>" + taskDataOvj.type + "</span>";
 listItemEl.appendChild(taskInfoEl);

// Task id counter
var taskActionsEl = createTaskActions(taskIdCounter);

// append task id counter
listItemEl.appendChild(taskActionsEl);

 // add entire list item to list
 tasksToDoEl.appendChild(listItemEl);

  // increase task counter for next unique id
  taskIdCounter++;
};


//-----------Create task actions ----------------------
var createTaskActions = function(taskId) {
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions";

    // create edit button 
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("dataButtonEl", taskId);

    actionContainerEl.appendChild(editButtonEl)

    // Create Delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    // dropdown select button 
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status"
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    // array of status choices
    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i = 0; i < statusChoices.length; i++) {
      // Create option Element
      var statusOptionEl = document.createElement("option");
      statusOptionEl.textContent = statusChoices[i];
      statusOptionEl.setAttribute("value", statusChoices[i]);

      // Append to select
      statusSelectEl.appendChild(statusOptionEl);
    }


    return actionContainerEl;
};

formEl.addEventListener("submit", taskFormHandler);
