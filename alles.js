Array.prototype.orderBy = (() => {
  const sorters = {
    number(numbers) {
      return numbers.sort();
    },
    string(strings) {
      return strings.sort((a, b) => a.length - b.length);
    },
  };

  return function () {
    let type = typeof this[0];
    console.log(type);

    return sorters[type](this);
  };
})();

let getallen = [8, 1, 4, 19, 21, 5, 5, -3, 10];
let tekstjes = ["hoi", "a", "iets anders", "what the sigma", "skibidi", "eu"];
let objecten = [{ x: "hoi" }];

console.log(getallen.orderBy());
console.log(tekstjes.orderBy());
