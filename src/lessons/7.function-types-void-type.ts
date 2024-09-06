function printName(name: string) {
  console.log(name);
}

// void is the absence of the value
// undefined is a value is not assigned
const a = printName('asd');

function handleClick(callback: (text: string) => void) {
  callback('hello');
}

handleClick(console.log);

function sum(a: number, b: number) {
  return a + b;
}
