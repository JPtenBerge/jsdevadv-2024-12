'use strict';

/*
1. iets private maken
2. closures  <== DONE
3. getters/setters
4. configuration
5. conventie
*/
let jp = {
    _age: 27
};
console.log(jp);

class Human {
    #age = 24;

    get age() {
        return this.#age;
    }
    set age(value) {
        if(value > 120) {
            throw new Error('Geen mens wordt zo oud, hou op');
        }
        this.#age = value;
    }
}

let levi = new Human();
console.log(levi);
// console.log(levi.#age); // hier is JS meer typesafe dan C#
console.log(levi.age);

levi.age = 70;
console.log(levi.age);

console.log('-----------');

let obj = { x: 24, y: 'hoi' };
// obj.z = 1234;
Object.defineProperty(obj, 'qwertyu', { // om een setter te overschrijven
    enumerable: false,
    writable: false,
    value: 24,
    configurable: false
});
Object.preventExtensions(obj);
obj.y = 1234567;
Object.freeze(obj);


// Object.seal() // configureerbaar


console.log(obj);
console.log(obj.z);