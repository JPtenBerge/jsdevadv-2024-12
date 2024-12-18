

// dingen die nog experimental achtig

// overerving

function Mammal() {
    this.name = 'mammal';
    this.speak = function() {
        console.log('wwhhoooaaaaa', this.name);
    };
}


function Human() {
    // this.name = 'JP';

    // this.speak = function() {
    //     console.log('hoi', this.name);
    // };
}
Human.prototype = new Mammal(); // <== overerving

let jp = new Human();

// jp.speak = undefined;
// delete jp.speak;


jp.speak();

// class A {
//     speak() {
//         console.log('mammalll A', this.name);
//     }
// }
function A() {
    this.speak = function() {
        console.log('a met speak');
    }
}

class B extends A {
    name = 'JP';
}

let b = new B();
b.speak();
console.log(b);


// Object.getPrototypeOf()
// Object.setPrototypeOf({}, {})
// gebruik niet __proto__