

// Set? collectie met unieke waarden   ===
let setje = new Set();
setje.add(4);
setje.add(4);
setje.add('4');
setje.add(4);
setje.add(4);
setje.add(4);
setje.add('5');
setje.add(42);
console.log(setje.size)
console.log(setje);


// Map? key-value pair collectie
let mappie = new Map();
mappie.set('hoi', 'doei');
mappie.set('hoi', 42);
mappie.set('bla', []);
mappie.set(setje, 'hoiiiii');

console.log(mappie.get(setje));

// wat is het verschil tussen een gewoon JS-object en een Map?
let obj = {
    hoi: 'doei',
    bla: []
};
// - performance - Nico.js - CODEDOCENT stryker optimalisatie maps
// - volgorde keys
// - complexe keys
// - standaardfuncties/properties: 
// Object.keys(obj).length
// Object.values(obj)
// Object.

// WeakSet - DOM-elementen die automagisch werden opgeruimd als ze niet meer werden aangesproken
// WeakMap
