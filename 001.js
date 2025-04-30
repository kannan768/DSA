//reverse each word a string
let str = "i love you"

let res = str.split(" ");
let res1 = res.map((item) => item.split('').reverse().join(''));
console.log(res1.join(' '));
