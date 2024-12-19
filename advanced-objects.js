// static functies
console.log(`Object.is(4, 4):`, Object.is(4, 4));
console.log(`Object.is([], []):`, Object.is([], [])); // [] === []
console.log(`Object.is({}, {}):`, Object.is({}, {})); // {} === {}
console.log(`Object.is(NaN, NaN):`, Object.is(NaN, NaN)); // NaN === NaN
console.log(`isNaN(NaN):`, isNaN(NaN));
console.log(`isNaN('bla'):`, isNaN("bla"));
console.log(`Number.isNaN('bla'):`, Number.isNaN("bla"));
console.log(`Number.isNaN(NaN):`, Number.isNaN(NaN));
console.log(`Object.is(0, -0):`, Object.is(0, -0));

if (7 / "bla" === 4 / "hoi") {
}

let obj1 = { x: 24 };
let obj2 = { y: "hoi" };

let target = { z: "bla" };

let gemerged = { ...obj1, ...obj2 }; // <== leesbaarheid

Object.assign(target, obj1, obj2); // <== vond ik handig met databewerking van child component naar parent component zichtbaar laten zijn
console.log(target);
console.log(gemerged);

// Proxy

let proxy = new Proxy(target, {
    get(target, prop) {
        console.log('get op', prop, target[prop]);
        return target[prop];
    },
    set(target, prop, value) {
        console.log('set op', prop, value);
        target[prop] = value + 'q';
        return target[prop];
    }
});
proxy.p = 'haai'; // set
console.log(proxy.p); // get

console.log(target);

// Angular Vue React Svelte Solid Qwik Knockout
// - change detection
//   - Angular: complex algoritme Zone.js patcht alle setTimeout()
//   - React: hooks / setState()
//   - Svelte: assignment detection
//   - Vue: PROXY



// unittesten - mocking
// - mocha sinon
// - jasmine
// - jest (Meta)
// - @testing-library - renderen
// - Karma (Angular)

// Reflect



// encapsulation
