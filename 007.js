//count of vowels in string

let str = "kannaneeiou";

let res = str.match(/[aeiou]/gi);
console.log(res);
let count = res ? res.length : 0;
console.log(count)