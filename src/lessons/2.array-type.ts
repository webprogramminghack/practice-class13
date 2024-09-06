let b: number[];
b = [1, 2, 3];

b.push(1, 2);
b.push(1, 2, 'hello');

const c = [1, 2, 3];
c.push(4);

const e = [1, 2, 3] as const;
e.push(1, 2, 3);
