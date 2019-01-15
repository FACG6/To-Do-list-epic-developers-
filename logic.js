// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function() {
      var idCounter = 0;
  
      function incrementCounter() {
        return (idCounter += 1);
      }
  
      return incrementCounter;
    })(),
    
    //cloneArrayOfObjects will create a copy of the todos array 
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function(todos) {
      return todos.map(function(todo){
        return JSON.parse(JSON.stringify(todo));
      });
    },
    
    addTodo: function(todos, newTodo) {
      const newtodo = todoFunctions.cloneArrayOfObjects(todos);
      if(!isNaN(newTodo) || newTodo.length < 2){
        alert('Enter a valid To-Do');
        return [];
      }
      
      // returns a new array, it should contain todos with the newTodo added to the end.
      newTodoObj = {
        id: todoFunctions.generateId(),
        description: newTodo,
        done: false,
      }
      newtodo.push(newTodoObj);
      return newtodo;
      
    },
    deleteTodo: function(todos, idToDelete) {
     const newTodo= todoFunctions.cloneArrayOfObjects(todos);
     return newTodo.filter(element  =>  element.id!==idToDelete )
    },
    
    markTodo: function(todos, idToMark) {
      const newTodos = todos.map(element => ({...element}));
      return newTodos.map((element) => {
        if(element.id === idToMark)
        element.done = ! element.done;  
        return element
      })
    },
    sortTodos: function(todos) {
      const newtodo = todoFunctions.cloneArrayOfObjects(todos);
      return newtodo.sort((a,b) => a.done - b.done);
    },
  };
  
  
  if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
  }
  