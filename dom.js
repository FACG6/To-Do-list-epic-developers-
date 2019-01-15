(function() {
  // This is the dom node where we will keep our todo
  let container = document.getElementById("todo-container");
  let addTodoForm = document.getElementById("add-todo");

  let state = []; // this is our initial todoList

  // add sort button button
  let sortIcon = document.createElement('i');
  sortIcon.setAttribute('class', 'fas fa-sort');
  addTodoForm.appendChild(sortIcon);

  //add event listner to the sort-icon
  sortIcon.addEventListener("click", function() {
    let newState = todoFunctions.sortTodos(state);
    update(newState);
  });

  // This function takes a todo, it returns the DOM node representing that todo
  let createTodoNode = function(todo) {
    let todoNode = document.createElement("li");

    // add span holding description
    let span = document.createElement("span");
    span.textContent = todo.description;
    todoNode.appendChild(span);

    //add the edit icon
    let editIcon = document.createElement('i');
    editIcon.setAttribute('class', 'far fa-edit');
    todoNode.appendChild(editIcon);

    // this adds the delete button
    let deleteButtonNode = document.createElement("i");
    deleteButtonNode.classList.add("fas");
    deleteButtonNode.classList.add("fa-times");
    todoNode.appendChild(deleteButtonNode);

    deleteButtonNode.addEventListener("click", function(event) {
      let newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    // add markTodo button
    let markButtonNode = document.createElement("button");
    markButtonNode.classList.add("markButton");
    markButtonNode.textContent = "Mark";
    //add event listener to the mark button
    markButtonNode.addEventListener("click", function(event) {
      let newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markButtonNode);

    if (todo.done === true) {
      span.classList.add("qqq");
    }

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      event.preventDefault();
      // what is inside event.target?

      let inputtext = document.querySelector("input[name = 'description']");
      let description = inputtext.value;
      inputtext.value = " ";
      state = todoFunctions.addTodo(state, description);

      // let descrip  tion = '?'; // event.target ....
      // hint: todoFunctions.addTodo
      let newState = state; // ?? change this!

      update(newState);
    });
  }

  // you should not need to change this function
  let update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  let renderState = function(state) {
    let todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
