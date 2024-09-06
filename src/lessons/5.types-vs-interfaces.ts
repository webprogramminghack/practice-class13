// type Person = {
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
//   friends: string[];
//   address: {
//     street: string;
//   };
// };

interface Person {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
  address: {
    street: string;
  };
}

const person: Person = {
  name: 'John',
  age: 30,
  friends: [],
  address: {
    street: '123 Main st',
  },
};

// type is better than interface
type Num = number;
type NumString = number | string;
