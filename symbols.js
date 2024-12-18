

// symbol?
// uniek te adresseren: GUID/UUID
// primitieve value

let sym = Symbol.for('bla'); // get or create: create
let sym2 = Symbol.for('bla'); // get or create: get

console.log('sym === sym2', sym === sym2);
console.log('sym == sym2', sym == sym2);


console.log(sym);

// computed property name?

let suffix = 'name';
let bryan = {
    ['first' + suffix]: 'Bryan',
    ['last' + suffix]: 'Aafjes',
    age: 24,
    [sym]: 'mijn waarde',
    [sym2]: 'andere waarde'
};
console.log(bryan);
console.log(bryan[sym2]);

// Angular Vue React Svelte Solid Qwik ...
// export class HomeComponent {
//     ngOnInit() {

//     }

//     [Lifecyle.OnInit]() {

//     }

//     onUpdateMounted() {

//     }
//     onAfterRender() {

//     }
// }

let obj = {
    x: 24,
    y: "hoi",
    [Symbol.toPrimitive]() {
        return 'nu deze';
    },
    toString() {
        console.log('in toString();');
        return 'whaaaaaaat';
    }
};
console.log('' + obj);

// Symbol.toPrimitive