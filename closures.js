// wanneer een functie een stukje unieke interne state bijhoudt

function counter() {
    let tellertje = 0;

    return {
        increment() {
            tellertje++;
            return tellertje;
        }
    };
}

let myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());

let mySecondCounter = counter();
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());

function betterCounter() {
    let tellertje = 0;

    return function() {
        tellertje++;
        return tellertje;
    };
}

let myBetterCounter = betterCounter();
console.log(myBetterCounter());
console.log(myBetterCounter());
console.log(myBetterCounter());

// Angular / Solid - SIGNALS


export class HomeComponent {

    getal = signal(42);

    dubbelGetal = computed(() => {
        return this.getal() * 2;
    });

    onInitialized() {
        const self = this;

        document.addEventListener('keyup', function() {

            // self.getal.setValue(...);
        });
    }
}


var self = this;
let _this = this;
let vm = this;
let local = this;
let self = this;
