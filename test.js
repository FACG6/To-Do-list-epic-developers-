var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

test("testin delete",function(t){
  let array =[{id:1,
    description: 'first todo',
    done :true

 },
 {id:2,
   description: 'second todo',
   done :true

}];
  const actual=logic.deleteTodo(array,2); 
 const expected= [{id:1,
  description: 'first todo',
  done :true

}];

t.deepEqual(actual,expected,"delete is done");
t.end();
});

test("testin delete",function(t){
  let array =[{id:1,
    description: 'first to do',
    done :true

 },
 {id:2,
   description: 'second to do',
   done :true

},
{id:3,
  description: 'second to do',
  done :true

}];
  
 const expected= [{id:1,
  description: 'first to do',
  done :true

},
 {id:2,
  description: 'second to do' ,
  done :true

}];
const actual=logic.deleteTodo(array,3); 
t.deepEqual(actual,expected,"delete is done");
t.end();
});