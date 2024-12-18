

// global namespace pollution

// Immediately Invoked Function Expression
// Immediately Invoked Arrow Function Expression

(function() {
    var bla = 'hoi';
    console.log('iife werkt 5!');
})();


(() => {
    var bla = 'hoi';
    console.log('iiafe werkt 5!');
})();


let x = 14;
var y = 15;
const z = 16;
q = 17;