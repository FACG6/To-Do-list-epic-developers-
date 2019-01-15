// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = []; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description
    var span = document.createElement("span");
    span.textContent = todo.description;
    todoNode.appendChild(span);

    // this adds the delete button
    var deleteButtonNode = document.createElement("i");
    deleteButtonNode.classList.add("fas"); 
    deleteButtonNode.classList.add("fa-times");
    todoNode.appendChild(deleteButtonNode);


    deleteButtonNode.addEventListener("click", function (event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });


    // add markTodo button
    var markButtonNode = document.createElement("button");
    markButtonNode.classList.add("mark");
    markButtonNode.textContent = "Mark";
    markButtonNode.addEventListener("click", function (event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      console.log(newState);
      update(newState);
    });
    todoNode.appendChild(markButtonNode);

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      event.preventDefault();
      // what is inside event.target?
      let description = document.querySelector("input[name='description']").value;
       state = todoFunctions.addTodo(state, description);
       console.log(state);
      // var descrip  tion = '?'; // event.target ....
      // hint: todoFunctions.addTodo
      var newState = state; // ?? change this!
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
