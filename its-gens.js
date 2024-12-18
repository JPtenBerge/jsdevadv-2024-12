
// iterators?
// foreach - er doorheen kunnen itereren
// zeer vergelijkbaar met IEnumerable<T>

let jp = {
    favorieteDranken: ['Sprite', 'Fristi'],
    favorieteChips: ['Nibb-it rings', 'Wokkels paprika'],
    [Symbol.iterator]() {
        let alles = [...this.favorieteChips, ...this.favorieteDranken];
        let index = 0;
        return { // enumerator
            next() {
                return {
                    value: alles[index],
                    done: ++index > alles.length
                }
            }
        }
    }
};
for (let prop in jp) { // reflection-like
    console.log('prop:', prop, jp[prop]);
}
for (let item of jp) { // iteration
    console.log('item:', item);
}

// let server = createServer();
// for await (let conn of server.connections) {

// }

// JS-runtimes
// - Node: 2009 Ryan Dahl
// - Deno: 2020 Ryan Dahl
//   - TS
//   - deno run --allow-read C:\Temp --allow-net bla.ts
//   - v2 helemaal compatible met npm
// - bun: 2021


// generators: iterators, maar dan meer controle. minder lowlevel rompslomp.

// function* readFiles() {
//     yield nextLine;
// }

function* gen() {
    console.log('eerste');
    yield 4;
    console.log('tweede');
    yield 8;
    console.log('derde');
    yield 15;
}

// let source = gen();
// console.log(source.next());
// console.log(source.next());
// console.log(source.next());

// .ToListAsync()/.ToArrayAsync()

for (let item of gen()) { // iteration
    console.log('item:', item);
}



function* traverseNode(node) {
    yield* node.left;
    yield node.value;
    yield* node.right;
}