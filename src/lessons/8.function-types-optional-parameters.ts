function printNameAndAge(name: string, options?: { debugMode: boolean }) {
  console.log(name, options);
}

printNameAndAge('John');
printNameAndAge('John', { debugMode: true });

function printNameAndAge2(
  name: string,
  options?: { debugMode?: boolean; comprehensiveMode?: boolean }
) {
  console.log(name, options);
}

printNameAndAge2('John', { debugMode: true });
