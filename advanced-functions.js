test();
test(14, 28);
test(undefined); // default waarde voor iets wat er niet is
test(null); // null is altijd door iemand ingesteld

function test() {
    console.log('hoi!');
}

function test(p1 = 'hoi', p2) {
    console.log('hoi met params!', p1, p2);
} // declaration

const dinges = function() { };


const func = () => { // korter. nieuwer. minder veelzijdig, maar daarmee meer voorspelbaarder en dat is fijn.
    console.log('func hoi');
}; // expressie
func();



// hoisting

// globale object
// console.log(window) // in de browser
// // global // in Node/Bun/Deno/...
// // globalThis // in browser window, op Node/Bun/Deno global

// console.log(globalThis);
// console.log(globalThis === window);

// window.test();
// window.test(14, 28);