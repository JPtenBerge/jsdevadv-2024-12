
Date.prototype.toPrettyString = function() {
    console.log('this:', this);
    return `${this.getDate()}-${this.getMonth() + 1}-${this.getFullYear()}`;
};


let nu = new Date();
console.log(nu.toJSON());


console.log(nu.getDate());
console.log(nu.getMonth() + 1);
console.log(nu.getFullYear());

console.log(new Date('2024/4/5'));
console.log(new Date('2024-4-5'));
console.log(new Date('2024-04-05'));


console.log(nu.toPrettyString());

