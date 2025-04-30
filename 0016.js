//compiring ibjects
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };

let res = JSON.stringify(obj1);
let res1 = JSON.stringify(obj2);

console.log(res==res1);