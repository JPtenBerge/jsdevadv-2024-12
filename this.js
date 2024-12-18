'use strict'; // ES5 errors stricter / taalconstructies "with" / undefined overschrijven


// undefined = 'hoi'; // IE6
// if (bla === undefined) // bla === 'hoi'
// console.log(undefined);


// this wijst standaard naar de eigenaar van de functie
// - in een globale functie => naar globale object
//   - behalve als use strict aanstaat, dan wijst hij naar undefined


function test() {
  console.log("this in test:", this);
}
test();

// constructor functions

function Customer(name, age) {
  console.log("this in Customer:", this);

  this.name = name;
  this.age = age;

  this.buy = () => {
    console.log(`ik, ${this.name}, ga iets kopen kopen kopen`, this);

    const nested = () => {
        console.log('nested this:', this);
    };
    nested();
  };
}
let bryan = new Customer("Levi", 24);
console.log(bryan);
bryan.buy();

// bryan.nested();

let buy = bryan.buy;
// buy();
buy.call({ name: 'Frank' }); //  this redirecten: AngularJS jQuery Mocha
buy.apply({ name: 'Frank' });
let buyMetFrank = buy.bind({ name: 'Frankiieeee' });
buyMetFrank();
buyMetFrank();
buyMetFrank();


// new () => {}