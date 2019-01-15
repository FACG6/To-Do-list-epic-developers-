var test = require('tape');
var logic = require('./logic');

test('testing add new todo', function(t) {
  let array = [];
  const actual = logic.addTodo(array, "test adding") ;
  const expectes = [
    {
      id: 1,
      description: "test adding",
     done: false,
    }
    ]
  t.deepEqual(actual,expectes, "done adding the new todo");
  t.end();
});

test('testing add new todo as anumber', function(t) {
  let array = [];
  const actual = logic.addTodo(array, "51") ;
  const expectes = "plz add something to do";
  [
    {
      id: 1,
      description: "test adding",
     done: false,
    }
  ]
  t.deepEqual(actual,expectes, "done testing add numbers");
  t.end();
});

test('testing add space', function(t) {
  let array = [];
  const actual = logic.addTodo(array, "  ") ;
  const expectes = "plz add something to do";
  [
    {
      id: 1,
      description: "test adding",
     done: false,
    }
  ]
  t.deepEqual(actual,expectes, "done testing space");
  t.end();
});