//missing number
let arr = [1, 2, 3, 4, 5, 7];

let n = arr.length+1;
console.log(n);

let res = n * (n + 1) / 2;
console.log(res);

let totalarr = arr.reduce((sum, acc) => sum + acc, 0);
console.log(totalarr)
let miss = res - totalarr;
console.log(miss)