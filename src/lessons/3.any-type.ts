let a: any = 4;
a = 3;
a = 'hello';
a.location = 'USA';
a(); // no error

const x = JSON.parse('{"name": "John"}');

async function fetchUser() {
  const response = await fetch('https://api.github.com/users/iliakan');

  const user = await response.json();
}
