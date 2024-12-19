import fs from 'fs';

console.log('start');

// fs.readFile('./boek.txt', 'utf8', (err, content) => {
//     console.log('content: ...');
// });

setTimeout(() => {
    console.log('timeout klaar');
}, 1000);
setTimeout(() => {
    console.log('timeout klaar');
}, 0);
setTimeout(() => {
    console.log('timeout klaar');
});


for (let i = 0; i < 50000; i++) {
    console.log('i:', i);
}

console.log('klaar!');