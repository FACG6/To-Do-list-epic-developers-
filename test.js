var test = require('tape');
var logic = require('./logic');
//markTodo function
let to_dos_mark = [{
  id: 0,
  description: 'make tea',
  done: false
},
{
  id: 1,
  description: 'eat Lanch',
  done: true
}, {
  id: 2,
  description: 'apple',
  done: false
}
];


test('Example test for mark', function (t) {
  const actual = logic.markTodo(to_dos_mark, 0);
  const expect = [{
    id: 0,
    description: 'make tea',
    done: true
  },
  {
    id: 1,
    description: 'eat Lanch',
    done: true
  },
  {
    id: 2,
    description: 'apple',
    done: false
  }
  ];
  t.deepEqual(actual, expect, 'the done in index 0 must true');
  t.end();
});

test('Example test for mark', function (t) {
  const actual = logic.markTodo(to_dos_mark, 1);
  const expect = [{
    id: 0,
    description: 'make tea',
    done: false
  },
  {
    id: 1,
    description: 'eat Lanch',
    done: false
  }, {
    id: 2,
    description: 'apple',
    done: false
  }
  ];
  t.deepEqual(actual, expect, 'the done in index 1 must false');
  t.end();
});
test('Example test for mark', function (t) {
  const actual = logic.markTodo(to_dos_mark, -1);
  const expect = 'Please Enter Valid ID';
  t.deepEqual(actual, expect, 'when id negative must return Please Enter Valid ID');
  t.end();
});

test('Example test for mark', function (t) {
  const actual = logic.markTodo(to_dos_mark, 5);
  const expect = [{
    id: 0,
    description: 'make tea',
    done: false
  },
  {
    id: 1,
    description: 'eat Lanch',
    done: true
  }, {
    id: 2,
    description: 'apple',
    done: false
  }
  ];
  t.deepEqual(actual, expect, 'the array must not change');
  t.end();
});

// addTodo Function test
let array = [];
test('Test addTodo function', function (t) {
  let actual = logic.addTodo(array, 'ayman');
  let expected = [{ id: 1, description: 'ayman', done: false }]
  t.deepEqual(actual, expected, 'new todo is added to todos array');
  t.end();
});

test('Test addTodo function', function (t) {
  let actual = logic.addTodo(array, '');
  let expected = array;
  t.deepEqual(actual, expected, 'add empty description');
  t.end();
});

test('Test addTodo function', function (t) {
  let actual = logic.addTodo(array, null);
  let expected = array;
  t.deepEqual(actual, expected, 'add null description');
  t.end();
});

test('Test addTodo function', function (t) {
  let actual = logic.addTodo(array, 2);
  let expected = array;
  t.deepEqual(actual, expected, 'add number description');
  t.end();
});

test('Test addTodo function', function (t) {
  let actual = logic.addTodo(array, ' ');
  let expected = array;
  t.deepEqual(actual, expected, 'add space description');
  t.end();
});

test('Test addTodo function', function (t) {
  let actual = typeof (logic.addTodo(array, 'just for test'));
  let expected = 'object';
  t.deepEqual(actual, expected, 'test type of output');
  t.end();
});

//deleteTodo function tests
test('Test deleteTodo function', function (t) {
  let arrayForDelete = [{ id: 1, description: 'ayman', done: false }]
  let actual = logic.deleteTodo(arrayForDelete, 1);
  let expected = [];
  t.deepEqual(actual, expected, 'add space description');

  t.end();
});

//make test for sort
let obj = {};

test('Example test for mark', function (t) {
  const actual = logic.sortTodos(to_dos_mark);
  const expect = [{
    id: 2,
    description: 'apple',
    done: false
  },
  {
    id: 0,
    description: 'make tea',
    done: false
  }, {
    id: 1,
    description: 'eat Lanch',
    done: true
  }
  ];
  t.deepEqual(actual, expect, 'the list is not sorted');
  t.end();
});

test('Example test for mark', function (t) {
  const actual = logic.sortTodos([]);
  const expect = [];
  t.deepEqual(actual, expect, 'must reurn empty array');
  t.end();
});
test('Example test for mark', function (t) {
  const actual = logic.sortTodos([{ id: 0, description: 'eat lunch', done: false }]);
  const expect = [{ id: 0, description: 'eat lunch', done: false }];
  t.deepEqual(actual, expect, 'must reurn one element');
  t.end();
});
to_dos_sort = [{
  id: 0,
  description: 'make tea',
  done: false
},
{
  id: 1,
  description: 'eat Lanch',
  done: true
}, {
  id: 2,
  description: 'apple',
  done: false
}, {
  id: 3,
  description: 'apple tea',
  done: true
}
];
test('Example test for mark', function (t) {
  const actual = logic.sortTodos(to_dos_sort);
  const expect = [{
    id: 2,
    description: 'apple',
    done: false
  }, {
    id: 0,
    description: 'make tea',
    done: false
  }, {
    id: 3,
    description: 'apple tea',
    done: true
  }, {
    id: 1,
    description: 'eat Lanch',
    done: true
  }];
  t.deepEqual(actual, expect, 'the array must sort');
  t.end();
});