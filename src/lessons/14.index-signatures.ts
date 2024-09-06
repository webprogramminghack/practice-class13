type User = {
  name: string;
  age: number;
};

const user: User = {
  name: 'John',
  age: 30,
};

user.isAdmin = true;

type UserWithDynamicProperties = {
  name: string;
  age: number;
  [key: string]: any; // index signature
};

const user2: UserWithDynamicProperties = {
  name: 'John',
  age: 30,
};

// user2.isAdmin = true;
// user2['role'] = 'admin';

interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ['hello', 'world'];

interface StringManipulator {
  (input: string): string;
  [key: string]: any;
}

const toUpperCase: StringManipulator = (input: string) => input.toUpperCase();
toUpperCase.description = 'Turns the text into uppercase';
