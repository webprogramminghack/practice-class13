type Person = {
  readonly id: number;
  name: string;
  age: number;
};

const person: Person = { id: 1, name: 'John', age: 30 };
person.id = 2;
person.name = 'Sally';

type NumberArray = readonly number[];

const nums: NumberArray = [1, 2, 3];
nums.push(4);
nums[3] = 1;
nums[4] = 3;

// if the method doesn't mutate the array, then the method is not omitted
const doubleNums = nums.map((num) => num * 2);
const sum = nums.reduce((acc, num) => acc + num, 0);

// you can't do this
type ReadOnlyFirstElement = [readonly string, number];
