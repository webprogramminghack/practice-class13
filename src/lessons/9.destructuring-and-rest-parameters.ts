// default value turn the parameter to optional
// parameter data type is inferred from the default value
function printNameAndAge1(name = 'John', options?: { debugMode: boolean }) {
  console.log(name, options);
}

// we can also add the data type
function printNameAndAge2(
  name: string = 'John',
  options?: { debugMode: boolean }
) {
  console.log(name, options);
}

printNameAndAge();

type Options = { debugMode?: boolean };

function printNameAndAge3(name: string = 'John', { debugMode }: Options = {}) {
  console.log(name, debugMode);
}

printNameAndAge3('John');

type PrintNameAndAgeFunc = (
  name: string,
  options?: { debugMode?: boolean; indentLevel?: number }
) => void;

const printNameAndAge4: PrintNameAndAgeFunc = function (
  name,
  { debugMode, indentLevel } = {}
) {
  console.log(name, debugMode, indentLevel);
};

const printNameAndAge5 = function (
  name: string = 'John',
  { debugMode }: Options = {}
) {
  console.log(name, debugMode);
};

const printNameAndAge6 = (
  name: string = 'John',
  { debugMode }: Options = {}
) => {
  console.log(name, debugMode);
};

function sum(...numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

sum(1, 2, 3, 4, 5);
