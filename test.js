var test = require("tape");
var logic = require("./logic");

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
  }
];

test("logic => mark test", t => {
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
