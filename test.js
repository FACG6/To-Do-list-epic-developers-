var test = require("tape");
var logic = require("./logic");



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

test("logic => mark test", t => {
  let todos = [
    {
      id: 0,
      description: "todo1",
      done: false
    },
    {
      id: 1,
      description: "todo2",
      done: false
    }];
  let actual = logic.markTodo(todos, 0);
  let expected = [
    {
      id: 0,
      description: "todo1",
      done: true
    },
    {
      id: 1,
      description: "todo2",
      done: false
    }
  ];
  t.deepEqual(actual, expected, "The id was marked");

  actual = logic.markTodo(todos, 1);
  expected = [
    {
      id : 0,
      description: "todo1",
      done: false
    },
    {
      id : 1,
      description: "todo2",
      done: true
    }
  ];
  t.deepEqual(logic.markTodo(todos, 1), expected, 'The id was marked');
  t.end();
});
