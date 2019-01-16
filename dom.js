(function () {
  // This is the dom node where we will keep our todo
  let container = document.getElementById("todo-container");
  let addTodoForm = document.getElementById("add-todo");
  addTodoForm.classList.add('addToDoForm');
  container.classList.add("container")
  let state = []; // this is our initial todoList
  let days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };

  // add sort-icon to the DOM
  let sortIcon = document.createElement("i");
  sortIcon.setAttribute("class", "fas fa-sort");
  addTodoForm.appendChild(sortIcon);

  //add event listner to the sort-icon
  sortIcon.addEventListener("click", () => {
    let newState = todoFunctions.sortTodos(state);
    update(newState);
  });




  // This function takes a todo, it returns the DOM node representing that todo
  let createTodoNode = todo => {
    let todoNode = document.createElement("li");

    
    // craete a span holding description and append it to the list-item (todoNode)
    let span = document.createElement("span");
    let time = new Date();
    let day = days[time.getDay()];
    let hour =
    time.getHours() > 12
    ? time.getHours() - 12 + ":" + time.getMinutes() + "PM"
    : time.getHours() + ":" + time.getMinutes() + "AM";
    let timeOfTodo = document.createElement("span");
    timeOfTodo.appendChild(document.createTextNode(day + hour));
    span.classList.add("todo-item");
    span.appendChild(document.createTextNode(todo.description));
    todoNode.appendChild(span);
    todoNode.appendChild(timeOfTodo);
    
    //create the edit-icon and append it to the list-item (todoNode)
    let editIcon = document.createElement("i");
    editIcon.setAttribute("class", "far fa-edit");
    todoNode.appendChild(editIcon);
    
    //add eventlistener to the edit icon
    editIcon.addEventListener("click", event => {
      let currentTodo = editIcon.parentElement.querySelector(".todo-item");
      let todoInput = document.querySelector("input[name='description']");
      let addButton = document.querySelector("input[name=submit");
      
      todoInput.value = currentTodo.textContent;
      todoInput.focus();
      todoInput.select();
      
      addButton.value = "Update";
      addButton.setAttribute("class", "update");
      
      currentTodo.setAttribute("id", "update-item");
    });
    
    // create the delete-icon and append it to the list-item (todoNode)
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-times");
    todoNode.appendChild(deleteIcon);
    
    // add eventlistener to the delete-icon
    deleteIcon.addEventListener("click", () => {
      let newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    
    // add markTodo button
    var markButtonNode = document.createElement("button");
    markButtonNode.classList.add("markButton");
    markButtonNode.textContent = "Mark";
    todoNode.appendChild(markButtonNode);
    
    //add event listener to the mark button
    markButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    
    // add classes for css
    if (todo.done === true) {
      span.classList.add('textDecoration');
    }
    todoNode.classList.add("li-Style");
    span.classList.add('span-style');
    todoNode.appendChild(markButtonNode);


    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", () => {
      event.preventDefault();

      let inputText = document.querySelector("input[name='description']");
      let description = inputText.value;
      let addButton = document.querySelector("input[name=submit");

      if (!addButton.classList.contains("update")) {
        let newState = todoFunctions.addTodo(state, description);
        update(newState);
      } else {
        let updateItem = document.querySelector("#update-item");
        let newState = todoFunctions.updateTodo(
          state,
          updateItem.innerText,
          inputText.value
        );
        update(newState);
        addButton.value = "Add";
        addButton.setAttribute("class", "");
        updateItem.setAttribute("id", "");
      }
      inputText.value = "";
    });
  }

  // you should not need to change this function
  let update = newState => {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  let renderState = state => {
    let todoListNode = document.createElement("ul");

    state.forEach(todo => {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
