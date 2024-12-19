// Promise?
// - belofte: dat er een bepaald iets gereturnd gaat worden na een bepaalde tijd
//   - result: stukje data
//   - error
// - altijd 1 result/error
// vooral een notatie: geen pyramid of doom, standaardnotatie voor async processen
// Promises zijn eager

let prom = new Promise((resolve, reject) => {
  // het async werk wat gedaan moet worden
  // AJAX request/network
  // filesystem/database

  console.log("promise start");
  setTimeout(() => {
    console.log("timeout klaar met twee resolves en reject!");
    console.log("hier?");
    resolve(42);
    resolve(108);
    reject("ga weg");
  }, 2000);
});

prom.then((result) => console.log("eerste prom result:", result));

// try {
setTimeout(() => {
  console.log("thennen");
  prom
    .then((x) => x * 2) // output van deze then is de input voor de volgende then
    .then((result) => console.log("tweede prom result:", result))
    .catch((err) => console.log("ohohhh", err));
}, 5000);

// IIAAFE
// (async () => {
// let result = await prom;
// console.log('awaited result:', result);

// })();

// }
// catch(err) {
//     console.log('oh nee!', err);
// }
// console.log(prom);

// fetch('api/product').then(x => x.json()).then(products => {

// })

let prom1 = new Promise((res) => setTimeout(() => res("eerste"), 1000));
let prom2 = new Promise((res, rej) => setTimeout(() => rej("tweede"), 1800));
let prom3 = new Promise((res) => setTimeout(() => res("derde"), 2000));

try {
  let results = await Promise.allSettled([prom1, prom2, prom3]);
  console.log("RESULTATEN", results);
} catch (err) {
  console.log("all err:", err);
}




// Asynchronous JavaScript And XML-requests

// XMLHttpRequest
// fetch() - 400 500

// axios
// - interceptors

// ...-query  tanstack
// GET api/products
// POST api/products ^---
