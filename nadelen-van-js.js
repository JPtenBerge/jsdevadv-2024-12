

// te dynamisch, te flexibel

let obj = { x: 24, y: 'hoi' };
obj.z = 12345;
delete obj.x;


function doe(p1, p2) {

}


console.log(obj.x);
console.log(obj['x']);
let prop = 'x';
console.log(obj[prop]);