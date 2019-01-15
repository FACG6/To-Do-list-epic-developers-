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
      if(isNaN(newTodo) == false){
        return "plz add something to do"
      }
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      const newtodo = todoFunctions.cloneArrayOfObjects(todos);
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
    sortTodos: function(todos, sortFunction) {
      // stretch goal! Do this last
      // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
      const newtodo = todoFunctions.cloneArrayOfObjects(todos);
      // sortFunction will have same signature as the sort function in array.sort
      return newtodo.sort((a,b) => a.done-b.done);
      // hint: array.slice, array.sort
    },
  };
  
  
  // Why is this if statement necessary?
  // The answer has something to do with needing to run code both in the browser and in Node.js
  // See this article for more details: 
  // http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
  if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
  }
  