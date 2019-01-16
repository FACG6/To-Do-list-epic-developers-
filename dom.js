(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");
  addTodoForm.classList.add('addToDoForm');
  container.classList.add("container")
  var state = []; // this is our initial todoList

  // add sorttodo button
  let sortButton = document.createElement("i");
  sortButton.setAttribute("class", "fas fa-sort");
  addTodoForm.appendChild(sortButton);
  sortButton.addEventListener("click", function () {
    let newState = todoFunctions.sortTodos(state);
    update(newState);
  });




  // This function takes a todo, it returns the DOM node representing that todo
  let createTodoNode = function (todo) {
    let todoNode = document.createElement("li");
    todoNode.classList.add("li-Style");
    // add span holding description
    let span = document.createElement("span");
    span.classList.add('span-style');
    span.textContent = todo.description;
    todoNode.appendChild(span);
    //add the edit icon
    let editIcon = document.createElement('i');
    editIcon.setAttribute('class', 'far fa-edit');
    todoNode.appendChild(editIcon);
    // add markTodo button
    let markButtonNode = document.createElement("button");
    markButtonNode.classList.add("markButton");
    markButtonNode.textContent = "Mark";
    // this adds the delete button
    let deleteButtonNode = document.createElement("i");
    deleteButtonNode.classList.add("fas");
    deleteButtonNode.classList.add("fa-times");
    todoNode.appendChild(deleteButtonNode);

    deleteButtonNode.addEventListener("click", function (event) {
      let newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    //add event listener to delete button.
    markButtonNode.addEventListener("click", function (event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    if (todo.done === true) {
      span.classList.add('textDecoration');
    }
    todoNode.appendChild(markButtonNode);


    // add classes for css

    // add classes for css
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function (event) {
      // event.preventDefault 
      event.preventDefault();
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
  let update = function (newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  let renderState = function (state) {
    let todoListNode = document.createElement("ul");

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
