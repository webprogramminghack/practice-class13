// type Person = {
//   name: string;
//   age: number;
// };

// type PersonWithId = Person & { id: string };
// the above produces the following:
// type PersonWithId = {
//   name: string;
//   age: number;
//   id: string;
// };

interface Person {
  name: string;
  age: number;
}

interface Id {
  id: string;
}

// interface PersonWithAddress extends Id, Person {
//   address: string;
// }

type PersonWithAddress = Id & Person & { address: string };

type Profile = number & { id: string }; // fails

const profile1: Profile = 123;
const profile2: Profile = { id: 'asd' };

type Profile2 = number & string; // fails
type Location = { id: string } & { id: number }; // fails
