// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

let todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (() => {
    let idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: todos => {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: (todos, newTodo) => {
    const newtodo = todoFunctions.cloneArrayOfObjects(todos);
    if(!isNaN(newTodo)){
      return todos;
    }

    // returns a new array, it should contain todos with the newTodo added to the end.
    newTodoObj = {
      id: todoFunctions.generateId(),
      description: newTodo,
      done: false
    };
    newtodo.push(newTodoObj);
    return newtodo;
  },
  deleteTodo: (todos, idToDelete) => {
    const newTodo = todoFunctions.cloneArrayOfObjects(todos);
    return newTodo.filter(element => element.id !== idToDelete);
  },

  markTodo: (todos, idToMark) => {
    const newTodos = todos.map(element => ({ ...element }));
    return newTodos.map(element => {
      if (element.id === idToMark) element.done = !element.done;
      return element;
    });
  },
  sortTodos: todos => {
    const newtodo = todoFunctions.cloneArrayOfObjects(todos);
    return newtodo.sort((a, b) => a.done - b.done);
  },
  updateTodo: (todos, currentDescription, newDescription) => {
    const newState = todoFunctions.cloneArrayOfObjects(todos);
    newState.forEach((todo, index) => {
      if (todo.description == currentDescription)
        newState[index].description = newDescription;
    });
    return newState;
  }
};

if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
