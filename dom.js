// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    {
      id: 0,
      description: 'sssss',
      done: true
    },
    {
      id: 1,
      description: 'ggggg',
      done: true
    }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description
    var span = document.createElement("span");
    span.textContent = todo.description;
    todoNode.appendChild(span);

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.classList.add("del");
    deleteButtonNode.textContent = "Delete";
    todoNode.appendChild(deleteButtonNode);


    deleteButtonNode.addEventListener("click", function (event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });


    // add markTodo button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.classList.add("mark");
    deleteButtonNode.textContent = "Mark";
    todoNode.appendChild(deleteButtonNode);

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function (event) {
      event.preventDefault();


      var description = '?'; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = []; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function (newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function (state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();