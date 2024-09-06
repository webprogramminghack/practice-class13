function sumWithCallback(a: number, b: number, cb: Function) {
  cb(a + b);
}

sumWithCallback(1, 2, (sum) => console.log(sum));

function sumWithCallback2(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}

sumWithCallback2(1, 2, (sum) => console.log(sum));

type SumCallback = (sum: number) => void;

function sumWithCallback3(a: number, b: number, cb: SumCallback) {
  cb(a + b);
}

document.querySelector('#app')!.addEventListener('click', (event) => {
  console.log(event.target);
});

const eventListenerCallback = (event: Event) => {
  console.log(event.target);
};

document
  .querySelector('#app')!
  .addEventListener('click', eventListenerCallback);
