let id: string | number | boolean = 7;
id = '7';
id = true;

type Todo = {
  name: string;
  status: 'Complete' | 'Incomplete';
};

const todo1: Todo = { name: 'Buy milk', status: 'Complete' };
const todo2: Todo = { name: 'Buy milk', status: 'Incomplete' };
const todo3: Todo = { name: 'Buy milk', status: 'Complet' };

type TodoComplete = {
  status: 'Complete';
  completedAt: Date;
};

type TodoIncomplete = {
  status: 'Incomplete';
  reason: string;
};

type TodoStatus = TodoComplete | TodoIncomplete;

const todoStatus1: TodoStatus = {
  status: 'Complete',
  completedAt: new Date(),
};

const todoStatus2: TodoStatus = {
  status: 'Incomplete',
  reason: 'I forgot to buy it',
};

// interface can't do union
// that's why type is more flexible than interface
